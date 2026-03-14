"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Zap, ChevronRight, X, User, Baby, CircleUser, ShoppingCart, MessageCircle, Heart } from 'lucide-react';

// Using available images as placeholders
import pic1 from '@/public/pic1.jpg';
import polo1 from '@/public/pro1.jpg';
import { useRouter } from 'next/navigation';

export default function KidsPage() {
    const [activeCategory, setActiveCategory] = useState('Kids');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const router = useRouter();

    // Sidebar Offers
    const specialOffers = [
        { name: 'Mega Deal', active: false },
        { name: 'New Arrival', active: false },
        { name: 'Top Selling', active: false },
        { name: 'Free Delivery', active: false },
        { name: 'Merchandise', active: true },
        { name: 'Eid Collection 2026', active: false },
    ];

    // Sidebar Mens Subcategories
    const sidebarSubcategories = [
        { name: 'Half Sleeve T-Shirt', count: 325 },
        { name: 'Full Sleeve T-Shirt', count: 143 },
        { name: 'Maggie', count: 6 },
        { name: 'Shirt', count: 64 },
        { name: 'Polo T-Shirt', count: 135 },
    ];

    // Main Category Pills
    const mainCategories = [
        { name: 'Men', icon: User, color: 'text-[#1877F2]', bg: 'bg-[#EEF2FF]', border: 'border-[#C7D2FE]', active: false },
        { name: 'Women', icon: User, color: 'text-[#E53E5D]', bg: 'bg-[#FDF2F5]', border: 'border-[#F8D2DB]', active: false },
        { name: 'Kids', icon: Baby, color: 'text-white', bg: 'bg-[#10B981]', border: 'border-transparent', active: true },
        { name: 'Teens', icon: CircleUser, color: 'text-[#8B5CF6]', bg: 'bg-[#F5F3FF]', border: 'border-[#DDD6FE]', active: false },
    ];

    // Main Subcategory Pills (Kids specific from screenshot)
    const subcategoryPills = [
        { name: 'Boys', count: 182 },
        { name: 'Girls', count: 129 },
    ];

    // Products (from screenshot)
    const products = [
        { id: 1, image: polo1, discount: '-24%', name: 'Kid\'s Top 1', saveAmt: 'Save ৳210' },
        { id: 2, image: polo1, discount: '-24%', name: 'Kid\'s Top 2', saveAmt: 'Save ৳100' },
        { id: 3, image: polo1, discount: '-24%', name: 'Kid\'s Top 3', saveAmt: 'Save ৳100' },
        { id: 4, image: pic1, discount: '-28%', name: 'Kid\'s Outfit Boy', saveAmt: 'Save ৳100' },
    ];

    return (
        <div className="flex font-assistant min-h-screen bg-white relative max-w-[1400px] mx-auto border-t border-gray-100 mt-0 pt-0">
            {/* Sidebar */}
            <aside className="hidden lg:block w-[260px] border-r border-dashed border-gray-300 shrink-0 h-[calc(100vh-80px)] overflow-y-auto sticky top-20 py-4 pr-2">

                {/* Special Offers block */}
                <div className="mb-8 px-4 border-b border-gray-200 pb-6">
                    <h3 className="font-bold text-red-600 mb-4 px-2 text-[15px]">Special Offers</h3>
                    <ul className="space-y-1">
                        {specialOffers.map((offer, idx) => (
                            <li key={idx}>
                                <button
                                    className={`flex items-center w-full text-left px-3 py-2.5 rounded-md transition-colors text-[14px] font-bold
                    ${offer.active ? 'bg-red-50 text-red-600' : 'text-[#4A4B57] hover:bg-gray-50'}
                  `}
                                >
                                    <Zap size={16} className={`mr-2.5 ${offer.active ? 'text-red-600' : 'text-[#f27a1a]'}`} fill={offer.active ? "currentColor" : "currentColor"} />
                                    {offer.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories block */}
                <div className="px-4">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="font-bold text-[#4A4B57] text-[15px]">Categories</h3>
                        <button className="text-red-500 text-[13px] font-semibold hover:underline cursor-pointer">Clear</button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <button className="flex items-center justify-between w-full bg-white text-[#1877F2] px-4 py-2.5 rounded-md mb-2">
                                <span className="font-bold text-[14px]">Mens</span>
                                <div className="flex items-center gap-2">
                                    <span className="bg-gray-100 text-gray-500 text-[11px] font-bold px-2 py-0.5 rounded-full">1183</span>
                                    <ChevronRight size={16} className="text-gray-400" />
                                </div>
                            </button>

                            <ul className="pl-6 space-y-4 mt-5">
                                {sidebarSubcategories.map((sub, idx) => (
                                    <li key={idx} className="flex justify-between items-center text-[14px] font-semibold text-[#4A4B57] cursor-pointer hover:text-black">
                                        <span>{sub.name}</span>
                                        <span className="text-[#8D909B] text-xs font-bold">{sub.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full bg-white relative flex flex-col min-w-0 pb-24 h-[calc(100vh-80px)] overflow-y-auto pl-4">

                <div className="p-4 lg:p-6 lg:pl-6">
                    {/* Search Top Bar */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search size={22} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search a product"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 text-[15px] font-medium text-gray-700 placeholder:text-gray-400 shadow-sm"
                        />
                    </div>

                    {/* Main Categories Pills */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        {mainCategories.map((cat, idx) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        // এখানে চেক করবে কোন ক্যাটাগরিতে ক্লিক হয়েছে
                                        if (cat.name === 'Women') router.push('/women');
                                        else if (cat.name === 'Kids') router.push('/kids');
                                        else if (cat.name === 'Teens') router.push('/teens');
                                        else if (cat.name === 'Men') router.push('/men');
                                    }}
                                    className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full border text-[15px] font-bold transition-all
                      ${cat.active ? `${cat.bg} border-transparent text-white` : `${cat.bg} ${cat.border} ${cat.color} hover:bg-opacity-80`} 
                    `}
                                >
                                    <Icon size={18} fill={cat.active ? "currentColor" : "currentColor"} className={cat.active ? "text-white" : cat.color} />
                                    {cat.name}
                                </button>
                            )
                        })}
                    </div>

                    <div className="w-full border-t border-dashed border-gray-300 pt-6 mb-6"></div>

                    {/* Subcategories Pills */}
                    <div className="flex flex-wrap gap-x-2.5 gap-y-3.5 mb-8 w-fit max-w-[90%]">
                        {subcategoryPills.map((sub, idx) => (
                            <button
                                key={idx}
                                className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-200 rounded-full hover:border-[#10B981] hover:shadow-sm transition-all group"
                            >
                                <span className="text-[14px] font-semibold text-gray-500 group-hover:text-[#10B981]">{sub.name}</span>
                                <span className="text-[12px] text-gray-400 font-semibold">{sub.count}</span>
                            </button>
                        ))}
                    </div>

                    <div className="w-full border-t border-dashed border-gray-200 pt-6 mb-6"></div>

                    {/* Active Filters */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center bg-gray-100 rounded-md px-3 py-1.5 border border-gray-200">
                            <span className="text-[14px] font-semibold text-[#4A4B57] mr-3">Kids</span>
                            <button className="text-gray-500 hover:text-black">
                                <X size={16} strokeWidth={2} />
                            </button>
                        </div>
                        <button className="text-[14px] font-semibold text-[#4A4B57] hover:underline underline-offset-4 ml-1">
                            Clear
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {[...products].map((product, index) => (
                            <div key={index} className="group cursor-pointer relative flex flex-col overflow-hidden rounded-md border border-gray-200/50 hover:shadow-lg transition-all duration-300 shadow-sm">
                                {/* Discount Badge */}
                                <div className="absolute top-3 left-3 z-10 bg-[#FF2D55] text-white text-[11px] font-bold px-2 py-1.5 rounded-sm">
                                    {product.discount}
                                </div>

                                <div className="relative w-full aspect-3/4 bg-gray-100 overflow-hidden rounded-md">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        fill
                                    />
                                </div>
                                {/* Product Info */}
                                <div className="p-3 pt-4 flex flex-col gap-2">
                                    <h3 className="text-[14px] font-semibold text-[#4A4B57] line-clamp-2 leading-relaxed h-[42px]">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center mt-1">
                                        <span className="bg-[#00A97E] text-white text-[11px] font-bold px-2 py-1 rounded-[3px]">
                                            {product.saveAmt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            {/* Floating Action Buttons */}
            <div className="fixed right-0 top-1/2 transform -translate-y-[150%] flex flex-col z-50">
                <button 
                    onClick={() => setIsCartOpen(true)}
                    className="bg-[#1877F2] text-white w-12 h-12 flex items-center justify-center rounded-l-md hover:bg-blue-600 transition-colors shadow-lg">
                    <ShoppingCart size={22} />
                </button>
            </div>

            <div className="fixed right-4 bottom-4 lg:right-6 lg:bottom-6 z-50">
                <button className="bg-[#3AA5F6] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-500 transition-transform hover:scale-105">
                    <MessageCircle size={30} fill="currentColor" strokeWidth={1} />
                </button>
            </div>
            {/* Cart Sidebar Overlay */}
            {isCartOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-60 transition-opacity cursor-pointer"
                    onClick={() => setIsCartOpen(false)}
                ></div>
            )}

            {/* Cart Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-[350px] bg-[#f5f5f5] z-70 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Cart Header */}
                <div className="bg-[#2D2D2D] text-white h-[60px] flex items-center px-4 shrink-0 justify-between">
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="relative z-50 text-[#ef4444] hover:text-red-400 transition-colors p-1"
                    >
                        <X size={24} strokeWidth={2.5} />
                    </button>
                    <span className="font-bold text-[15px] -ml-6">CART</span>
                    <div className="w-8"></div> {/* Spacer to center the CART text */}
                </div>

                {/* Cart Body - Empty State */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 mt-[-10vh]">
                    {/* Sad Bag SVG Illustration */}
                    <div className="mb-6 relative w-[250px] h-[200px] flex items-center justify-center">
                        <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                            {/* Background clouds */}
                            <path d="M30 70 Q 40 50 50 65 Q 70 55 75 75 Q 60 85 30 70 M 35 70 Q 30 80 40 85 M 50 65 Q 50 55 60 60" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
                            <path d="M145 45 Q 155 30 165 40 Q 185 35 180 55 Q 160 65 145 45 M 150 45 Q 145 55 155 60 M 165 40 Q 165 30 175 35" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
                            
                            {/* Wind lines */}
                            <path d="M120 30 L 140 30 M 115 40 L 130 40" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                            <path d="M70 40 L 50 40 M 80 100 L 40 100" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>

                            {/* Sweat drop */}
                            <path d="M132 80 Q 137 90 132 95 Q 127 90 132 80" fill="#9CA3AF" opacity="0.5"/>

                            {/* Bag Handle */}
                            <path d="M75 50 Q 100 0 125 50" stroke="#4B5563" strokeWidth="6" strokeLinecap="round" fill="none"/>
                            
                            {/* Bag Body */}
                            <path d="M60 50 L 140 50 L 145 110 L 55 110 Z" fill="#E89B6A" stroke="#4B5563" strokeWidth="4" strokeLinejoin="round"/>
                            
                            {/* Sad Face */}
                            <circle cx="85" cy="80" r="3.5" fill="#4B5563"/>
                            <circle cx="115" cy="80" r="3.5" fill="#4B5563"/>
                            <path d="M90 100 Q 100 90 110 100" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" fill="none"/>
                            
                            {/* Floor shadow/line */}
                            <path d="M30 120 L 170 120" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </div>
                    
                    <p className="text-[#4A4B57] font-medium text-[15px] mb-8">Your Cart is Empty</p>
                    
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="bg-[#2D2D2D] hover:bg-black text-white px-6 py-2.5 rounded-[3px] text-[14px] font-semibold flex items-center gap-2 transition-colors duration-200"
                    >
                        Start Shopping <ChevronRight size={18} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}