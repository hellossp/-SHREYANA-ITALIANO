'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/menu';
import { useCart, SelectedOption } from '@/context/CartContext';
import { 
  Sparkles, 
  Search, 
  Flame, 
  Plus, 
  Check, 
  ChefHat, 
  Info, 
  Utensils, 
  Pizza, 
  Cake, 
  GlassWater,
  X
} from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  
  // Customization Modal state
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [modalSelectedOptions, setModalSelectedOptions] = useState<SelectedOption[]>([]);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesVeg = vegFilter === 'all' ? true : vegFilter === 'veg' ? item.isVeg : !item.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pizza': return <Pizza className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Cake': return <Cake className="w-4 h-4" />;
      case 'GlassWater': return <GlassWater className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const handleOpenCustomization = (item: MenuItem) => {
    if (item.options && item.options.length > 0) {
      setSelectedItemForModal(item);
      setModalSelectedOptions([]);
    } else {
      addToCart(item, []);
      showToast(item.name);
    }
  };

  const handleOptionToggle = (option: SelectedOption) => {
    setModalSelectedOptions((prev) => {
      const exists = prev.some((o) => o.name === option.name);
      if (exists) {
        return prev.filter((o) => o.name !== option.name);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleModalAddToCart = () => {
    if (selectedItemForModal) {
      addToCart(selectedItemForModal, modalSelectedOptions);
      showToast(selectedItemForModal.name);
      setSelectedItemForModal(null);
    }
  };

  const showToast = (itemName: string) => {
    setAddedToast(itemName);
    setTimeout(() => {
      setAddedToast(null);
    }, 2500);
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#120806] relative font-sans">
      
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C0D0A] border border-[#D97736] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-7 h-7 rounded-full bg-[#549667] flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#FFAA2B]">Added to Order</div>
            <div className="text-sm font-semibold">{addedToast}</div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-9">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0D0A] border border-[#D97736]/30 text-[#FFAA2B] text-xs font-semibold">
            <ChefHat className="w-4 h-4 text-[#D97736]" />
            <span>Digital Menu & Pricing</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white">
            Crafted with <span className="text-[#E5C384]">Passion & Fire</span>
          </h2>
          <p className="text-[#F6EDE0]/75 max-w-xl mx-auto text-sm font-sans">
            Every pizza is stretched by hand, topped with gourmet imported Italian ingredients, and baked at 450°C.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#1C0D0A] p-4 rounded-2xl border border-[#D97736]/20">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F6EDE0]/40" />
            <input
              type="text"
              placeholder="Search pizza, pasta, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#120806] border border-[#D97736]/25 rounded-xl text-xs text-white focus:outline-none focus:border-[#F48D46] transition-colors font-sans"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-center">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                vegFilter === 'all'
                  ? 'bg-[#D97736] text-white font-bold shadow-md'
                  : 'bg-[#120806] text-[#F6EDE0]/70 border border-[#D97736]/20 hover:text-white'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                vegFilter === 'veg'
                  ? 'bg-[#3B724C] text-white font-bold shadow-md'
                  : 'bg-[#120806] text-[#549667] border border-[#3B724C]/30 hover:bg-[#3B724C]/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#549667]" />
              Veg Only
            </button>
            <button
              onClick={() => setVegFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                vegFilter === 'non-veg'
                  ? 'bg-[#C83E2B] text-white font-bold shadow-md'
                  : 'bg-[#120806] text-[#C83E2B] border border-[#C83E2B]/30 hover:bg-[#C83E2B]/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C83E2B]" />
              Non-Veg
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#D97736] text-white font-bold shadow-md border border-[#FFAA2B]/30'
                  : 'bg-[#1C0D0A] text-[#F6EDE0]/75 border border-[#D97736]/20 hover:border-[#D97736]/50 hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 ratatouille-card rounded-3xl p-8 max-w-md mx-auto">
            <Info className="w-9 h-9 text-[#FFAA2B] mx-auto mb-3" />
            <h3 className="font-sans text-base text-white font-bold">No Dishes Found</h3>
            <p className="text-xs text-[#F6EDE0]/70 mt-1">Try changing your search query or filter settings.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="ratatouille-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-all"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D0A] via-transparent to-black/30" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#120806]/85 backdrop-blur-md border border-white/10 text-[10px] font-bold">
                      <span
                        className={`w-2.5 h-2.5 rounded-sm border ${
                          dish.isVeg ? 'border-[#549667] bg-[#549667]' : 'border-[#C83E2B] bg-[#C83E2B]'
                        }`}
                      />
                      <span className="text-white uppercase">{dish.isVeg ? 'VEG' : 'NON-VEG'}</span>
                    </div>

                    <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                      {dish.isBestseller && (
                        <span className="px-2.5 py-1 rounded-full bg-[#FFAA2B] text-[#120806] font-sans font-bold text-[10px]">
                          Bestseller
                        </span>
                      )}
                      {dish.isChefSpecial && (
                        <span className="px-2.5 py-1 rounded-full bg-[#1C0D0A]/90 border border-[#D97736] text-[#F48D46] font-sans font-medium text-[10px] flex items-center gap-1">
                          <ChefHat className="w-3 h-3 text-[#FFAA2B]" /> Special
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-[#120806]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#FFAA2B]/30">
                      <span className="font-sans font-bold text-base text-[#FFAA2B]">
                        ₹{dish.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div>
                      <span className="font-handwriting text-[#E0B354] text-sm block">
                        {dish.italianTitle}
                      </span>
                      <h3 className="font-sans font-bold text-base text-white group-hover:text-[#F48D46] transition-colors">
                        {dish.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#F6EDE0]/75 leading-relaxed font-sans line-clamp-2">
                      {dish.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {dish.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#120806]/60 border border-[#D97736]/20 text-[10px] text-[#F6EDE0]/60 font-sans"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleOpenCustomization(dish)}
                    className="w-full py-2.5 rounded-xl bg-[#D97736] hover:bg-[#F48D46] text-white font-sans text-xs font-semibold shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-98"
                  >
                    <Plus className="w-4 h-4" />
                    <span>
                      {dish.options && dish.options.length > 0 ? 'Customize & Add' : 'Add to Order'}
                    </span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Dish Customization Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
          <div className="relative w-full max-w-lg bg-[#1C0D0A] border border-[#D97736]/40 rounded-3xl p-6 shadow-2xl space-y-5">
            
            <button
              onClick={() => setSelectedItemForModal(null)}
              className="absolute top-4 right-4 p-2 text-[#F6EDE0]/70 hover:text-white rounded-full bg-[#120806]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="font-handwriting text-sm text-[#FFAA2B]">
                {selectedItemForModal.italianTitle}
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                {selectedItemForModal.name}
              </h3>
              <p className="text-xs text-[#F6EDE0]/70">
                Base Price: <span className="text-[#FFAA2B] font-bold">₹{selectedItemForModal.price}</span>
              </p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold text-[#F48D46] uppercase border-b border-[#D97736]/20 pb-1">
                Customize Dish (Optional Extras)
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedItemForModal.options?.map((opt, i) => {
                  const isChecked = modalSelectedOptions.some((o) => o.name === opt.name);
                  return (
                    <label
                      key={i}
                      onClick={() => handleOptionToggle(opt)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#D97736]/20 border-[#F48D46] text-white'
                          : 'bg-[#120806] border-[#D97736]/20 text-[#F6EDE0]/70 hover:border-[#D97736]/50'
                      }`}
                    >
                      <span className="text-xs font-medium">{opt.name}</span>
                      <span className="text-xs text-[#FFAA2B] font-bold">+₹{opt.extraPrice}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D97736]/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#F6EDE0]/60 block">Total Price</span>
                <span className="font-sans text-xl font-bold text-[#FFAA2B]">
                  ₹
                  {selectedItemForModal.price +
                    modalSelectedOptions.reduce((sum, o) => sum + o.extraPrice, 0)}
                </span>
              </div>
              <button
                onClick={handleModalAddToCart}
                className="px-5 py-2.5 rounded-xl bg-[#D97736] hover:bg-[#F48D46] text-white font-sans text-xs font-bold shadow-lg flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add to Cart
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
