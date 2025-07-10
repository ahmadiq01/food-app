import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta } from '@fortawesome/free-brands-svg-icons'; 
import Header from "../components/Header/Header";
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#f8f2de] font-[Poppins]">
      <Header />
      <div className="flex items-center min-h-[80vh]">
        <div className="w-full flex justify-center sm:justify-center">
          <div className="ml-0 sm:ml-16 w-full max-w-[418px] px-4">
            <h1 className="text-[28px] font-medium mb-8 text-center sm:text-left">Signup</h1>
            <div className="bg-[#ecdcbf] rounded-[24px] border border-white w-full p-6 sm:p-8 shadow mb-7">
              <form className="flex flex-col gap-4">
                <label className="text-[14px] mb-1">Email</label>
                <input id="email" type="email" placeholder="Enter your email" className="p-3 rounded-[8px] border-none bg-[#f8f2de] mb-3 placeholder:text-[#726c60] focus:outline-none" />
                <label className="text-[14px] mb-1">Password</label>
                <input type="password" placeholder="Password" className="p-3 rounded-[8px] border-none bg-[#f8f2de] mb-3 placeholder:text-[#726c60] focus:outline-none" />
                <label className="text-[14px] mb-1">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="p-3 rounded-[8px] border-none bg-[#f8f2de] mb-3 placeholder:text-[#726c60] focus:outline-none" />
                <div className="flex justify-end mb-2">
                  <a href="#" className="text-[#e3262b] text-[12px] no-underline">Forgot password?</a>
                </div>
                <button type="submit" className="bg-[#e3262b] text-white border-none rounded-[20px] py-3 font-medium text-[16px] cursor-pointer">Create Account <span className="ml-2">&rarr;</span></button>
              </form>
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
