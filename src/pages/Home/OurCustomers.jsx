import React, { useState } from "react";
import CurveBG from "../../assets/Background Light Color.svg";
import avatar1 from "../../assets/Male Memojis.svg";
import avatar2 from "../../assets/female.svg";
import avatar3 from "../../assets/model.svg";
import star from "../../assets/checkout-icon.svg"; // Use a star icon or any icon you prefer

const testimonials = [
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar2,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar1,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    avatar: avatar3,
    text: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day.",
  },
];

const faqs = [
  {
    question: "Is it safe?",
    answer: "Yes, it is a completely safe & FSSAI approved product.",
  },
  {
    question: "What is the role of Vitamin C in collagen synthesis?",
    answer: "Vitamin C is essential for the synthesis of collagen, a protein that helps wounds heal and maintains skin, cartilage, and bones.",
  },
  {
    question: "How much Vitamin C is needed by the body?",
    answer: "The recommended daily amount for adults is 65 to 90 milligrams (mg) a day, and the upper limit is 2,000 mg a day.",
  },
  {
    question: "How do I know that I need Vitamin C?",
    answer: "Common signs of Vitamin C deficiency include fatigue, gum inflammation, slow wound healing, and frequent infections.",
  },
  {
    question: "What symptoms indicate Vitamin C deficiency?",
    answer: "Symptoms include weakness, anemia, gum disease, and skin problems. Severe deficiency can lead to scurvy.",
  },
];

const OurCustomers = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img src={CurveBG} className="absolute inset-0 w-full z-0" alt="" />
      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-12 mt-[90px]">
        <h1 className="font-[Sofia] text-[45px] leading-[60px] text-[#212121] text-center font-normal mb-8 drop-shadow">
          What Our Customers Say About Us
        </h1>
        {/* Testimonial Cards */}
        <div className="w-full max-w-7xl mx-auto">
          {/* First row */}
          <div className="flex gap-8 justify-center mb-[-60px] z-10 relative">
            {testimonials.slice(0, 3).map((t, idx) => (
              <div
                key={idx}
                className="bg-[#fcf6e8] border border-[#e5e1d8] rounded-xl px-8 py-4 flex flex-col shadow-sm min-w-[480px] max-w-[520px] h-[180px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-[#212121] text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#fbbf24] font-bold text-sm">{t.rating}</span>
                    <img src={star} alt="star" className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-[#212121] text-sm">{t.text}</div>
              </div>
            ))}
          </div>
          {/* Second row, slightly shifted down and right */}
          <div className="flex gap-8 justify-center mt-0 translate-y-10">
            {testimonials.slice(3, 6).map((t, idx) => (
              <div
                key={idx}
                className="bg-[#fcf6e8] border border-[#e5e1d8] rounded-xl px-8 py-4 flex flex-col shadow-sm min-w-[480px] max-w-[520px] h-[180px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-[#212121] text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#fbbf24] font-bold text-sm">{t.rating}</span>
                    <img src={star} alt="star" className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-[#212121] text-sm">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className="w-full max-w-3xl mx-auto mt-20 mb-10">
          <h2 className="font-[Sofia] text-[40px] leading-[60px] text-[#212121] text-center font-normal mb-8">Want to know more?</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`bg-transparent border-b border-[#e5e1d8] ${openIdx === idx ? 'pb-4' : 'py-4'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-normal text-[#212121]">
                    <span className="font-bold">{String(idx + 1).padStart(2, '0')}.</span> {faq.question}
                  </span>
                  <button
                    className={`text-2xl ${openIdx === idx ? 'text-[#e53935]' : 'text-[#d3cdbf]'} cursor-pointer`}
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-label={openIdx === idx ? 'Collapse' : 'Expand'}
                  >
                    {openIdx === idx ? '–' : '+'}
                  </button>
                </div>
                {openIdx === idx && (
                  <div className="pl-8 pt-2 text-[#d3cdbf] text-base">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers; 