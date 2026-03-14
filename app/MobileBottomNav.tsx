"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // পাথ চেক করার জন্য
import { HomeIcon, Grid, ShoppingCart, MessageCircle, User } from 'lucide-react';
import CategoryDrawer from './categories/page';
import { useState } from 'react';

export default function MobileBottomNav() {
  const pathname = usePathname(); // বর্তমানে কোন পেজে আছো সেটা জানাবে
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // ৩. স্টেট ডিক্লেয়ার করো

  // হেল্পার ফাংশন: পাথ চেক করে কালার রিটার্ন করবে
  const isActive = (path: string) => pathname === path;

  return (
    <>
    <CategoryDrawer 
        isOpen={isCategoryOpen} 
        onClose={() => setIsCategoryOpen(false)} 
      />  
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between items-center px-6 py-2 z-50 lg:hidden">

      {/* Home Button */}
      <Link href="/" className={`flex flex-col items-center cursor-pointer transition-colors ${isActive('/') ? 'text-black' : 'text-gray-400'}`}>
        <HomeIcon size={22} strokeWidth={isActive('/') ? 2.5 : 1.5} />
        <span className="text-[10px] mt-1 font-bold">Home</span>
      </Link>

      {/* Category Button */}
      <div 
          onClick={() => setIsCategoryOpen(true)} // ৪. ক্লিক করলে ওপেন হবে
          className={`flex flex-col items-center cursor-pointer text-gray-500 hover:text-black transition-colors`}
        >
          <Grid size={22} strokeWidth={1.5} />
          <span className="text-[10px] mt-1 font-semibold">Category</span>
        </div>

      {/* Cart Button */}
      <Link href="/cart" className={`flex flex-col items-center cursor-pointer transition-colors ${isActive('/cart') ? 'text-black' : 'text-gray-400'}`}>
        <div className="relative">
          <ShoppingCart size={22} strokeWidth={isActive('/cart') ? 2.5 : 1.5} />
          {/* যদি কার্টে আইটেম থাকে তার জন্য ছোট ডট (ঐচ্ছিক) */}
          <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-pink-500"></span>
        </div>
        <span className="text-[10px] mt-1 font-bold">Cart</span>
      </Link>

      {/* Chat Button - এটা সাধারণত একটু আলাদা কালার থাকে */}
      <div className="flex flex-col items-center cursor-pointer text-[#3AA5F6]">
        <MessageCircle size={22} strokeWidth={2} />
        <span className="text-[10px] mt-1 font-bold">Chat</span>
      </div>

      {/* Login/Profile Button */}
      <Link href="/login" className={`flex flex-col items-center cursor-pointer transition-colors ${isActive('/login') ? 'text-black' : 'text-gray-400'}`}>
        <User size={22} strokeWidth={isActive('/login') ? 2.5 : 1.5} />
        <span className="text-[10px] mt-1 font-bold">Login</span>
      </Link>

    </div>
    </>
  );
}