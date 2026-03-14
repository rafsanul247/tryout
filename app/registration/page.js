'use client'
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-sm border border-gray-200 rounded-md px-8 py-10">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Create Account</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Join us today and start shopping
                    </p>
                </div>

                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full rounded-md bg-[#f2f6ff] border border-[#e3e8f5] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4c7dff]"
                        />
                    </div> 

                    {/* Email Address */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-md bg-[#f2f6ff] border border-[#e3e8f5] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4c7dff]"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <div className="flex gap-2">
                            <div className="flex items-center rounded-md bg-[#f2f6ff] border border-[#e3e8f5] px-3 text-sm text-gray-600">
                                +880
                            </div>
                            <input
                                type="tel"
                                placeholder="1712345678"
                                className="flex-1 rounded-md bg-[#f2f6ff] border border-[#e3e8f5] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4c7dff]"
                            />
                        </div>
                        <p className="mt-1 text-[11px] text-gray-400">
                            Enter 10-digit number without country code
                        </p>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Minimum 8 characters"
                            className="w-full rounded-md bg-[#f2f6ff] border border-[#e3e8f5] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4c7dff]"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            className="w-full rounded-md bg-[#f2f6ff] border border-[#e3e8f5] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4c7dff]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-2 w-full bg-black text-white text-sm font-semibold py-2.5 rounded-sm hover:bg-gray-900 transition-colors"
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer links */}
                <div className="mt-6 text-center text-xs">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#2563eb] font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* reCAPTCHA notice */}
                <p className="mt-6 text-[10px] text-center text-gray-400 leading-snug">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and
                    Terms of Service apply.
                </p>
            </div>
        </div>
    );
}


