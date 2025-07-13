import React from "react";
import Rleaf from "../../assets/Rleaf.svg";
import Bomb from "../../assets/Bomb.svg";
import FooterBG from "../../assets/FooterBG.svg";
import logo from "../../assets/home-logo.svg";

const Connect = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#F8F2DE] pt-16 pb-0 relative">
      {/* Main card container */}
      <div className="relative z-20 w-[1170px] h-[422px] bg-[#E31E27] mt-[100px] rounded-2xl border border-white/20 shadow-lg flex flex-col items-center justify-center mx-auto overflow-hidden" style={{marginBottom: '-300px'}}>
        {/* Decorative SVGs */}
        <img src={Bomb} alt="Bomb decoration" className="absolute left-6 bottom-6 w-32 opacity-10" />
        <img src={Rleaf} alt="Leaf decoration" className="absolute right-6 top-6 w-32 opacity-10" />

        {/* Content */}
        <h2 className="font-[Sofia] text-4xl md:text-5xl text-white mb-4 text-center">
          Stay Connected, Stay Informed
        </h2>
        <p className="text-white text-base md:text-lg text-center mb-8 max-w-2xl">
          Subscribe to receive exclusive updates, tips, and promotions straight to your inbox. Join our community for expert advice and resources to support your care journey.
        </p>
        <div className="flex flex-row items-center bg-white rounded-full px-2 py-2 w-[519px] h-[70px] shadow-md">
          <input
            type="email"
            placeholder="Enter your email address here"
            className="rounded-full px-6 py-3 w-[350px] bg-white text-gray-700 focus:outline-none border-none shadow-none"
          />
          <button
            type="submit"
            className="bg-[#B71C1C] text-white rounded-full px-8 py-3 text-lg font-semibold ml-2"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer background (curved) */}
      <div className="relative w-full z-10" style={{height: '180px'}}>
        {/* Use the original SVG as the background */}
        <img src={FooterBG} alt="Footer background" className="absolute top-0 left-0 w-full h-auto z-0" />
        {/* Footer content */}
        <div className="relative z-10 max-w-[1170px] mx-auto flex mt-[120px] flex-row justify-between items-start pt-80 pb-8 px-8">
          {/* Logo and socials */}
          <div className="flex flex-col items-start gap-4 min-w-[200px]">
            <img src={logo} alt="Atbaaq Foods Logo" className="w-28 mb-2" />
            <div className="flex flex-row gap-3">
              {/* Replace with your actual social icons */}
              <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-white"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          {/* Useful Links */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <div className="text-white font-semibold mb-2">Useful Links</div>
            <a href="#" className="text-white/80 hover:text-white">Product's</a>
            <a href="#" className="text-white/80 hover:text-white">About Us</a>
            <a href="#" className="text-white/80 hover:text-white">Blogs</a>
          </div>
          {/* Our policies */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <div className="text-white font-semibold mb-2">Our policies</div>
            <a href="#" className="text-white/80 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white">Refund Policy</a>
            <a href="#" className="text-white/80 hover:text-white">Terms Of Service</a>
          </div>
          {/* Customer care */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <div className="text-white font-semibold mb-2">Customer care</div>
            <a href="#" className="text-white/80 hover:text-white">Contact Us</a>
            <a href="#" className="text-white/80 hover:text-white">Track Order</a>
            <a href="#" className="text-white/80 hover:text-white">atbaaqfoods.com</a>
          </div>
        </div>
        {/* Footer bottom line */}
        <div className="relative z-10 max-w-[1170px] mx-auto border-t border-[#ECDCBF] mt-5  text-center text-white/70 text-sm">
          © 2024, Atbaaq Foods
        </div>
      </div>
    </div>
  );
};

export default Connect;