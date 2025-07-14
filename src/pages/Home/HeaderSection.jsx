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
import LeftOrange from "../../assets/LeftOrange.svg";
import Female from "../../assets/Female.svg";
import { SocialIcon } from 'react-social-icons';
import { FaFacebookMessenger } from 'react-icons/fa'; // From Font Awesome
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';


const HeaderSection = () => {
  // Cart count state for badge update
  const [cartCount, setCartCount] = useState(0);

  // Helper to get cart
  const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };

  // Helper to set cart
  const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Update cart count on mount and when cart changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  // Add to cart handler
  const handleAddToCart = (product) => {
    let cart = getCart();
    // Use _id for uniqueness, and store the product in the same structure as received from API
    const idx = cart.findIndex((item) => item._id === product._id);
    if (idx > -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    setCart(cart);
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    toast.success('Product added successfully');
  };

  // Product state
  const [products, setProducts] = useState([]);
  // Fetch products from API
  useEffect(() => {
    axiosInstance.get('/products/all')
      .then(res => {
        setProducts(res.data.products || []);
      })
      .catch(() => setProducts([]));
  }, []);

  // Asset mapping for product and shadow images
  const assetMap = {
    RB,
    GB,
    YB,
    RedShadow,
    GreenShadow,
    YellowShadow,
  };

  return (
    <div>
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
                left: "140px",
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
      {/* Left Orange Decorative SVG */}
      <img src={LeftOrange} alt="Left Orange" className="absolute left-0 bottom-0 w-[180px] h-auto z-0" style={{ pointerEvents: 'none' }} />
      <div className="flex items-center justify-center w-full mt-18">
        <div className="bg-white flex flex-row rounded-xl relative w-[80%] px-8 py-6 gap-6">
          {/* Render all products dynamically in a single parent div, keeping the original layout for 3 products */}
          {products.slice(0, 3).map((product, idx) => (
            <div
              key={product._id || idx}
              className={`flex flex-row rounded-xl p-6 flex-1 min-w-[320px] relative
                ${idx === 0 ? 'mr-[0px]' : ''}
                ${idx === 1 ? 'ml-[30px]' : ''}
                ${idx === 2 ? 'mr-[-50px]' : ''}
              `}
              style={{ minWidth: 320, flexBasis: 0 }}
            >
              {/* Shadow Overlay */}
              <img
                src={assetMap[product.shadowImg]}
                alt={product.shadowImg}
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 z-0"
                style={{ pointerEvents: 'none' }}
              />
              <img
                src={assetMap[product.img]}
                alt={product.name}
                className="h-60 w-auto relative z-10"
              />
              <div className="flex flex-col justify-center flex-1 relative z-10  ml-[40px] w-[80%] bg-white/90 rounded-xl py-2 px-4">
                <div className="font-black text-2xl tracking-wider text-[#1A1A1A] mb-1">
                  {product.name}
                </div>
                <div className="text-sm w-[62%] text-[#1A1A1A] mb-2">
                  {product.description}
                </div>
                <div className={`mb-2 ${idx === 2 ? 'mr-[10px]' : 'mr-[20px]'}`}>
                  <span className="line-through text-[#909090] mr-2">
                    {product.oldPrice} PKR
                  </span>
                  <span className="font-bold text-black text-lg">
                    {product.price} PKR
                  </span>
                </div>
                <button
                  className="bg-[#a31d1d] text-white rounded-full w-[60%] mr-[20px] py-2 font-semibold text-base shadow cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* bottle section ends here */}
    </div>
  );
};

export default HeaderSection;