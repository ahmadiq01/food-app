import React from "react";
import CircularArrow from "../../assets/Circular Arrow.svg";
import Fruits from "../../assets/Fruits.png";
import Card1 from "../../assets/Card1.svg";
import Card2 from "../../assets/Card2.svg";
import Card3 from "../../assets/Card3.svg";


const KnowMoreFaqs = () => {
  return (
    <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center overflow-hidden py-16">
      {/* Background SVG */}
      <img
        src={CircularArrow}
        className="w-full h-auto absolute top-0 left-0 z-0"
        alt="Background Curve"
        style={{ pointerEvents: 'none' }}
      />
      {/* Overlayed Content */}
      <div className="relative z-20 flex flex-col items-center w-full">
        <h2 className="text-white font-[Sofia] text-4xl md:text-5xl font-bold mb-8 mt-8 text-center drop-shadow-lg">Why Our Foods</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full max-w-5xl mb-12 px-4">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full md:w-1/3 min-h-[220px] text-white shadow-lg border border-white/20 flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <img src={Card1} alt="Purely Organic" className="w-12 h-12 flex-shrink-0" />
              <div className="font-bold text-lg mb-1 text-left font-[Sofia]">Purely Organic, Truly Delicious</div>
            </div>
            <div className="text-sm text-left w-full">Enjoy rich flavors made from 100% organic fruits and ingredients. No chemicals, no compromises.</div>
          </div>
          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full md:w-1/3 min-h-[220px] text-white shadow-lg border border-white/20 flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <img src={Card2} alt="Healthy Treats" className="w-12 h-12 flex-shrink-0" />
              <div className="font-bold text-lg mb-1 text-left font-[Sofia]">Healthy Treats for Foodies</div>
            </div>
            <div className="text-sm text-left w-full">From juicy syrups to creamy ice creams, our foods are crafted to satisfy cravings without harming your health.</div>
          </div>
          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full md:w-1/3 min-h-[220px] text-white shadow-lg border border-white/20 flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <img src={Card3} alt="Tradition Meets Taste" className="w-12 h-12 flex-shrink-0" />
              <div className="font-bold text-lg mb-1 text-left font-[Sofia]">Tradition Meets Taste</div>
            </div>
            <div className="text-sm text-left w-full">Desi sweets, fresh juices, and fruit chutneys made with love—just like homemade, but better.</div>
          </div>
        </div>
      </div>
      {/* Fruits Image */}
      <div className="relative z-10 flex justify-center items-center w-full">
        <img
          src={Fruits}
          className="w-2/3 max-w-4xl h-auto block mx-auto"
          alt="Fruits"
        />
      </div>
    </div>
  );
};

export default KnowMoreFaqs; 