// Home.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import GroupSvg from "../../assets/Group.svg";
import SubHeadingSvg from "../../assets/Sub Heading.svg";
import VideoSvg from "../../assets/Video.svg";
import HeaderSection from "./HeaderSection";
import AboutUs from "./AboutUs";
import Connect from "./Connect";
import OurFoods from "./OurFoods";
import OurCustomers from "./OurCustomers";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };
    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('storage', updateCartCount);
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <>
      <div className="bg-[#a31d1d]">
        <Header 
          variant="home"
          bg_color="bg-[#a31d1d]"
          cartCount={cartCount}
          containerWidth="w-full" // Container width
          maxWidth="max-w-7xl" // Maximum width
          innerWidth="w-full" // Inner content width
          logoWidth="w-auto" // Logo width
          searchWidth="max-w-[200px]" // Search bar width
          mobileWidth="w-full" // Mobile width
          tabletWidth="w-full" // Tablet width
          desktopWidth="w-full" // Desktop width
          horizontalPadding="px-4 sm:px-6 md:px-8 lg:px-12"
          verticalPadding="py-6"
          layout="flex-col sm:flex-row" // Layout direction
          alignment="items-center justify-between"
          spacing="gap-4 sm:gap-6" // Spacing between elements
        />
        {/* header sections for home within the home  */}
        <HeaderSection />
        <AboutUs />
        <OurFoods />
        <OurCustomers />
        <Connect />
      </div>
    </>
  );
};

export default Home;