"use client";
import React from 'react';
import { X, ChevronRight, Star, Flame, Truck, User, Grid2X2 } from 'lucide-react';
import Link from 'next/link';

interface CategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CategoryDrawer({ isOpen, onClose }: CategoryDrawerProps) {
  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[150] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className={`fixed inset-x-0 bottom-0 bg-white z-[151] rounded-t-2xl transition-transform duration-300 ease-in-out transform flex flex-col max-h-[90vh] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Handle Bar */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-1 shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Shop by Category</h2>
          <button onClick={onClose} className="p-1.5 bg-gray-100 rounded-full text-gray-500">
            <X size={20} />
          </button>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-4 gap-2 p-4 shrink-0">
          {[
            { label: 'New Arrivals', icon: <Star size={20} className="text-green-500" fill="currentColor" />, color: 'bg-white' },
            { label: 'Top Selling', icon: <Flame size={20} className="text-orange-400" fill="currentColor" />, color: 'bg-white' },
            { label: 'Eid Collection', icon: <Flame size={20} className="text-pink-500" fill="currentColor" />, color: 'bg-white' },
            { label: 'Free Delivery', icon: <Truck size={20} className="text-blue-400" fill="currentColor" />, color: 'bg-white' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-2 rounded-xl border border-gray-100 shadow-sm text-center">
              {item.icon}
              <span className="text-[10px] mt-2 font-bold leading-tight text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Categories List */}
<div className="flex-1 overflow-y-auto px-5 pb-8">
  <p className="text-[11px] font-bold text-gray-400 tracking-widest mb-4">ALL CATEGORIES</p>
  
  {[
    { name: "Men's Collection", desc: "T-Shirts, Polos, Hoodies & more", icon: <User className="text-blue-500" />, href: "/men" },
    { name: "Women's Collection", desc: "Kurti, Tops, T-Shirts & more", icon: <User className="text-pink-500" />, href: "/women" },
    { name: "Kids Collection", desc: "Boys & Girls Clothing", icon: <User className="text-orange-400" />, href: "/kids" },
    { name: "Teens Collection", desc: "Teen Boys & Girls", icon: <User className="text-green-500" />, href: "/teens" },
    { name: "Sports Collection", desc: "Jerseys, Activewear & more", icon: <User className="text-yellow-500" />, href: "/sports" },
  ].map((cat, i) => (
    <Link 
      href={cat.href} // এখানে ডাইনামিক পাথ ব্যবহার করা হয়েছে
      onClick={onClose} 
      key={i} 
      className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0"
    >
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-gray-50 rounded-lg">{cat.icon}</div>
        <div>
          <h3 className="text-sm font-bold text-gray-800">{cat.name}</h3>
          <p className="text-[11px] text-gray-400 font-medium">{cat.desc}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-gray-300" />
    </Link>
  ))}

  {/* View All Button */}
  <Link href="/shop" onClick={onClose} className="mt-4 flex items-center justify-between p-4 bg-blue-50/50 rounded-xl text-blue-600 font-bold">
    <div className="flex items-center gap-3">
      <Grid2X2 size={20} />
      <span className="text-sm">View All Products</span>
    </div>
    <ChevronRight size={18} />
  </Link>
</div>
      </div>
    </>
  );
}