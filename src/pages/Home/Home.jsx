// Home.js
import React from "react";
import Header from "../components/Header/Header";
import GroupSvg from "../../assets/Group.svg";

const Home = () => {
  return (
    <>
      {/* Decorative Group SVG moved from Header */}
      <div className="absolute top-0 right-0 z-0">
        <img src={GroupSvg} alt="Decorative" className="w-auto h-auto" />
      </div>
      <Header 
        variant="home" 
        bg_color="bg-transparent"
        // Add width control props
        containerWidth="w-full"           // Container width
        maxWidth="max-w-7xl"             // Maximum width
        innerWidth="w-full"              // Inner content width
        logoWidth="w-auto"               // Logo width
        searchWidth="max-w-[200px]"      // Search bar width
        // Add responsive width controls
        mobileWidth="w-full"             // Mobile width
        tabletWidth="w-full"             // Tablet width
        desktopWidth="w-full"            // Desktop width
        // Add padding/margin controls
        horizontalPadding="px-4 sm:px-6 md:px-8 lg:px-12"
        verticalPadding="py-6"
        // Add layout controls
        layout="flex-col sm:flex-row"    // Layout direction
        alignment="items-center justify-between"
        spacing="gap-4 sm:gap-6"         // Spacing between elements
      />
      <div className="bg-[#a31d1d]">
        {/* Your other content */}
      </div>
    </>
  );
};

export default Home;