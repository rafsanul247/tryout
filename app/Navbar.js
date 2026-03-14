"use client";

import Image from "next/image";
import fabrilogo from "@/public/fabrilife.svg";
import {
  MapPin, User, Heart, ShoppingCart, Search, Menu, X,
  Home, Grid, Star, Truck, Flame, ChevronRight, Package,Building2, Info, ArrowLeft
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import HeartIcon from "@/components/ui/heart-icon";
import MapPinIcon from "@/components/ui/map-pin-icon";
import UserIcon from "@/components/ui/user-icon";
import ShoppingCartIcon from "@/components/ui/shopping-cart-icon";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // সার্চ স্লাইডারের জন্য স্টেট

  const popularSearches = ["T-Shirt", "Polo", "Hoodie", "Joggers", "Kurti", "Kids"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b lg:border-none">
      <div className="flex items-center justify-between px-4 lg:px-[24] mx-auto h-16 lg:h-20 bg-white font-assistant">

        {/* Mobile: Hamburger Icon */}
        <div className="flex lg:hidden items-center justify-start w-16">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center lg:flex-none lg:justify-start lg:w-auto h-full items-center">
          <Link href={"/"}>
            <Image src={fabrilogo} alt="Fabrilife Logo" width={140} height={28} className="cursor-pointer lg:w-[200px] lg:h-[40px]" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex h-full w-110 text-sm items-center font-extrabold relative">
          <div className="absolute left-3.5 text-[#515361] flex">
            <Link href="/men"><div className="py-7 border-b-transparent border-b-4 hover:border-b-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer"> MEN</div></Link>
            <Link href="/women"><div className="py-7 border-b-transparent border-b-4 hover:border-b-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer"> WOMEN</div></Link>
            <Link href="/kids"><div className="py-7 border-b-transparent border-b-4 hover:border-b-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer"> KIDS</div></Link>
            <Link href="/teens"><div className="py-7 border-b-transparent border-b-4 hover:border-b-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer"> TEENS</div></Link>
            <Link href="/sports"><div className="py-7 border-b-transparent border-b-4 hover:border-b-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer"> SPORTS</div></Link>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex h-full py-4 w-90 relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 bg-[#F5F5F6] absolute right-10 py-3 w-70 outline-none focus:ring-1 focus:ring-black text-sm text-black transition-all duration-300"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-end text-[#282C3F] tracking-tighter gap-3 lg:gap-0 w-16 lg:w-auto">

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-4">
            <Search size={22} className="cursor-pointer" onClick={() => setIsSearchOpen(true)} />
            <Link href="/wishlist">
            <Heart size={22} strokeWidth={1.5} className="cursor-pointer text-[#515361]" />
            </Link>
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden lg:flex h-full items-center">
            <div className="py-4 px-4 flex flex-col items-center text-xs hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <MapPinIcon size={22} strokeWidth={1.5} className="group-hover:scale-105" />
              <span className="mt-2 font-bold">Stores</span>
            </div>
            <div className="py-4 px-4 flex flex-col items-center text-xs hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <UserIcon size={22} strokeWidth={1.5} className="group-hover:scale-105" />
              <span className="mt-2 font-bold">Profile</span>

              {/* ড্রপডাউন মেনু কার্ড */}
        {/* hidden এবং group-hover:block দিয়ে আমরা হোভার ইফেক্ট করছি */}
        <div className="absolute top-full right-16 w-[220px] bg-white shadow-xl border border-gray-100 rounded-sm hidden group-hover:block z-50 transition-all duration-300 -mt-0.5">
          
          <div className="p-5">
            <p className="text-gray-500 text-[13px] mb-3">Welcome</p>
            <div className="flex gap-2 text-[14px] font-bold mb-4">
              <Link href="/login" className="text-[#E53E5D] hover:underline">Sign in</Link>
              <span className="text-gray-300">/</span>
              <Link href="/registration" className="text-[#E53E5D] hover:underline">Sign up</Link>
            </div>

            <hr className="border-gray-100 mb-4" />

            {/* মেনু লিস্ট */}
            <div className="space-y-4">
              <Link href="/track-order" className="flex items-center gap-3 text-gray-600 hover:text-black group/item">
                <Truck size={18} className="text-gray-400 group-hover/item:text-black" />
                <span className="text-[13px] font-medium">Track Order</span>
              </Link>

              <Link href="/corporate" className="flex items-center gap-3 text-gray-600 hover:text-black group/item">
                <Building2 size={18} className="text-gray-400 group-hover/item:text-black" />
                <span className="text-[13px] font-medium">Corporate Sales</span>
              </Link>

              <Link href="/about" className="flex items-center gap-3 text-gray-600 hover:text-black group/item">
                <Info size={18} className="text-gray-400 group-hover/item:text-black" />
                <span className="text-[13px] font-medium">About Us</span>
              </Link>
            </div>
          </div>
          
          {/* নিচের ছোট কোণা বা অ্যারো (ঐচ্ছিক) */}
          <div className="absolute -top-1 right-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-pink-500"></div>
        </div>
            </div>
            <Link href="/wishlist" className="py-4 px-4 flex flex-col items-center text-xs hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <HeartIcon size={22} strokeWidth={1.5} className="group-hover:scale-105" />
              <span className="mt-2 font-bold">Wishlist</span>
            </Link>
            <div className="py-4 px-4 flex flex-col items-center text-xs hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <ShoppingCartIcon size={22} strokeWidth={1.5} className="group-hover:scale-105" />
              <span className="mt-2 font-bold">Bag</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Slider Panel */}
      <div className={`fixed inset-y-0 right-0 w-full bg-white z-[150] transform transition-transform duration-300 ease-in-out ${isSearchOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center p-4 gap-3 border-b border-gray-100">
          <button onClick={() => setIsSearchOpen(false)}>
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              autoFocus
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-gray-100 py-2.5 pl-10 pr-4 rounded-md outline-none text-sm text-gray-700 focus:ring-1 focus:ring-gray-200"
            />
          </div>
        </div>
        
        {/* Popular Searches */}
        <div className="p-5">
          <h3 className="text-[11px] font-bold text-gray-400 tracking-wider mb-4 uppercase">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((item) => (
              <button 
                key={item} 
                className="px-4 py-1.5 border border-gray-100 rounded-full text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      
        {/* এখানে শুধু মেইন কন্টেইনারটি থাকবে, যেটা সব সময় রেন্ডার হবে কিন্তু ইনভিসিবল থাকবে */}
<div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={`fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-xl flex flex-col z-[101] overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

            {/* Header */}
            <div className="bg-black text-white p-4 flex items-center justify-between shrink-0">
              <span className="font-bold text-[15px]">Welcome to Fabrilife</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#222222] w-6 h-6 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <X size={14} strokeWidth={3} className="text-white" />
              </button>
            </div>

            {/* Login / Register Buttons */}
            <div className="bg-black px-4 pb-4 pt-1 flex gap-3 border-b-4 border-gray-100 shrink-0">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 bg-white text-black py-2 rounded font-bold text-sm tracking-wide text-center">
              Login
              </Link>
              <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 bg-white text-black py-2 rounded font-bold text-sm tracking-wide text-center">
              Register
              </Link>
            </div>

            {/* Primary Links */}
            <div className="flex flex-col py-1 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                <Home size={18} className="text-gray-500 md-1 mr-4" />
                <span className="text-sm font-semibold text-gray-700">Home</span>
              </Link>
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                <Grid size={18} className="text-gray-500 mr-4" />
                <span className="text-sm font-semibold text-gray-700">Shop All</span>
              </Link>
              <Link href="/new-arrivals" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                <Star size={18} className="text-green-500 mr-4" fill="currentColor" />
                <span className="text-sm font-semibold text-gray-700">New Arrivals</span>
              </Link>
              <Link href="/free-delivery" className="flex items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                <Truck size={18} className="text-[#3AA5F6] mr-4 text-blue-500" fill="currentColor" />
                <span className="text-sm font-semibold text-[#3AA5F6]">Free Delivery</span>
              </Link>
              <Link href="/top-selling" className="flex items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                <Flame size={18} className="text-gray-600 mr-4" />
                <span className="text-sm font-semibold text-gray-700">Top Selling</span>
              </Link>
              <Link href="/eid-collection" className="flex items-center px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                <Flame size={18} className="text-pink-500 mr-4" fill="currentColor" strokeWidth={0} />
                <span className="text-sm font-semibold text-pink-500">Eid Collection 2026</span>
              </Link>
            </div>

            {/* Categories */}
            <div className="py-2 border-b border-gray-100">
              <div className="px-5 py-2 text-[11px] font-bold text-gray-400 tracking-wider">CATEGORIES</div>

              <Link href="/men" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer group">
                <div className="flex items-center">
                  <User size={18} className="text-gray-500 mr-4" fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-700">Men's Collection</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>

              <Link href="/women" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer group transition-all duration-300 ease-in-out">
                <div className="flex items-center">
                  <User size={18} className="text-gray-500 mr-4" fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-700">Women's Collection</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>

              <Link href="/kids" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer group transition-all duration-300">
                <div className="flex items-center">
                  <User size={18} className="text-gray-500 mr-4" fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-700">Kids Collection</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>

              <Link href="/teens" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer group transition-all duration-300">
                <div className="flex items-center">
                  <User size={18} className="text-gray-500 mr-4" fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-700">Teens Collection</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>

              <Link href="/sports" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer group transition-all duration-300">
                <div className="flex items-center">
                  <User size={18} className="text-gray-500 mr-4" fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-700">Sports Collection</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>
            </div>

            {/* My Account */}
            <div className="py-2 border-b border-gray-100">
              <div className="px-5 py-2 text-[11px] font-bold text-gray-400 tracking-wider">MY ACCOUNT</div>
              <div className="flex items-center px-5 py-3 hover:bg-gray-50 cursor-pointer">
                <Heart size={18} className="text-gray-600 mr-4" fill="currentColor" />
                <span className="text-sm font-semibold text-gray-700">My Wishlist</span>
              </div>
            </div>

            {/* Footer Links */}
            <div className="py-2 pb-6">
              <div className="flex items-center px-5 py-3 hover:bg-gray-50 cursor-pointer">
                <Truck size={18} className="text-gray-600 mr-4" />
                <span className="text-sm font-semibold text-gray-700">Track Order</span>
              </div>
            </div>

          </div>
        </div>
      
    </header>
  );
}
