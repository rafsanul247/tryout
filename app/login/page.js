'use client'
import Link from "next/link";
import { useState } from "react";

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-sm border border-gray-200 rounded-md px-8 py-10">
                {/* Header */}
                <div className="mb-6 text-left">
                    <h1 className="text-2xl font-semibold text-gray-900">Welcome Back</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Login buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 border border-[#e3e8f5] bg-white rounded-md py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors">
                        <span className="text-lg">📞</span>
                        <span>Login with Phone</span>
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 border border-[#e3e8f5] bg-white rounded-md py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors">
                        <span className="text-lg">✉️</span>
                        <span>Login with Email</span>
                    </button>
                </div>

                {/* Help / Forgot password */}
                <div className="mt-6 text-center text-xs">
                    <p className="text-gray-400 mb-1">Need help?</p>
                    <a
                        href="#"
                        className="text-[#2563eb] font-semibold hover:underline text-[13px]"
                    >
                        Forgot your password?
                    </a>
                </div>

                {/* Divider */}
                <div className="mt-6 border-t border-gray-200" />

                {/* Create account link */}
                <div className="mt-4 text-center text-xs">
                    <p className="text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/registration"
                            className="text-[#2563eb] font-semibold hover:underline"
                        >
                            Create one now
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


