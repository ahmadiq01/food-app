import React from "react";
import SubHeadingSvg from "../../assets/Sub Heading.svg";
import VideoSvg from "../../assets/Video.svg";

const HeaderSection = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-start gap-8 mt-8">
        {/* Organic Image */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={SubHeadingSvg}
            alt="Sub Heading"
            className="h-10 w-auto"
          />
        </div>
        {/* Div 1 for the video and button */}
        <div className="flex flex-col items-center gap-2">
          <img src={VideoSvg} alt="Video" className="h-10 w-auto" />
          <div>button</div>
        </div>
        {/* Div 2 for the Lazzat Section */}
        <div className="flex flex-col items-center gap-2">
          <div>Lazzat</div>
          <div>in every bite</div>
          <img src={VideoSvg} alt="Video" className="h-10 w-auto" />
          <div>Our Top Selling items</div>
        </div>
        {/* Rating Section image.png */}
        <div className="flex flex-col items-center gap-2">
          <div>stars</div>
          <div>text</div>
          <img src={VideoSvg} alt="Video" className="h-10 w-auto" />
          <div>social links</div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="bg-white rounded-2xl shadow-lg flex flex-row gap-8 px-8 py-8 items-stretch w-[95%] max-w-6xl">
          {/* Bottle 1 */}
          <div className="flex flex-row items-center bg-white rounded-xl shadow-md p-6 w-1/3 min-w-[320px] gap-6">
            <img src={VideoSvg} alt="Royal Drink Red" className="h-32 w-auto" />
            <div className="flex flex-col justify-center flex-1">
              <div className="font-bold text-2xl text-[#1A1A1A] mb-1">Royal Drink</div>
              <div className="text-sm text-[#1A1A1A] mb-2">Now that there is the Tec-9, a crappy spray gun from South Miami.</div>
              <div className="mb-2">
                <span className="line-through text-gray-400 mr-2">1500 PKR</span>
                <span className="font-bold text-[#a31d1d] text-lg">999 PKR</span>
              </div>
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base shadow">Add to Cart</button>
            </div>
          </div>
          {/* Bottle 2 */}
          <div className="flex flex-row items-center bg-white rounded-xl shadow-md p-6 w-1/3 min-w-[320px] gap-6">
            <img src={VideoSvg} alt="Royal Drink Yellow" className="h-32 w-auto" />
            <div className="flex flex-col justify-center flex-1">
              <div className="font-bold text-2xl text-[#1A1A1A] mb-1">Royal Drink</div>
              <div className="text-sm text-[#1A1A1A] mb-2">Now that there is the Tec-9, a crappy spray gun from South Miami.</div>
              <div className="mb-2">
                <span className="line-through text-gray-400 mr-2">1500 PKR</span>
                <span className="font-bold text-[#a31d1d] text-lg">999 PKR</span>
              </div>
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base shadow">Add to Cart</button>
            </div>
          </div>
          {/* Bottle 3 */}
          <div className="flex flex-row items-center bg-white rounded-xl shadow-md p-6 w-1/3 min-w-[320px] gap-6">
            <img src={VideoSvg} alt="Royal Drink Green" className="h-32 w-auto" />
            <div className="flex flex-col justify-center flex-1">
              <div className="font-bold text-2xl text-[#1A1A1A] mb-1">Royal Drink</div>
              <div className="text-sm text-[#1A1A1A] mb-2">Now that there is the Tec-9, a crappy spray gun from South Miami.</div>
              <div className="mb-2">
                <span className="line-through text-gray-400 mr-2">1500 PKR</span>
                <span className="font-bold text-[#a31d1d] text-lg">999 PKR</span>
              </div>
              <button className="bg-[#a31d1d] text-white rounded-full px-8 py-2 font-semibold text-base shadow">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection; 