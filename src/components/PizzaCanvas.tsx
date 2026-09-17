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
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const [frameOneLoaded, setFrameOneLoaded] = useState(false);

  // Helper to draw a frame cleanly onto canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested frame, or fallback to nearest loaded frame
    let img = imagesRef.current[index];
    if (!img || !img.complete) {
      // Search backwards for nearest loaded frame
      for (let i = index - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i]?.complete) {
          img = imagesRef.current[i];
          break;
        }
      }
      // If still null, search forwards or default to frame 0
      if (!img && imagesRef.current[0] && imagesRef.current[0]?.complete) {
        img = imagesRef.current[0];
      }
    }

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

  // Step 1: Instant load of Frame 1 on mount
  useEffect(() => {
    const padZero = (num: number) => num.toString().padStart(3, '0');
    
    // Load frame 1 immediately
    const img1 = new Image();
    img1.src = `/pizza-frames-png/ezgif-frame-001.png`;
    img1.onload = () => {
      imagesRef.current[0] = img1;
      setFrameOneLoaded(true);
      renderFrame(0);
    };

    // Asynchronously preload remaining frames in background without blocking
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/pizza-frames-png/ezgif-frame-${padZero(i)}.png`;
      const frameIdx = i - 1;
      img.onload = () => {
        imagesRef.current[frameIdx] = img;
      };
    }
  }, []);

  // Step 2: Set up Canvas Sizing & GSAP ScrollTrigger
  useEffect(() => {
    if (!frameOneLoaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

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

    // Initial render of frame 1
    renderFrame(0);

    // GSAP ScrollTrigger strictly driving frame animation on scroll
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      onUpdate: (self) => {
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
  }, [frameOneLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] sm:max-w-[550px] mx-auto flex items-center justify-center bg-transparent"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
};
