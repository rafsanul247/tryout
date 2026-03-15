"use client";
import React, { useState, use } from 'react'; // ১. এখানে 'use' ইমপোর্ট করো
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/Footer';

// সব ইমেজ ইমপোর্ট (তোমার আগের লিস্ট অনুযায়ী)
import pic1 from "@/public/pic1.jpg"
import pic2 from "@/public/pic2.jpg"
import pic3 from "@/public/pic3.jpg"
import pic4 from "@/public/pic4.jpg"
import pic5 from "@/public/pic5.jpg"
import pic6 from "@/public/pic6.jpg"
import pic7 from "@/public/pic7.jpg"
import pic8 from "@/public/pic8.jpg"
import pic9 from "@/public/pic9.png"
import pic10 from "@/public/pic10.jpg"
import pic11 from "@/public/pic11.jpg"
import pic12 from "@/public/pic12.jpg"

// --- লাইব্রেরি ---
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { 
  Heart, ShoppingCart, Minus, Plus, RefreshCcw, 
  ChevronRight, MessageCircle, Zap, X 
} from 'lucide-react';
import { div } from 'motion/react-client';


// মেইন প্রোডাক্ট ডাটাবেস (ID অনুযায়ী ডায়নামিক হবে)
const mainProduct = [
  { id: 1, name: "Solid Color T-Shirt - Black", price: 485, oldPrice: 640, src: pic1 },
  { id: 2, name: "Solid Color T-Shirt - Navy", price: 485, oldPrice: 640, src: pic2 },
  { id: 3, name: "Solid Color T-Shirt - Maroon", price: 485, oldPrice: 640, src: pic3 },
  { id: 4, name: "Solid Color T-Shirt - Olive", price: 485, oldPrice: 640, src: pic4 },
  { id: 5, name: "Solid Color T-Shirt - Dusty Pink", price: 485, oldPrice: 640, src: pic5 },
  { id: 6, name: "Solid Color T-Shirt - Steel Blue", price: 485, oldPrice: 640, src: pic6 },
  { id: 7, name: "Premium Polo - White", price: 850, oldPrice: 1200, src: pic7 },
  { id: 8, name: "Premium Polo - Grey", price: 850, oldPrice: 1200, src: pic8 },
];

// সাজেশন এবং অন্যান্য সেকশনের জন্য আলাদা লিস্ট
const suggestedProducts = [
  { id: 1, name: "Solid Color T-Shirt - Black", price: 485, oldPrice: 640, src: pic1},
  { id: 2, name: "Solid Color T-Shirt - Navy", price: 485, oldPrice: 640, src: pic2 },
  { id: 3, name: "Solid Color T-Shirt - Maroon", price: 485, oldPrice: 640, src: pic1 },
  { id: 4, name: "Solid Color T-Shirt - Olive", price: 485, oldPrice: 640, src: pic2 },
  { id: 5, name: "Solid Color T-Shirt - Dusty Pink", price: 485, oldPrice: 640, src: pic1 },
  { id: 6, name: "Solid Color T-Shirt - Steel Blue", price: 485, oldPrice: 640, src: pic2 },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // ২. params এখন একটি Promise, তাই এটাকে unwrap করতে হবে
  const resolvedParams = use(params); 
  const productId = parseInt(resolvedParams.id);

  // ৩. তোমার সব useState আগের মতোই থাকবে
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // ৪. URL এর ID অনুযায়ী নির্দিষ্ট প্রোডাক্ট খুঁজে বের করা
  const product = mainProduct.find((p) => p.id === productId);

  // যদি প্রোডাক্ট না পাওয়া যায়
  if (!product) {
    return (
      <div className="text-center py-20 font-bold">
        <p>Product Not Found!</p>
        <Link href="/" className="text-blue-500 underline">Go Back</Link>
      </div>
    );
  }
  return (
    <div className="bg-white min-h-screen pb-20 relative">
      
      {/* --- উইশলিস্ট মডাল --- */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm transition-all p-4">
          <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-top duration-300">
            <div className="bg-[#1e293b] text-white p-4 flex justify-between items-center">
              <h3 className="text-sm font-bold uppercase tracking-wider">Save to Wishlist</h3>
              <button onClick={() => setIsWishlistOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>
            <div className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="bg-red-50 p-4 rounded-full">
                  <Heart size={40} className="text-red-500 fill-red-500" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-800">Login to Save Your Favorites</h4>
                <p className="text-sm text-gray-500">Create a wishlist to save items you love.</p>
              </div>
              <Link href="/login"> 
                <button className="w-full bg-[#1e293b] text-white py-3 rounded-md font-bold hover:bg-slate-800 transition-colors">
                  Login Now
                </button>
              </Link>

               <p className="text-xs text-gray-500 mt-4">

                New here? <Link href="/registration"> <span className="text-red-500 cursor-pointer hover:underline">Create an account</span></Link>

              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- মেইন কন্টেন্ট --- */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side: Product Image Section */}
        <div className="space-y-4">
          <div className="bg-[#F3F3F3] rounded-sm relative overflow-hidden flex max-w-md mx-auto lg:ml-20">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase text-center">Sale</span>
              <span className="bg-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">Free Delivery</span>
            </div>
            <Zoom>
              <Image 
                src={product.src} 
                alt={product.name}
                className="max-w-md h-auto object-cover cursor-pointer"
              />
            </Zoom>
          </div>
          
          {/* Frequently Bought Together */}
          <div className="mt-10 border-t pt-6">
            <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm tracking-wide">Frequently Bought Together</h3>
            <div className="flex gap-4 items-start border p-4 rounded-sm max-w-sm">
              <Image src={pic2} alt="Related" className="w-20 h-auto bg-gray-100" />
              <div className="space-y-1">
                <p className="text-[12px] font-medium text-gray-700">Mens Premium T-Shirt - Nyctophilia</p>
                <p className="text-sm font-bold">৳ 649.00 <span className="text-gray-400 line-through text-[11px] ml-1">৳ 850.00</span></p>
                <button className="bg-black text-white text-[10px] px-3 py-1.5 flex items-center gap-1 font-bold">
                  <Plus size={12} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            <button onClick={() => setIsWishlistOpen(true)} className="p-2 border rounded-full group">
              <Heart size={20} className="text-gray-400 group-hover:text-red-500" />
            </button>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-gray-900">৳ {product.price}</span>
              <span className="text-gray-400 line-through text-sm font-medium">৳ {product.oldPrice}.00</span>
              <span className="text-pink-500 text-xs font-bold bg-pink-50 px-2 rounded-full">
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
              </span>
            </div>
            <p className="text-green-600 text-xs font-bold flex items-center gap-1">
              <Zap size={14} fill="currentColor" /> Free Shipping on this product
            </p>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500">Select Size:</p>
            <div className="flex gap-3">
              {['M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1.5 border cursor-pointer text-xs font-bold transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-800'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Cart */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border h-11">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 hover:bg-gray-100 cursor-pointer"><Minus size={16}/></button>
              <span className="w-12 text-center font-bold text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 hover:bg-gray-100 cursor-pointer"><Plus size={16}/></button>
            </div>
            <button className="bg-black text-white h-11 px-8 flex-1 flex items-center justify-center gap-2 font-bold hover:bg-gray-800 transition-all uppercase text-sm cursor-pointer">
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>

           {/* Policy Section */}

          <div className="bg-[#FAFAFA] border-y py-4 px-2 space-y-3">

            <div className="flex items-start gap-3">

              <RefreshCcw size={18} className="text-green-600 shrink-0 mt-0.5" />

              <div className="flex-1">

                <p className="text-sm font-bold text-gray-800">Easy Returns & Exchange</p>

                <div className="flex gap-4 mt-1">

                  <span className="text-[11px] text-gray-500 flex items-center gap-1"><span className="w-1 h-1 bg-green-500 rounded-full"></span> Tell us within 7 days</span>

                  <span className="text-[11px] text-gray-500 flex items-center gap-1"><span className="w-1 h-1 bg-green-500 rounded-full"></span> Free return shipping*</span>

                </div>

              </div>

              <ChevronRight size={18} className="text-gray-300" />

            </div>

          </div>

            {/* Description */}

          <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed pt-2">

            <p>Fabrilife Men's Premium Quality t-shirt offers a smoother, silky feel and a more structured, mid-weight fit than regular t-shirts. The t-shirts are made with the finest quality Combed Compact Cotton, featuring an astonishing ~175 GSM on just 26's cotton, which provides a smooth and compact construction.</p>

            <div className="space-y-2">

              <p className="font-bold text-gray-800 uppercase text-xs">Detailed Specification:</p>

              <ul className="list-disc list-inside space-y-1">

                <li>Organic Ringspun Combed Compact Cotton</li>

                <li>100% Cotton</li>

                <li>Regular fit, Crew Neck Mid-weight, 5.16 oz/yd² (~175 GSM)</li>

                <li>Reactive Dye, enzyme and silicon washed</li>

                <li>Preshunk to minimize shrinkage</li>

                <li>Silk Screen printed</li>

              </ul>

            </div>

          </div>

           {/* Size Chart Table */}

          <div className="pt-6">

            <p className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wider">Size chart - In inches (Expected Deviation = 3%)</p>

            <div className="border overflow-hidden">

              <table className="w-full text-[12px] text-left">

                <thead className="bg-gray-50 border-b">

                  <tr>

                    <th className="py-2 px-4 border-r">Size</th>

                    <th className="py-2 px-4 border-r">Chest (round)</th>

                    <th className="py-2 px-4 border-r">Length</th>

                    <th className="py-2 px-4">Sleeve</th>

                  </tr>

                </thead>

                <tbody className="divide-y">

                  {[

                    { s: 'M', c: '39', l: '27.5', sl: '8.5' },

                    { s: 'L', c: '40.5', l: '28', sl: '8.75' },

                    { s: 'XL', c: '42', l: '29', sl: '9' },

                    { s: '2XL', c: '45', l: '30', sl: '9.25' },

                  ].map((row, i) => (

                    <tr key={i} className={selectedSize === row.s ? "bg-blue-50" : ""}>

                      <td className="py-2 px-4 border-r font-bold">{row.s}</td>

                      <td className="py-2 px-4 border-r">{row.c}</td>

                      <td className="py-2 px-4 border-r">{row.l}</td>

                      <td className="py-2 px-4">{row.sl}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>
      

      {/* --- You may also like Section --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-b-2 border-black mb-8">
          <h2 className="text-lg font-bold text-gray-800 pb-2 inline-block">You may also like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {suggestedProducts.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`} className="group flex flex-col">
              <div className="relative bg-[#F3F3F3] aspect-[3/4] overflow-hidden">
                <Image src={item.src} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p className="text-[11px] font-bold mt-2 uppercase">{item.name}</p>
              <p className="text-sm font-black">৳ {item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* --- People also purchased Section --- */}

      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="border-b-2 border-black mb-8">

          <h2 className="text-lg font-bold text-gray-800 pb-2 inline-block">

            People also purchased

          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {suggestedProducts.map((product) => (

            <div key={product.id} className="group flex flex-col">

              <div className="relative bg-[#F3F3F3] aspect-[3/4] overflow-hidden">

                <Image src={product.src} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />

                <div className="absolute bottom-3 left-0 right-0 flex justify-center">

                  <div className="bg-white/90 px-2 py-1 shadow-sm flex items-center gap-1">

                    <span className="text-[12px] font-black">৳ {product.price}</span>

                    <span className="text-gray-400 line-through text-[10px]">৳ {product.oldPrice}</span>

                  </div>

                </div>

              </div>

              <button className="bg-black text-white w-full py-2.5 mt-auto flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">

                <Plus size={16} /> <span className="text-[11px] font-bold uppercase">Add To Cart</span>

              </button>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </div>
  );
}