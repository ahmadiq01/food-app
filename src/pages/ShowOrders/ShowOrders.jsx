import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import checkoutIcon from "../../assets/checkout-icon.png";

const ShowOrders = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return;
    fetch(`http://localhost:5000/api/cart/?email=${encodeURIComponent(email)}`)
      .then(res => res.json())
      .then(data => {
        setCartItems(data.cartItems || []);
      })
      .catch(() => setCartItems([]));
  }, []);
console.log("set cart item on the order page", cartItems);
  const itemsTotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const deliveryFee = 200;
  const subtotal = itemsTotal + deliveryFee;

  return (
    <div className="min-h-screen bg-[#f8f2de] font-[Poppins]">
      <Header />
      <div className="flex justify-center items-start py-10">
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-[1280px] px-4">
          {/* Cart Items */}
          <div className="order-1 md:order-none bg-white rounded-[24px] shadow border border-[#e0d6c3] flex-1 p-6 min-w-[350px] max-w-[816px]">
            <div className="text-[15px] font-medium mb-4">Items Name</div>
            <div className="flex flex-col gap-4">
              {cartItems.map((item, idx) => (
                <div key={item._id || idx} className="flex items-center justify-between bg-white rounded-[2px] border-b border-[#e0d6c3] py-4 px-2 last:border-b-0">
                  <div className="flex items-center gap-4 min-w-[120px]">
                    <img src={item.img} alt={item.name} className="w-12 h-12 object-contain rounded" />
                    <div>
                      <div className="font-medium text-[15px]">{item.name}</div>
                      <div className="flex items-center gap-2 text-[13px]">
                        <span className="font-bold">{item.price} PKR</span>
                        <span className="line-through text-[#bdbdbd]">{item.oldPrice} PKR</span>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium text-[17px] min-w-[100px] text-center">{((item.price || 0) * (item.quantity || 1)).toFixed(2)} PKR</div>
                </div>
              ))}
              {cartItems.length === 0 && (
                <div className="text-center text-[#726c60] py-8">No items in cart.</div>
              )}
            </div>
          </div>
          {/* Order Summary - now on the right */}
          <div className="order-2 md:order-none bg-[#ecdcbf] rounded-[24px] shadow border border-[#e0d6c3] w-full h-[50%] max-w-[416px] p-8 flex flex-col gap-4 mt-8 md:mt-0">
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

