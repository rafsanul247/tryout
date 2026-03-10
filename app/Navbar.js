import Image from "next/image";
import fabrilogo from "@/public/fabrilife.svg";
import { MapPin, User, Heart, ShoppingCart, Search } from "lucide-react";
import { Profiler } from "react";
import Link from "next/link";
import  HeartIcon from "@/components/ui/heart-icon";
import  MapPinIcon from "@/components/ui/map-pin-icon";
import  UserIcon from "@/components/ui/user-icon";
import  ShoppingCartIcon from "@/components/ui/shopping-cart-icon";


export default function Home() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between px-[24] mx-auto h-20 bg-white font-assistant ">
        <div className=" border-red-500 h-full items-center flex ">
          <Link href={"/"}>
            <Image src={fabrilogo} alt="" width={200} height={40} className="cursor-pointer"/>
            </Link>
        </div>
        <div className=" border-red-500 h-full flex w-110 text-sm items-center font-extrabold  relative">
          <div className=" border-blue-400 absolute left-3.5 text-[#515361]">
          <span className="py-7 border-b-transparent hover:border-b-4 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer">MEN</span>
          <span className="py-7 border-b-transparent hover:border-b-4 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer">WOMEN</span>
          <span className="py-7 border-b-transparent hover:border-b-4 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer">KIDS</span>
          <span className="py-7 border-b-transparent hover:border-b-4 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer">TEENS</span>
          <span className="py-7 border-b-transparent hover:border-b-4 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 px-4 cursor-pointer">SPORTS</span>
        </div>
        </div>
        <div className=" h-full py-4 flex w-90 relative items-center">
          <input 
          type="text"
          placeholder="Search"
          className="px-4 bg-[#F5F5F6] absolute right-10 py-3 w-70 outline-none focus:ring-1 focus:ring-black text-sm text-black transition-all duration-300"
          />
        </div>
        
          <div className="flex items-center justify-center h-full text-[#282C3F] tracking-tighter">
            <div className="px-4 flex flex-col items-center text-xs  hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <MapPinIcon size={22} strokeWidth={1.5} className="group-hover:scale-105"/>
              <span className="mt-2 font-bold">Stores</span>
            </div>
            <div className="px-4 flex flex-col items-center text-xs  hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <UserIcon size={22} strokeWidth={1.5} className="group-hover:scale-105"/>
              <span className="mt-2 font-bold">Profile</span>
            </div>
            <div className="px-4 flex flex-col items-center text-xs  hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <HeartIcon size={22} strokeWidth={1.5} className="group-hover:scale-105"/>
              <span className="mt-2 font-bold">Wishlist</span>
            </div>
            <div className="px-4 flex flex-col items-center text-xs  hover:text-pink-600 transition-all duration-300 cursor-pointer group">
              <ShoppingCartIcon size={22} strokeWidth={1.5} className="group-hover:scale-105"/>
              <span className="mt-2 font-bold">Bag</span>
            </div>
          
        </div>
      </div>
    </header>
  );
}
