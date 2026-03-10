import Image from "next/image";
import fabrilogo from "@/public/fabrilife.svg";
import { MapPin, User, Heart, ShoppingCart, Search } from "lucide-react";
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
import TwitterXIcon  from "@/components/ui/twitter-x-icon";
import  PinterestIcon from "@/components/ui/pinterest-icon";


export default function Home() {
  return (
    <div className="bg-[#F5F5F6]">
       <section className="">
        <Image src={fullimage} alt="" />
      </section>
    
     
      <section>
        <div className="flex items-center justify-between mt-4 py-2 px-20 text-[#373A3C] font-semibold bg-[#F1F1F1] ">
          <p>SHOP NOW</p>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
          <div className="flex items-center gap-4">
            <p>GET 5% OFF ON APP</p>
            <div className="gap-2 flex">
              <span><Image src={gplay} alt="" /></span>
              <span><Image src={Appstore} alt="" /></span>

            </div>

          </div>
        </div>
      </section>
      <main className="mx-auto font-assistant max-w-[1100] ">
      <section>
        <div className="px-5 py-2 mt-2 bg-[#E0F7FA] text-[#000000] border-red-500">
          <span className="font-black">Event T-shirt</span> <span>T-shirt.Clothing with your brand logo or design?We are delivering worldwide at unbeatable prices.</span> <span className="font-black">Click here</span>
        </div>
        <div className="flex items-center justify-center text-[32px] py-6 text-[#CC8119] bg-[#FAF3E7] font-fjalla mt-2">NEW ARRIVAL</div>
      </section>
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Image src={pic1} alt="" />
          <Image src={pic2} alt="" />
          <Image src={pic3} alt="" />
          <Image src={pic4} alt="" />
          <Image src={pic5} alt="" />
          <Image src={pic6} alt="" />
          <Image src={pic7} alt="" />
          <Image src={pic8} alt="" />
          <Image src={pic9} alt="" />
          <Image src={pic10} alt="" />
          <Image src={pic11} alt="" />
          <Image src={pic12} alt="" />
        </div>
      </section>
      <section>
        <div className="flex gap-4 mt-2 border-red-400">
          <div className="relative  border-red-500"><Image src={noakhali} alt="" width={701} />
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Noakhali Express</span></div>
          <div className="relative"><Image src={rajshahi} alt="" width={701}/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Rajshahi Warriors</span></div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <span className="relative"><Image src={printed} alt=""/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Printed Short Sleeve</span></span>
          <span className="relative"><Image src={design} alt=""/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Designer Edition</span></span>
          <span className="relative"><Image src={short} alt=""/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Short Sleeve Blanks</span></span>
          <span className="relative"><Image src={drop} alt=""/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Drop Shoulder</span></span>
          <span className="relative"><Image src={sleeve} alt=""/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Full sleeve</span></span>
          <span className="relative"><Image src={women} alt=""/>
          <span className="absolute bottom-4 left-1/3 text-2xl text-[#FFFFFF] font-fjalla">Women's T-shirt</span></span>
        </div>
      </section>
      <section>
        <div>
          <div className="flex gap-4 mt-4">
            <div className="text-black flex flex-col">
            <span className="text-4xl font-semibold mt-4">Fabrilife</span>
            <span className="text-xl mt-2">Because comfort and confidence go hand in hand.</span> 
            <span className="mt-1">We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident. Apart from the fabric, design and fit, we go through strict quality control parameters to give you what you truly deserve. The power of a good outfit is how it can influence your perception of yourself.</span>
          </div>
          <div><Image src={cloth} alt="" width={910} /></div>
          </div>
        </div>
      </section>
      <section>
        
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
  
  {/* ১. বাম পাশের বড় ছবি (২ কলাম দখল করবে) */}
  <div className="md:col-span-2 relative">
    <Image src={polo} alt="Featured Polo" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 text-2xl text-[#FFFFFF] font-fjalla bg-linear-to-t from-black/70 to-transparent w-full h-20 items-center justify-center flex">
    <span>Designer Polo</span>
    </div>
  </div>
  

  {/* ২. ডান পাশের ৮টি ছোট ছবি (বাকি ৪ কলাম দখল করবে) */}
  <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
    {/* এখানে তোমার ৮টি ছবি থাকবে */}
    <Image src={polo1} alt="Polo 1" className="w-full" />
    <Image src={polo2} alt="Polo 2" className="w-full" />
    <Image src={polo3} alt="Polo 3" className="w-full" />
    <Image src={polo4} alt="Polo 4" className="w-full" />
    <Image src={polo5} alt="Polo 5" className="w-full" />
    <Image src={polo6} alt="Polo 6" className="w-full" />
    <Image src={polo7} alt="Polo 7" className="w-full" />
    <Image src={polo8} alt="Polo 8" className="w-full" />
  </div>

</div>

        
      </section>
      <section>
        <div className="relative mt-4">
          <Image src={a} alt="" />
          <div className="absolute top-10 left-5 flex-col flex w-130">
            <span className="text-2xl text-blue-800 ">Bulk Order/Wholesale</span>
            <span className="text-black mt-3"> We provide plain t-shirts and apparel fo all your custom branding needs from the top brands worldwide at unbeatable wholesale prices. With no minimum orders, everyone can enjoy the benefits of buying bulk t-shirts without ordering bulk quantities.</span>
          </div>
        </div>
      </section>

    </main>
          <footer>
        <div className="bg-[#58595B] flex items-center justify-around mt-4 py-8">
          <div className="flex  flex-col mt-2 leading-8">
            <Image src={fabriicon} alt="" width={50} height={50} className="mb-6"/>
            <span>About Fabrilife</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cancellation & Return Police</span>
            <span>FAQs</span>
            <span>Contact Us</span>
          </div>
          <div className="mt-6">
            <div className="flex gap-2">
              <span><Mail className="text-[#F2AD4E]"/></span>
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
            <div className="flex gap-2 mt-8">
              <span><Phone className="text-[#F2AD4E]"/></span>
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
              <div className="flex gap-2">
                <Check className="text-[#F2AD4E]"/>
                <span>FOLLOW US</span>
              </div>
              <div className="mt-4 flex flex-wrap">
                Stay updated on our latest arrivals,<br/> exclusive promotions and events.
              </div>
              <div className="flex gap-4 mt-4">
                <Instagram />
                <FaTiktok size={22}/>
                <Facebook />
                <TwitterXIcon size={25}/>
                <PinterestIcon size={25}/>
                <Youtube size={25}/>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
