import React from "react";
import CurveBG from "../../assets/CurveBG.svg";
import model from "../../assets/model.svg";
import Tag from "../../assets/Organic Tag.svg";
import Leaf from "../../assets/Rleaf.svg";


const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <img src={CurveBG} alt="" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex flex-row items-center justify-center gap-20">
        {/* Left: Image Section */}
        <div className="relative flex-shrink-0 w-[497px] h-[746px] rounded-[48px] overflow-hidden mr-12">
          <img src={model} alt="Model" className="w-full h-full object-cover rounded-[48px]" />
          <img src={Tag} alt="Organic Tag" className="absolute top-8 left-1/2 -translate-x-1/2 w-[160px] h-[160px]" />
        </div>
        {/* Right: Text Section */}
        <div className="relative flex flex-col max-w-xl">
          <span className="text-[#E31E27] font-[Sofia] text-[18px] tracking-[0.16em] mb-2">About Us</span>
          <h1 className="font-[Poppins] font-bold text-[45px] leading-[60px] mb-4">What Makes Us Different?</h1>
          <p className="text-[18px] mb-6">
            At <b>Atbaaq Foods</b>, we believe in food that’s as real as the soil it comes from. That’s why all our juices and chutneys are:
          </p>
          <div className="flex flex-col gap-3 mb-6">
            <div className="bg-[#EAE3D3] rounded-lg px-4 py-2 w-fit text-[18px]">100% Organic</div>
            <div className="bg-[#EAE3D3] rounded-lg px-4 py-2 w-fit text-[18px]">No added preservatives or colors</div>
            <div className="bg-[#EAE3D3] rounded-lg px-4 py-2 w-fit text-[18px]">Made in small batches from handpicked fruits and vegetables</div>
          </div>
          <p className="text-[#B7AFA3] text-[18px] mb-8">From seed to shelf, we’re transparent, ethical, and deeply passionate about flavor that nourishes.</p>
          <button className="bg-[#E31E27] text-white rounded-full px-8 py-3 text-[20px] font-semibold w-fit">Checkout Organic Products</button>
          {/* Rleaf image at right end */}
          <img src={Leaf} alt="Leaf" className="absolute right-[-400px] bg-red-300 top-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;