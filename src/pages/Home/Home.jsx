// Home.js
import React from "react";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
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
      <div>
        {/* Your other content */}
      </div>
    </>
  );
};

export default Home;