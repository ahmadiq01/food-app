import React from "react";
import CircularArrow from "../../assets/Circular Arrow.svg";
import Fruits from "../../assets/Fruits.png";
import Card1 from "../../assets/Card1.svg";
import Card2 from "../../assets/Card2.svg";
import Card3 from "../../assets/Card3.svg";

const OurFoods = () => {
  return (
    <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center overflow-hidden py-16">
      {/* Background SVG */}
      <img
        src={CircularArrow}
        className="w-[2100px]  rotate-[-8.47deg] h-auto absolute mb-[500px] left-1 z-0"
        alt="Background Curve"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Overlayed Content */}
      <div className="relative z-20 flex flex-col items-center w-full">
        <h2 className="text-white font-[Sofia] text-4xl md:text-5xl mb-24 mt-8 text-center drop-shadow-lg">
          Why Our Foods
        </h2>
        
        {/* Cards Container - Fixed to single row */}
        <div className="flex flex-row justify-center items-stretch gap-6 w-full max-w-[1200px] mb-16 px-4">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-[350px] h-[182px] text-white shadow-lg border border-white/20 flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <img src={Card1} alt="Purely Organic" className="w-12 h-12 flex-shrink-0" />
              <div className="text-lg text-left font-[Sofia]">
                Purely Organic, Truly Delicious
              </div>
            </div>
            <div className="text-sm text-left w-full">
              Enjoy rich flavors made from 100% organic fruits and ingredients. No chemicals, no compromises.
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-[350px] h-[182px] text-white shadow-lg border border-white/20 flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <img src={Card2} alt="Healthy Treats" className="w-12 h-12 flex-shrink-0" />
              <div className="text-lg text-left font-[Sofia]">
                Healthy Treats for Foodies
              </div>
            </div>
            <div className="text-sm text-left w-full">
              From juicy syrups to creamy ice creams, our foods are crafted to satisfy cravings without harming your health.
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-[350px] h-[182px] text-white shadow-lg border border-white/20 flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <img src={Card3} alt="Tradition Meets Taste" className="w-12 h-12 flex-shrink-0" />
              <div className=" text-lg text-left font-[Sofia]">
                Tradition Meets Taste
              </div>
            </div>
            <div className="text-sm text-left w-full">
              Desi sweets, fresh juices, and fruit chutneys made with love—just like homemade, but better.
            </div>
          </div>
        </div>
      </div>
      
      {/* Fruits Image - Fixed pixel dimensions */}
      <div className="relative z-10 flex justify-center items-center w-full">
        <img
          src={Fruits}
          className="w-[920px] h-[582px] object-cover"
          alt="Fruits"
        />
      </div>
    </div>
  );
};

export default OurFoods;