// Header.js
import React from "react";
import Logo1 from "../../../assets/logo 1.svg";
import HomeLogo from "../../../assets/home-logo.svg";

const Header = ({ 
  variant = "default", 
  bg_color,
  // Width control props
  containerWidth = "w-full",
  maxWidth = "max-w-[1280px]", // Set to 1280px for normal screens
  innerWidth = "w-full",
  logoWidth = "w-auto",
  searchWidth = "max-w-[180px] sm:max-w-none md:max-w-[120px] lg:max-w-[120px]",
  // Responsive width controls
  mobileWidth = "w-full",
  tabletWidth = "w-full",
  desktopWidth = "w-full",
  // Padding/margin controls
  horizontalPadding = "px-0 sm:px-[135px] md:px-[30px] lg:px-[60px]",
  verticalPadding = "py-[30px]",
  // Layout controls
  layout = "flex-col sm:flex-row md:flex-row lg:flex-row",
  alignment = "items-center justify-between",
  spacing = "gap-6 sm:gap-8 md:gap-4 lg:gap-4"
}) => {
  // Define styles based on variant
  const getStyles = () => {
    switch (variant) {
      case "home":
        return {
          containerBg: bg_color,
          innerBg: "bg-[#e31e27]",
          border: "border-[#a31d1d]",
          textColor: "text-white",
          hoverColor: "hover:text-white/80",
          searchBorder: "border-white/30",
          buttonBg: "bg-white/20",
          buttonBorder: "border-white/30",
          buttonHover: "hover:border-white/50",
          placeholderColor: "placeholder-white/70",
          shadow: "shadow-lg"
        };
      default:
        return {
          containerBg: "bg-[#F8F2DE]",
          innerBg: "bg-[#ecdcbf]",
          border: "border-[#ecdcbf]",
          textColor: "text-black",
          hoverColor: "hover:text-[#c4a268]",
          searchBorder: "border-[#C3B79F]",
          buttonBg: "bg-[#ecdcbf]",
          buttonBorder: "border-[#C3B79F]",
          buttonHover: "hover:border-[#b48a4a]",
          placeholderColor: "placeholder-[#726c60]",
          shadow: "shadow"
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`${styles.containerBg} px-2 sm:px-[135px] md:px-[30px] lg:px-[60px] py-[30px] border-b-[1.5px] ${styles.border} relative`}>
      
      <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-between ${styles.innerBg} rounded-[20px] px-2 sm:px-[10px] md:px-[16px] lg:px-[20px] py-0 sm:py-0 md:py-0 lg:py-0 ${styles.shadow} h-auto sm:h-[67px]  md:h-[60px] lg:h-[60px] relative z-10 w-full sm:w-[98%] mx-auto`} style={{ width: '96%' }}>
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 sm:mb-0 md:mb-0 lg:mb-0">
          <a href="/" className="flex items-center">
            <img 
              src={variant === "home" ? HomeLogo : Logo1} 
              alt="Logo" 
              className="h-6 w-auto md:h-10 lg:h-10" 
            />
          </a>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-left gap-6 sm:gap-8 md:gap-4 lg:gap-4 flex-1 sm:ml-8 md:ml-6 lg:ml-6 mb-2 sm:mb-0 md:mb-0 lg:mb-0">
          <a href="/" className={`font-medium ${styles.textColor} ${styles.hoverColor} text-base md:text-sm lg:text-sm transition-colors duration-200`}>
            Home
          </a>
          <a href="/login" className={`font-medium ${styles.textColor} ${styles.hoverColor} text-base md:text-sm lg:text-sm transition-colors duration-200`}>
            Products
          </a>
          <a href="/signup" className={`font-medium ${styles.textColor} ${styles.hoverColor} text-base md:text-sm lg:text-sm transition-colors duration-200`}>
            About us
          </a>
          <a href="/signup" className={`font-medium ${styles.textColor} ${styles.hoverColor} text-base md:text-sm lg:text-sm transition-colors duration-200`}>
            Blog
          </a>
        </nav>
        
        {/* Search and Icons */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-2 w-full sm:w-auto md:w-auto lg:w-auto justify-center sm:justify-end md:justify-end lg:justify-end">
          {/* Search Bar */}
          <form className={`flex items-center bg-transparent border ${styles.searchBorder} rounded-full px-3 py-1 w-full max-w-[180px] sm:max-w-none md:max-w-[120px] lg:max-w-[120px]`}>
            <svg className={`w-5 h-5 ${styles.textColor} mr-2 md:w-4 md:h-4 lg:w-4 lg:h-4`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search Product" 
              className={`bg-transparent outline-none text-sm md:text-xs lg:text-xs w-full ${styles.placeholderColor} ${variant === "home" ? "text-white" : ""}`} 
            />
          </form>
          
          {/* User Icon */}
          <button className={`p-2 rounded-full border ${styles.buttonBorder} ${styles.buttonHover} ${styles.buttonBg} md:p-1.5 lg:p-1.5 transition-all duration-200`}>
            <svg className={`w-6 h-6 ${styles.textColor} md:w-5 md:h-5 lg:w-5 lg:h-5`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 8-4 8-4s8 0 8 4"/>
            </svg>
          </button>
          
          {/* Cart Icon */}
          <button className={`p-2 rounded-full border ${styles.buttonBorder} ${styles.buttonHover} ${styles.buttonBg} md:p-1.5 lg:p-1.5 transition-all duration-200`}>
            <svg className={`w-6 h-6 ${styles.textColor} md:w-5 md:h-5 lg:w-5 lg:h-5`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
