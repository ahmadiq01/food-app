import React from "react";
import Logo1 from "../../../assets/logo 1.svg";

const Header = () => {
  return (
    <div className="bg-[#F8F2DE] px-0 sm:px-[135px] md:px-[30px] lg:px-[60px] py-[30px] border-b-[1.5px] border-[#ecdcbf]">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-between bg-[#ecdcbf] rounded-[20px] px-[10px] sm:px-[10px] md:px-[16px] lg:px-[20px] py-3 sm:py-0 md:py-0 lg:py-0 shadow h-auto sm:h-[67px] md:h-[60px] lg:h-[60px]">
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 sm:mb-0 md:mb-0 lg:mb-0">
          <a href="/" className="flex items-center">
            <img src={Logo1} alt="Logo" className="h-12 w-auto md:h-10 lg:h-10" />
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-left gap-6 sm:gap-8 md:gap-4 lg:gap-4 flex-1 sm:ml-8 md:ml-6 lg:ml-6 mb-2 sm:mb-0 md:mb-0 lg:mb-0">
          <a href="/" className="font-medium text-black hover:text-[#b48a4a] text-base md:text-sm lg:text-sm">Home</a>
          <a href="/login" className="font-medium text-black hover:text-[#b48a4a] text-base md:text-sm lg:text-sm">Products</a>
          <a href="/signup" className="font-medium text-black hover:text-[#b48a4a] text-base md:text-sm lg:text-sm">About us</a>
          <a href="/signup" className="font-medium text-black hover:text-[#b48a4a] text-base md:text-sm lg:text-sm">Blog</a>
        </nav>
        {/* Search and Icons */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-2 w-full sm:w-auto md:w-auto lg:w-auto justify-center sm:justify-end md:justify-end lg:justify-end">
          {/* Search Bar */}
          <form className="flex items-center bg-transparent border border-[#C3B79F] rounded-full px-3 py-1 w-full max-w-[180px] sm:max-w-none md:max-w-[120px] lg:max-w-[120px]">
            <svg className="w-5 h-5 text-black mr-2 md:w-4 md:h-4 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search Product" className="bg-transparent outline-none text-sm md:text-xs lg:text-xs w-full placeholder-[#726c60]" />
          </form>
          {/* User Icon */}
          <button className="p-2 rounded-full border border-[#C3B79F] hover:border-[#b48a4a] bg-[#ecdcbf] md:p-1.5 lg:p-1.5">
            <svg className="w-6 h-6 text-black md:w-5 md:h-5 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
          </button>
          {/* Cart Icon */}
          <button className="p-2 rounded-full border border-[#C3B79F] hover:border-[#b48a4a] bg-[#ecdcbf] md:p-1.5 lg:p-1.5">
            <svg className="w-6 h-6 text-black md:w-5 md:h-5 lg:w-5 lg:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
