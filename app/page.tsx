import Image from "next/image";
import Link from "next/link";
import fabrilogo from "@/public/fabrilife.svg";
import {
  MapPin, User, Heart, ShoppingCart, Search,
  Home as HomeIcon, Grid, MessageCircle
} from "lucide-react";
import { Profiler } from "react";
import fullimage from "@/public/fullscreenimage.jpg";
import gplay from "@/public/playstorebadge.svg";
import Appstore from "@/public/fabrilifeappstore.svg"
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
import noakhali from "@/public/noakhali.jpg"
import rajshahi from "@/public/rajshahi.jpg"
import printed from "@/public/print.jpg"
import design from "@/public/design.jpg"
import sleeve from "@/public/full sleeve.jpg"
import drop from "@/public/drop.jpg"
import short from "@/public/short.jpg"
import women from "@/public/women.jpg"
import cloth from "@/public/kapor.png"
import polo from "@/public/polo.jpg"
import polo1 from "@/public/pro1.jpg"
import polo2 from "@/public/2.jpeg"
import polo3 from "@/public/3.jpeg"
import polo4 from "@/public/4.jpg"
import polo5 from "@/public/5.jpg"
import polo6 from "@/public/66.jpg"
import polo7 from "@/public/7.jpg"
import polo8 from "@/public/8.jpg"
import a from "@/public/a.jpg"
import fabriicon from "@/public/fabrilife-icon-white.svg"
import { Instagram, Facebook, Youtube, Mail, Phone, Check } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import PinterestIcon from "@/components/ui/pinterest-icon";


export default function Home() {
  return (
    <div className="bg-[#F5F5F6] pb-16 lg:pb-0 overflow-x-hidden">
      <section className="w-full">
        <Image src={fullimage} alt="Hero Banner" className="w-full object-cover" />
      </section>


      <section className="bg-[#F1F1F1] text-xs lg:text-sm font-bold text-[#373A3C]">
        <div className="flex items-center lg:px-20 mt-4">
          {/* মেনু আইটেমগুলোর জন্য একটি কন্টেইনার যা মাঝখানে থাকবে */}
          <div className="flex flex-1 justify-between lg:justify-around">
            <div className="text-center py-3 px-4 lg:px-8 hover:bg-gray-200 cursor-pointer transition-colors text-blue-800 lg:text-[#373A3C]">SHOP NOW</div>
            <Link href="/men">
              <div className="text-center py-3 px-4 lg:px-8 hover:bg-gray-200 cursor-pointer transition-colors text-blue-800 lg:text-[#373A3C]">MEN</div>
            </Link>
            <Link href="/women">
              <div className="text-center py-3 px-4 lg:px-8 hover:bg-gray-200 cursor-pointer transition-colors text-blue-800 lg:text-[#373A3C]">WOMEN</div>
            </Link>
            <Link href="/kids">
              <div className="text-center py-3 px-4 lg:px-8 hover:bg-gray-200 cursor-pointer transition-colors text-blue-800 lg:text-[#373A3C]">KIDS</div>
            </Link>
          </div>

    {/* Desktop App Banner যা ডানে ফিক্সড থাকবে */}
    <div className="hidden lg:flex items-center gap-4 py-2">
      <p className="whitespace-nowrap">GET 5% OFF ON APP</p>
      <div className="gap-2 flex">
        <span className="cursor-pointer"><Image src={gplay} alt="Google Play" className="h-8 w-auto" /></span>
        <span className="cursor-pointer"><Image src={Appstore} alt="App Store" className="h-8 w-auto" /></span>
      </div>
    </div>

  </div>
</section>

      {/* Mobile App Banner */}
      <section className="lg:hidden flex flex-row items-center justify-center gap-4 py-4 bg-[#F1F1F1] border-t border-gray-200 mt-2">
        <p className="text-xs font-bold text-[#373A3C]">GET 5% OFF ON APP</p>
        <div className="gap-2 flex">
          <span><Image src={gplay} alt="Google Play" className="h-[28px] w-auto" /></span>
          <span><Image src={Appstore} alt="App Store" className="h-[28px] w-auto" /></span>
        </div>
      </section>

      <main className="mx-auto font-assistant lg:max-w-[1100px] px-2 lg:px-0">
        <section>
          <div className="px-5 py-3 mt-2 bg-[#E0F7FA] text-[#000000] text-sm lg:text-base flex flex-col lg:block text-center lg:text-left">
            <span className="font-black flex items-center justify-center lg:inline">Event T-shirt <span className="ml-1 text-[10px]">&#9654;</span></span>
            <span className="mx-0 lg:mx-2 mt-1 lg:mt-0">T-shirt/Clothing with your brand logo or design? We are delivering worldwide at unbeatable prices.</span>
            <span className="font-black mt-1 lg:mt-0 cursor-pointer hover:underline flex items-center justify-center lg:inline">Click here <span className="ml-1 text-[10px]">&#9654;</span></span>
          </div>
          <div className="flex items-center justify-center text-[22px] lg:text-[32px] py-4 lg:py-6 text-[#CC8119] bg-[#FAF3E7] font-fjalla mt-4 tracking-wider">NEW ARRIVAL</div>
        </section>
        <section className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4">
            <Image src={pic1} alt="" className="w-full h-auto" />
            <Image src={pic2} alt="" className="w-full h-auto" />
            <Image src={pic3} alt="" className="w-full h-auto" />
            <Image src={pic4} alt="" className="w-full h-auto" />
            <Image src={pic5} alt="" className="w-full h-auto" />
            <Image src={pic6} alt="" className="w-full h-auto" />
            <Image src={pic7} alt="" className="w-full h-auto" />
            <Image src={pic8} alt="" className="w-full h-auto" />
            <Image src={pic9} alt="" className="w-full h-auto" />
            <Image src={pic10} alt="" className="w-full h-auto" />
            <Image src={pic11} alt="" className="w-full h-auto" />
            <Image src={pic12} alt="" className="w-full h-auto" />
          </div>
        </section>
        <section className="mt-4">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <div className="relative w-full lg:w-1/2">
              <Image src={noakhali} alt="" className="w-full h-auto object-cover aspect-4/3 lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-xl lg:text-2xl text-[#FFFFFF] font-fjalla">Noakhali Express</span>
            </div>
            <div className="relative w-full lg:w-1/2">
              <Image src={rajshahi} alt="" className="w-full h-auto object-cover aspect-4/3 lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-xl lg:text-2xl text-[#FFFFFF] font-fjalla">Rajshahi Warriors</span>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-4">
            <span className="relative">
              <Image src={printed} alt="" className="w-full h-auto object-cover aspect-square lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-lg lg:text-2xl text-[#FFFFFF] font-fjalla bg-black/30 lg:bg-transparent py-1 lg:py-0">Printed Short Sleeve</span>
            </span>
            <span className="relative">
              <Image src={design} alt="" className="w-full h-auto object-cover aspect-square lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-lg lg:text-2xl text-[#FFFFFF] font-fjalla bg-black/30 lg:bg-transparent py-1 lg:py-0">Designer Edition</span>
            </span>
            <span className="relative">
              <Image src={short} alt="" className="w-full h-auto object-cover aspect-square lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-lg lg:text-2xl text-[#FFFFFF] font-fjalla bg-black/30 lg:bg-transparent py-1 lg:py-0">Short Sleeve Blanks</span>
            </span>
            <span className="relative">
              <Image src={drop} alt="" className="w-full h-auto object-cover aspect-square lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-lg lg:text-2xl text-[#FFFFFF] font-fjalla bg-black/30 lg:bg-transparent py-1 lg:py-0">Drop Shoulder</span>
            </span>
            <span className="relative">
              <Image src={sleeve} alt="" className="w-full h-auto object-cover aspect-square lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-lg lg:text-2xl text-[#FFFFFF] font-fjalla bg-black/30 lg:bg-transparent py-1 lg:py-0">Full sleeve</span>
            </span>
            <span className="relative">
              <Image src={women} alt="" className="w-full h-auto object-cover aspect-square lg:aspect-auto" />
              <span className="absolute bottom-4 left-0 w-full text-center text-lg lg:text-2xl text-[#FFFFFF] font-fjalla bg-black/30 lg:bg-transparent py-1 lg:py-0">Women's T-shirt</span>
            </span>
          </div>
        </section>
        <section className="flex w-full mt-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 bg-white lg:bg-transparent pt-6 lg:p-0 rounded-lg lg:rounded-none shadow-sm lg:shadow-none w-[calc(100%-1rem)] lg:w-full mx-auto overflow-hidden">
            <div className="w-full lg:w-[55%] text-[#373A3C] flex flex-col justify-center lg:pr-8 px-2 lg:px-2 shrink-0 lg:shrink">
              <div className="text-[20px] lg:text-[42px] font-normal text-[#1e618e] lg:text-[#373A3C] text-center lg:text-left flex items-center justify-center lg:justify-start">
                Fabrilife <span className="text-[#5cb85c] ml-1.5 font-light text-[22px] lg:text-[inherit]">›</span>
              </div>
              <div className="text-[13px] lg:text-[24px] mt-1 text-center lg:text-left text-[#373A3C] font-normal">
                Because comfort and confidence go hand in hand.
              </div>
              <div className="mt-2 lg:mt-2 text-[11px] lg:text-[15.5px] text-[#58595B] text-center lg:text-left leading-[1.6] lg:leading-[1.8] px-3 lg:px-0">
                We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident. Apart from the fabric, design and fit, we go through strict quality control parameters to give you what you truly deserve. The power of a good outfit is how it can influence your perception of yourself.
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-4 lg:mt-0 px-3 lg:px-0 h-full pb-6 lg:pb-0">
              <Image src={cloth} alt="Fabric layers" className="w-full h-auto lg:h-[214px] object-cover rounded-lg lg:rounded-none object-center" />
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 lg:gap-4 mt-8 lg:mt-4">
            {/* ১. বাম পাশের বড় ছবি (২ কলাম দখল করবে) */}
            <div className="md:col-span-2 relative h-[300px] md:h-auto">
              <Image src={polo} alt="Featured Polo" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 text-2xl text-[#FFFFFF] font-fjalla bg-linear-to-t from-black/80 to-transparent w-full h-24 items-end pb-4 justify-center flex">
                <span>Designer Polo</span>
              </div>
            </div>

            {/* ২. ডান পাশের ৮টি ছোট ছবি (বাকি ৪ কলাম দখল করবে) */}
            <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
              <Image src={polo1} alt="Polo 1" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo2} alt="Polo 2" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo3} alt="Polo 3" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo4} alt="Polo 4" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo5} alt="Polo 5" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo6} alt="Polo 6" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo7} alt="Polo 7" className="w-full h-auto aspect-square object-cover" />
              <Image src={polo8} alt="Polo 8" className="w-full h-auto aspect-square object-cover" />
            </div>
          </div>
        </section>
        <section>
          <div className="relative mt-4 w-[calc(100%-1rem)] lg:w-full mx-auto bg-[#EBEBEB] overflow-hidden rounded-lg lg:rounded-none h-auto lg:h-[220px] flex flex-col lg:flex-row lg:items-center">

            {/* Desktop & Mobile Text */}
            <div className="relative z-10 w-full pt-6 lg:pt-0 px-6 lg:pl-10 pb-4 lg:pb-0 lg:w-[580px] xl:w-[650px] shrink-0">
              <div className="text-[17px] lg:text-[22px] text-[#5b92ba] font-normal text-left flex items-center">
                Bulk Order / Wholesale <span className="text-[#5cb85c] ml-1.5 font-light text-[18px] lg:text-[24px]">›</span>
              </div>
              <div className="text-[#373A3C] mt-2 lg:mt-3 text-[12px] lg:text-[14px] font-normal leading-[1.6] text-left pr-4 lg:pr-0">
                We provide plain t-shirts and apparel fo all your custom branding needs from the top brands worldwide at unbeatable wholesale prices. With no minimum orders, everyone can enjoy the benefits of buying bulk t-shirts without ordering bulk quantities.
              </div>
            </div>

            {/* Desktop Image */}
            <div className="absolute bottom-0 right-0 lg:right-4 h-[85%] w-[50%] hidden lg:flex justify-end items-end">
              <Image src={a} alt="Bulk Order Wholesale" className="h-full w-auto object-contain object-bottom-right" />
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden w-full px-6 pb-6 pt-2">
              <Image src={a} alt="Bulk Order Wholesale" className="w-full h-auto object-contain" />
            </div>

          </div>
        </section>

      </main>

      

      <footer>
        <div className="bg-[#58595B] flex sm:items-start justify-start px-10 md:px-0 md:items-center md:justify-around mt-4 py-8 flex-col md:flex-row text-gray-300">
          <div className="flex  flex-col mt-2 leading-8 ">
            <Image src={fabriicon} alt="" width={50} height={50} className="mb-6" />
            <span className="hover:text-[#F2AD4E] transition transform hover:translate-x-2 duration-300 cursor-pointer">About Fabrilife</span>
            <span className="hover:text-[#F2AD4E] transition transform hover:translate-x-2 duration-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-[#F2AD4E] transition transform hover:translate-x-2 duration-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F2AD4E] transition transform hover:translate-x-2 duration-300 cursor-pointer">Cancellation & Return Police</span>
            <span className="hover:text-[#F2AD4E] transition transform hover:translate-x-2 duration-300 cursor-pointer">FAQs</span>
            <span className="hover:text-[#F2AD4E] transition transform hover:translate-x-2 duration-300 cursor-pointer">Contact Us</span>
          </div>
          <div className="mt-10 md:mt-6">
            <div className="flex gap-2">
              <span><Mail className="text-[#F2AD4E]" /></span>
              <span>GET SPECIAL DISCOUNTS IN YOUR INBOX</span>
            </div>
            <div className="flex items-end max-w-lg mt-4 gap-2">
              {/* ইনপুট ফিল্ড কন্টেইনার */}
              <div className="flex-1 border-b border-white ">
                <input
                  type="email"
                  placeholder="Enter email to get offers..."
                  className="w-full bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none font-assistant"
                />
              </div>

              {/* বড় সাবস্ক্রাইব বাটন */}
              <button className="bg-[#F2AD4E] hover:bg-[#df9c3f] text-white px-3 py-2 font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 mt-10 md:mt-8">
              <span><Phone className="text-[#F2AD4E]" /></span>
              <span>FOR ANY HELP YOU MAY CALL US AT</span>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span>+8809677666888</span>
              <span>Customer Service</span>
              <span>Track your order or get help returning an order</span>
            </div>

          </div>
          <div>
            <div>
              <div className="flex gap-2 mt-8 md:mt-0">
                <Check className="text-[#F2AD4E]" />
                <span>FOLLOW US</span>
              </div>
              <div className="mt-4 flex flex-wrap">
                Stay updated on our latest arrivals,<br /> exclusive promotions and events.
              </div>
              <div className="flex gap-4 mt-4">
                <Instagram className="cursor-pointer" />
                <FaTiktok size={22} className="cursor-pointer" />
                <Facebook className="cursor-pointer" />
                <TwitterXIcon size={25} className="cursor-pointer" />
                <PinterestIcon size={25} className="cursor-pointer" />
                <Youtube size={25} className="cursor-pointer" />

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
