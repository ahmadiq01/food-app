import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta } from '@fortawesome/free-brands-svg-icons'; 
import Header from "../components/Header/Header";
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../../api/axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Function to transform cart data to match API format
  const transformCartData = (cart, email) => {
    const items = cart.map(item => ({
      email: email,
      productId: item._id, // MongoDB ObjectId
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      img: `/src/assets/${item.img}.svg`, // Convert img code to full path
      shadowImg: `/src/assets/${item.shadowImg}.svg` // Convert shadowImg code to full path
    }));
    
    return { items };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
  
    console.log("🔐 Signup Attempt:", { email, password, confirmPassword });
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      console.warn("⚠️ Passwords do not match");
      return;
    }
  
    try {
      const res = await axiosInstance.post("/users/signup", {
        email,
        password,
        confirmPassword,
      });
  
      const data = res.data;
  
      console.log("✅ Server Response:", res.status, data);
  
      if ((res.status === 200 || res.status === 201) && data.token) {
        // Save JWT to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        
        // Sync cart to backend (POST local cart to /api/cart/)
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        console.log('Original cart:', cart);
        
        if (cart.length > 0) {
          // Transform cart data to match API format
          const transformedCart = transformCartData(cart, email);
          console.log('Transformed cart:', transformedCart);
          
          axiosInstance.post('http://localhost:5000/api/cart/', transformedCart)
            .then((cartRes) => {
              if (cartRes.data && cartRes.data.cart) {
                localStorage.setItem('cart', JSON.stringify(cartRes.data.cart));
                window.dispatchEvent(new Event('cartUpdated'));
              }
            })
            .catch((err) => {
              console.error('Cart sync error:', err);
            });
        }
        toast.success("Signup successful!");
        // Redirect using full reload
        setTimeout(() => {
          window.location.href = "/orders";
        }, 500);
      } else {
        const msg = data.message || "Signup failed";
        setError(msg);
        console.error("❌ Signup Failed:", msg);
        toast.error(msg);
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Network error";
      setError(msg);
      console.error("💥 Error during signup:", msg, err);
      toast.error(msg);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#f8f2de] font-[Poppins]">
      <Header />
      <div className="flex items-center min-h-[80vh]">
        <div className="w-full flex justify-center sm:justify-center">
          <div className="ml-0 sm:ml-16 w-full max-w-[418px] px-4">
            <h1 className="text-[28px] font-medium mb-8 text-center sm:text-left">Signup</h1>
            <div className="bg-[#ecdcbf] rounded-[24px] border border-white w-full p-6 sm:p-8 shadow mb-7">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="text-[14px] mb-1">Email</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" className="p-3 rounded-[8px] border-none bg-[#f8f2de] mb-3 placeholder:text-[#726c60] focus:outline-none" />
                <label className="text-[14px] mb-1">Password</label>
                <input name="password" type="password" placeholder="Password" className="p-3 rounded-[8px] border-none bg-[#f8f2de] mb-3 placeholder:text-[#726c60] focus:outline-none" />
                <label className="text-[14px] mb-1">Confirm Password</label>
                <input name="confirmPassword" type="password" placeholder="Confirm Password" className="p-3 rounded-[8px] border-none bg-[#f8f2de] mb-3 placeholder:text-[#726c60] focus:outline-none" />
                <div className="flex justify-end mb-2">
                  <a href="#" className="text-[#e3262b] text-[12px] no-underline">Forgot password?</a>
                </div>
                <button type="submit" className="bg-[#e3262b] text-white border-none rounded-[20px] py-3 font-medium text-[16px] cursor-pointer">Create Account <span className="ml-2">&rarr;</span></button>
              </form>
              {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
            </div>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-[#e0d6c3]" />
              <span className="mx-2 text-[#726c60] text-[14px]">Or</span>
              <hr className="flex-grow border-t border-[#e0d6c3]" />
            </div>
            <button className="w-full bg-[#ecdcbf] text-[#e3262b] border-none rounded-[20px] py-3 font-medium text-[16px] mb-4 flex items-center justify-center gap-3 cursor-pointer">
              <FontAwesomeIcon icon={faMeta} size="lg" /> Sign in with Meta
            </button>
            <button className="w-full bg-[#ecdcbf] text-black border-none rounded-[20px] py-3 font-medium text-[16px] mb-4 flex items-center justify-center gap-3 cursor-pointer">
              <FaGoogle size={22} color="#000000" /> Sign in with Google
            </button>
            <div className="text-center mt-2 text-[15px]">
              Already have an account? <a href="/login" className="text-[#e3262b] no-underline">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;