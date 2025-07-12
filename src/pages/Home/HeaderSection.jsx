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

const HeaderSection = () => {
  return (
    
    <div className="display:none">
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
        <div className="flex flex-col items-center gap-4 mr-0 md:mr-2 w-full md:w-[288px]">
          <img
            src={VideoSvg}
            alt="Video"
            className="rounded-xl object-cover"
            style={{ width: "288px", height: "378px" }}
          />

          {/* Contact Us Card */}
          <div
            className="w-full flex items-center justify-between bg-[#BE3838] rounded-full px-4 py-2 shadow"
            style={{ height: "71px", width: "288px" }}
          >
            {/* Avatar */}
            <div
              className="flex items-center justify-center bg-white rounded-full"
              style={{ width: "56px", height: "56px" }}
            >
              <img src="" alt="Avatar" className="w-12 h-12 rounded-full" />
            </div>

            {/* Text */}
            <div className="flex flex-col flex-1 ml-4">
              <span className="text-white text-xl font-semibold leading-tight">
                Contact Us
              </span>
              <span className="text-[#F3D7A5] text-base font-medium leading-tight">
                Helpdesk
              </span>
            </div>

            {/* Phone Icon */}
            <div
              className="flex items-center justify-center bg-white rounded-full"
              style={{ width: "48px", height: "48px" }}
            >
              <img src={CheckoutIcon} alt="Phone" className="w-6 h-6" />
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
              className="absolute bottom-22 right-4 bg-[#c03536] text-white font-[Poppins] rounded-full px-15 py-0 text-sm shadow border border-white relative"
              style={{ overflow: "visible" }}
            >
              {/* Top-left thick white border */}
              <div
                style={{
                  position: "absolute",
                  top: -4,
                  left: -4,
                  width: 24,
                  height: 8,
                  background: "white",
                  borderTopLeftRadius: 9999,
                  zIndex: 1,
                }}
              ></div>
              {/* Bottom-right thick white border */}
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 24,
                  height: 8,
                  background: "white",
                  borderBottomRightRadius: 9999,
                  zIndex: 1,
                }}
              ></div>
              our top-selling item's
            </div>
            <img
              src={Arrow}
              alt="Arrow"
              style={{
                top: "310px",
                left: "190px",
                // background  : 'white',
                position: "absolute",
              }}
            />
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex flex-col items-center gap-4 w-[288px]">
          {/* Stars */}
          <div className="flex flex-row gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">
                ★
              </span>
            ))}
          </div>
          {/* Comment */}
          <div className="text-white text-base text-center px-2 mb-2">
            “Atbaaq Foods is the best. Besides the many and delicious meals, the
            service is also very good, especially in the very fast delivery. I
            highly recommend Atbaaq Foods to you”.
          </div>
          {/* Avatar */}
          <div className="flex justify-center mb-2">
            <img
              src={Profile}
              alt="Customer"
              className="w-16 h-16 rounded-full border-4 border-white shadow object-cover"
            />
          </div>
          {/* Social Links */}
          <div className="flex flex-row gap-4 mt-2">
            {/* Facebook */}
            <a
              href="#"
              className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-[#1877F3] text-2xl shadow"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="#"
              className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-[#25D366] text-2xl shadow"
              title="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 11.513C2.122 6.706 6.067 2.75 10.88 2.75c2.652 0 5.146 1.037 7.022 2.915a9.825 9.825 0 012.908 6.995c-.017 4.813-3.963 8.758-8.759 8.758m8.413-17.172A11.815 11.815 0 0010.88.003C4.885.003.026 4.86 0 10.854c-.012 2.004.522 3.953 1.522 5.688L.062 23.138a1.2 1.2 0 001.473 1.473l6.604-1.548a11.822 11.822 0 005.74 1.463h.005c6.003 0 10.884-4.879 10.903-10.884a10.86 10.86 0 00-3.192-7.768" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-[#FF0000] text-2xl shadow"
              title="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 002.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Snapchat */}
            <a
              href="#"
              className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-[#FFFC00] text-2xl shadow"
              title="Snapchat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.25 3.354 9.668 8.063 11.385.59.108.808-.256.808-.57 0-.282-.01-1.03-.016-2.021-3.28.713-3.974-1.582-3.974-1.582-.537-1.364-1.312-1.728-1.312-1.728-1.073-.734.082-.719.082-.719 1.187.084 1.812 1.219 1.812 1.219 1.054 1.807 2.762 1.286 3.437.984.107-.763.413-1.286.75-1.582-2.62-.298-5.375-1.31-5.375-5.832 0-1.288.461-2.342 1.217-3.167-.122-.299-.527-1.504.116-3.137 0 0 .993-.318 3.25 1.211A11.32 11.32 0 0112 6.844c1.007.005 2.021.137 2.97.402 2.256-1.529 3.247-1.211 3.247-1.211.645 1.633.24 2.838.118 3.137.759.825 1.216 1.879 1.216 3.167 0 4.532-2.759 5.53-5.387 5.822.425.366.803 1.089.803 2.197 0 1.587-.014 2.868-.014 3.26 0 .316.216.683.814.567C20.646 21.664 24 17.247 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* Messenger */}
            <a
              href="#"
              className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-[#006AFF] text-2xl shadow"
              title="Messenger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0C5.371 0 0 4.877 0 11.5c0 3.418 1.418 6.418 3.771 8.418V24l3.457-1.898c1.471.418 3.021.648 4.771.648 6.629 0 12-4.877 12-11.5S18.629 0 12 0zm1.229 15.229l-2.604-2.771-5.021 2.771 6.229-6.646 2.604 2.771 5.021-2.771-6.229 6.646z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Rating Section Ends Here*/}
      {/* Header Sections Ends Here  */}
      
      {/* bottles Container */}

      <div className="flex justify-center mt-12">
        <div className="bg-white rounded-2xl flex flex-row gap-8 px-8 py-8 items-stretch w-full max-w-7xl">
          {/* Bottle 1 */}
          <div className="flex flex-row items-center bg-white rounded-xl p-6 w-1/3 min-w-[320px] gap-6 relative">
            {/* Shadow Overlay */}
            <img src={RedShadow} alt="Red Shadow" className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0" style={{ pointerEvents: 'none' }} />
            <img src={RB} alt="Royal Drink Red" className="h-32 w-auto relative z-10" />
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
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Bottle 2 */}
          <div className="flex flex-row items-center bg-white rounded-xl p-6 w-1/3 min-w-[320px] gap-6 relative">
            {/* Shadow Overlay */}
            <img src={GreenShadow} alt="Green Shadow" className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0" style={{ pointerEvents: 'none' }} />
            <img src={GB} alt="Royal Drink Green" className="h-32 w-auto relative z-10" />
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
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base ">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Bottle 3 */}
          <div className="flex flex-row items-center bg-white rounded-xl p-6 w-1/3 min-w-[320px] gap-6 relative">
            {/* Shadow Overlay */}
            <img src={YellowShadow} alt="Yellow Shadow" className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0" style={{ pointerEvents: 'none' }} />
            <img src={YB} alt="Royal Drink Yellow" className="h-32 w-auto relative z-10" />
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
