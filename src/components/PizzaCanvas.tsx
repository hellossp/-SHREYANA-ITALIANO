'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TOTAL_FRAMES = 78;

export const PizzaCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Preload all 78 transparent PNG frame images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const padZero = (num: number) => num.toString().padStart(3, '0');

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/pizza-frames-png/ezgif-frame-${padZero(i)}.png`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, []);

  // Draw current frame to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // GSAP ScrollTrigger strictly driven by scroll
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Handle canvas sizing
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(currentFrame.frame);
    };

    const currentFrame = { frame: 0 };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initial render
    renderFrame(0);

    // GSAP ScrollTrigger strictly driving frame animation on scroll
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      onUpdate: (self) => {
        // Scrub through 78 frames based on page scroll position
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(self.progress * (TOTAL_FRAMES - 1) * 2.5) % TOTAL_FRAMES)
        );
        currentFrame.frame = frameIndex;
        renderFrame(frameIndex);
      },
    });

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      trigger.kill();
    };
  }, [imagesLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] sm:max-w-[550px] mx-auto flex items-center justify-center bg-transparent"
    >
      {!imagesLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-transparent z-10">
          <div className="w-9 h-9 rounded-full border-2 border-[#D97736] border-t-transparent animate-spin" />
          <div className="text-xs text-[#E5C384] font-medium font-sans">
            Preparing 3D Pizza ({loadProgress}%)
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
};
