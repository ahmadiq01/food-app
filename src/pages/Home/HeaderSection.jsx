import React from "react";
import SubHeadingSvg from "../../assets/Sub Heading.svg";
import VideoSvg from "../../assets/Video.svg";
import CheckoutIcon from "../../assets/checkout-icon.svg";
import CenterProduct from "../../assets/Center Product box.svg";
import Profile from "../../assets/Ellipse 28.svg";
import Group from "../../assets/Group.svg";
import Arrow from "../../assets/Eye Move Arrow For Best Selling Item.svg";
import RB from "../../assets/RB.svg";
import YB from "../../assets/YB.svg";
import GB from "../../assets/GB.svg";
import RedShadow from "../../assets/RedShadow.svg";
import GreenShadow from "../../assets/GreenShadow.svg";
import YellowShadow from "../../assets/YellowShadow.svg";
import Men from "../../assets/Male Memojis.svg";
import Phone from "../../assets/Phone.svg";
import Female from "../../assets/Female.svg";
import { SocialIcon } from 'react-social-icons';
import { FaFacebookMessenger } from 'react-icons/fa'; // From Font Awesome


const HeaderSection = () => {
  return (
    <div>
      {/* Top right Group image */}
      <div className="fixed top-0 right-0 p-2 z-50">
        <img src={Group} alt="Sub Heading" className="w-[101px] h-[101px]" />
      </div>

      {/* Header Section */}
      {/* make sure this div should not let the other divs come */}
      <div className="flex justify-center mt-8">
        <img src={SubHeadingSvg} alt="Sub Heading" className="h-10 w-auto" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 w-full px-4 md:px-39 gap-4 md:gap-0">
        {/* Div 1 for the video and button */}
        <div className="flex flex-col items-center gap-4 mr-0 md:mr-2 w-full md:w-[288px] lg-w[288px] h[461px] ">
          <img
            src={VideoSvg}
            alt="Video"
            className="rounded-xl object-cover"
            style={{ width: "288px", height: "378px" }}
          />

          {/* Contact Us Card */}
          <div
            className="w-full flex items-center justify-between bg-[#BE3838] rounded-full px-4 -mt-4 py-2 shadow border-1 border-white"
            style={{ height: "71px", width: "250px" }}
          >
            {/* Avatar */}
            <div
              className="flex items-center justify-center bg-white rounded-full"
              style={{ width: "56px", height: "56px" }}
            >
              <img src={Men} alt="Avatar" className="w-12 h-12 rounded-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col flex-1 ml-4">
              <span className="text-white text-large font-semibold leading-tight">
                Contact Us
              </span>
              <span className="text-[#F3D7A5] text-large font-medium leading-tight">
                Helpdesk
              </span>
            </div>

            {/* Phone Icon */}
            <div
              className="flex items-center justify-center bg-white rounded-full"
              style={{ width: "48px", height: "48px" }}
            >
              <img src={Phone} alt="Phone" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Div 2 for the Lazzat Section */}
        <div className="flex flex-col items-center gap-4 w-full md:w-[288px] mr-0 md:mr-4 ">
          {/* Text above image */}
          <div className="flex flex-col items-center mb-4  w-[376px]">
            <div className="font-[Poppins] font-bold text-[62px] leading-[50px] text-[#F8F2DE] text-center">
              Lazzat
            </div>
            <div className="font-[Poppins] font-normal text-[62px] leading-[50px] text-[#F8F2DE] text-center">
              in every bite
            </div>
          </div>

          {/* Image with overlay */}
          <div className="relative w-[408px] h-[378px]">
            <img
              src={CenterProduct}
              alt="Video"
              className="rounded-xl object-cover w-full h-full"
            />
            <div
              className="absolute bottom-22 right-4 bg-[#c03536] text-white font-[Poppins] rounded-full px-10 py-0 text-sm shadow border border-white ">
              our top-selling item's
            </div>
            <img
              src={Arrow}
              alt="Arrow"
              style={{
                top: "300px",
                left: "190px",
                // background  : 'white',
                position: "absolute",
              }}
            />
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex flex-col items-center w-[288px]">
          {/* Stars */}
          <div className="flex flex-row ">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-6xl mt-10">
                ★
              </span>
            ))}
          </div>
          {/* Comment */}
          <div className="text-white text-base text-center mt-[40px] -ml-[40px]  w-[260px] md:w-[320px] lg:w-[360px] h-auto min-h-[40px] max-h-[60px] flex items-center justify-center mx-auto">
            “Atbaaq Foods is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast delivery. I highly recommend Atbaaq Foods to you”.
          </div>
          {/* Avatar */}
          <div className="flex justify-center mt-[-6px]">
            <img
              src={Female}
              alt="Customer"
              className="w-39 h-39 rounded-full"
            />
          </div>
          {/* Social Links */}
          <div className="flex flex-row gap-2 border-1 border-white rounded-full px-4 py-2 shadow">
            <SocialIcon url="https://facebook.com/yourprofile" bgColor="white" fgColor="#BE3838" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://wa.me/yourprofile" bgColor="white" fgColor="#BE3838" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://youtube.com/yourprofile" bgColor="white" fgColor="#BE3838" style={{ height: 40, width: 40 }} />
            <SocialIcon url="https://snapchat.com/add/yourprofile" bgColor="white" fgColor="#BE3838" style={{ height: 40, width: 40 }} />
            <a href="https://m.me/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#BE3838] rounded-full w-10 h-10 flex items-center justify-center shadow">
              <FaFacebookMessenger className="text-[#BE3838] text-2xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Rating Section Ends Here*/}
      {/* Header Sections Ends Here  */}

      {/* bottles Container */}

      <div className="flex items-center justify-center w-full mt-18">
        <div className="bg-blue-200 justify-between flex flex-row rounded-xl relative w-[1200px]">
          {/* Bottle 1 */}
          <div className="flex flex-row ml-[200px] bg-pink-600 rounded-xl p-6 w-1/8 min-w-[320px] relative">
            {/* Shadow Overlay */}
            <img
              src={RedShadow}
              alt="Red Shadow"
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0"
              style={{ pointerEvents: "none" }}
            />
            <img
              src={RB}
              alt="Royal Drink Red"
              className="h-32 w-auto relative z-10"
            />
            <div className="flex flex-col justify-center flex-1 relative z-10">
              <div className="font-bold text-2xl text-[#1A1A1A] mb-1">
                Royal Drink
              </div>
              <div className="text-sm text-[#1A1A1A] mb-2">
                Now that there is the Tec-9, a crappy spray gun from South
                Miami.
              </div>
              <div className="mb-2">
                <span className="line-through text-gray-400 mr-2">
                  1500 PKR
                </span>
                <span className="font-bold text-[#a31d1d] text-lg">
                  999 PKR
                </span>
              </div>
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Bottle 2 */}
          <div className="flex flex-row mr-[50px] rounded-xl p-6 w-1/8 min-w-[320px] relative">
            {/* Shadow Overlay */}
            <img
              src={GreenShadow}
              alt="Green Shadow"
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0"
              style={{ pointerEvents: "none" }}
            />
            <img
              src={GB}
              alt="Royal Drink Green"
              className="h-32 w-auto relative z-10"
            />
            <div className="flex flex-col justify-center flex-1 relative z-10">
              <div className="font-bold text-2xl text-[#1A1A1A] mb-1">
                Royal Drink
              </div>
              <div className="text-sm text-[#1A1A1A] mb-2">
                Now that there is the Tec-9, a crappy spray gun from South
                Miami.
              </div>
              <div className="mb-2">
                <span className="line-through text-gray-400 mr-2">
                  1500 PKR
                </span>
                <span className="font-bold text-[#a31d1d] text-lg">
                  999 PKR
                </span>
              </div>
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Bottle 3 */}
          <div className="flex flex-row mr-[120px] rounded-xl p-6 w-1/8 min-w-[320px] relative">
            {/* Shadow Overlay */}
            <img
              src={YellowShadow}
              alt="Yellow Shadow"
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0"
              style={{ pointerEvents: "none" }}
            />
            <img
              src={YB}
              alt="Royal Drink Yellow"
              className="h-32 w-auto relative z-10"
            />
            <div className="flex flex-col justify-center flex-1 relative z-10">
              <div className="font-bold text-2xl text-[#1A1A1A] mb-1">
                Royal Drink
              </div>
              <div className="text-sm text-[#1A1A1A] mb-2">
                Now that there is the Tec-9, a crappy spray gun from South
                Miami.
              </div>
              <div className="mb-2">
                <span className="line-through text-gray-400 mr-2">
                  1500 PKR
                </span>
                <span className="font-bold text-[#a31d1d] text-lg">
                  999 PKR
                </span>
              </div>
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base shadow">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* bottle section ends here */}
    </div>
  );
};

export default HeaderSection;
