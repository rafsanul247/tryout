import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Check, Instagram, Facebook, Youtube } from "lucide-react";
import { FaTiktok, FaPinterest } from "react-icons/fa6";
import fabriicon from "@/public/fabrilife-icon-white.svg";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import PinterestIcon from "@/components/ui/pinterest-icon";

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="bg-[#58595B] flex sm:items-start justify-start px-10 md:px-0 md:items-center md:justify-around py-8 flex-col md:flex-row text-gray-300">
        <div className="flex flex-col mt-2 leading-8">
          <Image src={fabriicon} alt="Fabrilife Icon" width={50} height={50} className="mb-6" />
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
            <div className="flex-1 border-b border-white">
              <input
                type="email"
                placeholder="Enter email to get offers..."
                className="w-full bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none font-assistant"
              />
            </div>
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
  );
};

export default Footer;