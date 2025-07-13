// Home.js
import React from "react";
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
  return (
    <>
      <div className="bg-[#a31d1d]">
        <Header 
          variant="home"
          bg_color="bg-[#a31d1d]"
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