import React from "react";
import Header from "../components/Header/Header";
import grapeImg from "../../assets/logo 1.svg"; // Placeholder image, replace with actual product images if available
import checkoutIcon from "../../assets/checkout-icon.png"; // Placeholder image, replace with actual product images if available

const cartItems = [
  {
    id: 1,
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 1000,
    oldPrice: 90.99,
    img: grapeImg,
    quantity: 1,
  },
  {
    id: 2,
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 1000,
    oldPrice: 90.99,
    img: grapeImg,
    quantity: 5,
  },
  {
    id: 3,
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 1000,
    oldPrice: 90.99,
    img: grapeImg,
    quantity: 3,
  },
  {
    id: 4,
    name: "Sweet Green Seedless Grapes 1.5-2 lb",
    price: 1000,
    oldPrice: 90.99,
    img: grapeImg,
    quantity: 5,
  },
];

const itemsTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
const deliveryFee = 200;
const subtotal = itemsTotal + deliveryFee;

const ShowOrders = () => {
  return (
    <div className="min-h-screen bg-[#f8f2de] font-[Poppins]">
      <Header />
      <div className="flex justify-center items-start py-10">
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-[1280px] px-4">
          {/* Cart Items */}
          <div className="bg-white rounded-[24px] shadow border border-[#e0d6c3] flex-1 p-6 min-w-[350px] max-w-[816px]">
            <div className="text-[15px] font-medium mb-4">Items Name</div>
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white rounded-[2px] border-b border-[#e0d6c3] py-4 px-2 last:border-b-0">
                  <div className="flex items-center gap-4 min-w-[120px]">
                    <img src={item.img} alt={item.name} className="w-12 h-12 object-contain rounded" />
                    <div>
                      <div className="font-medium text-[15px]">{item.name}</div>
                      <div className="flex items-center gap-2 text-[13px]">
                        <span className="font-bold">${item.oldPrice}</span>
                        <span className="line-through text-[#bdbdbd]">$90.99</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#f3f3f3] rounded-full px-1 py-1 w-[96px] h-[40px]">
                      <button className="w-8 h-8 rounded-full bg-white border border-[#e0d6c3] flex items-center justify-center text-lg text-[#212121]">-</button>
                      <span className="flex-1 text-center text-[18px] font-medium">{item.quantity}</span>
                      <button className="w-8 h-8 rounded-full bg-[#212121] flex items-center justify-center text-lg text-white">+</button>
                    </div>
                  </div>
                  <button className="text-[#e3262b] text-[13px] ml-2">Remove</button>
                  <div className="font-medium text-[17px] min-w-[100px] text-center">{item.price.toFixed(2)} PKR</div>
                </div>
              ))}
            </div>
          </div>
          {/* Order Summary */}
          <div className="bg-[#ecdcbf] rounded-[24px] shadow border border-[#e0d6c3] w-full h-[50%] max-w-[416px] p-8 flex flex-col gap-4">
            <div className="font-semibold text-[18px] mb-2">Order Summary</div>
            <div className="flex flex-col gap-2 ml-[12px] text-[15px]">
              <div className="flex justify-between">
                <span>Items total</span>
                <span>{itemsTotal.toFixed(2)} PKR</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>{deliveryFee.toFixed(2)} PKR</span>
              </div>
            </div>
            <div className="border-[#e0d6c3]">
              <hr className="border-[#e0d6c3]" />
            </div>
            <div className="flex justify-between font-semibold text-[16px] mt-2">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} PKR</span>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#e3262b] text-white rounded-[16px] py-3 mt-4 font-medium text-[16px]">
              <img src={checkoutIcon} alt="Checkout" className="w-6 h-6" />
              Checkout <span className="ml-2 font-bold">{subtotal.toFixed(2)} PKR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrders;
