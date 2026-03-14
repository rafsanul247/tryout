"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, UserCircle } from 'lucide-react';

export default function WishlistPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-10 px-4">
            
            {/* উপরের টাইটেল সেকশন */}
            <div className="text-center w-full max-w-4xl border-b border-gray-100 pb-8 mb-20">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart size={24} className="text-black fill-black" />
                    <h1 className="text-2xl font-bold text-[#2D2D2D]">My Wishlist</h1>
                </div>
                <p className="text-[13px] text-gray-500">Please log in to access your wishlist</p>
            </div>

            {/* মাঝখানের কন্টেন্ট সেকশন */}
            <div className="flex flex-col items-center justify-center max-w-md w-full">
                
                {/* প্রোফাইল আইকন */}
                <div className="bg-gray-100 rounded-full p-1 mb-6">
                    <UserCircle size={100} strokeWidth={0.5} className="text-gray-300" />
                </div>

                {/* টেক্সট ব্লক */}
                <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">Login Required</h2>
                <p className="text-center text-[14px] text-gray-500 leading-relaxed mb-8 px-4">
                    Please log in to view and manage your wishlist. Your favorites will be saved to your account.
                </p>

                {/* লগইন বাটন */}
                <Link 
                    href="/login" 
                    className="w-full max-w-[280px] bg-[#EE4D38] hover:bg-[#d44331] text-white py-3 rounded-full text-center font-bold text-[15px] transition-all shadow-md mb-6"
                >
                    Log In
                </Link>

                {/* নিচের রেজিস্টার লিঙ্ক */}
                <p className="text-[13px] text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/registration" className="text-red-500 font-semibold hover:underline">
                        Register here
                    </Link>
                </p>
            </div>

        </div>
    );
}