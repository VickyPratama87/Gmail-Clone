import React from "react";
import logo from "../assets/logo-email.png";
import profile from "../assets/vicky.png";
import logoUnesa from "../assets/logo-unesa.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { GoPrimitiveDot, GoSettings } from "react-icons/go";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-2 px-1 lg:px-4 border-b border-gray-100 bg-slate-50 sticky top-0">
        {/* Left Section */}
        <div className="w-8 h-8 flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="" className="object-cover w-full h-full" />
          <p className="text-[25px] -ml-2 text-[#5F6368] cursor-pointer">Gmail</p>
        </div>

        {/* Input */}
        <div className="w-full pl-24">
          <div className="relative hidden md:flex items-center max-w-[30rem] mx-auto">
            <input type="search" className="w-full bg-[#EAF1FB] py-[10px] rounded-[.5rem] pl-16 outline-0" placeholder="Search in mail" />
            <div className="absolute right-0 p-2 mr-2.5 rounded-full text-[#5F6368] hover:text-[#001D35] hover:bg-[#D3E3FD] duration-150 cursor-pointer">
              <GoSettings className="w-5 h-5 -rotate-90" />
            </div>
            <div className="bg-[#deeafb] absolute left-0 p-[12px] rounded-l-[.7rem] outline-0">
              <AiOutlineSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="items-center gap-1 border px-2 py-1.5 rounded-full hidden lg:flex hover:bg-gray-200 hover:border-gray-300 hover:text-gray-800 duration-150 cursor-pointer">
            <GoPrimitiveDot className="w-6 h-6 text-[#1E8E3E]" />
            <p className="font-medium text-[14px]">Active</p>
            <RxTriangleDown className="w-4 h-4 text-[#5F6368] hidden md:flex hover:text-gray-800" />
          </div>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <IoHelpCircleOutline className="w-7 h-7 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <IoSettingsOutline className="w-6 h-6 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <CgMenuGridO className="w-6 h-6 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
          <div className="flex justify-between items-center gap-2 border p-1.5 w-36 rounded-[.5rem] hover:border-blue-200 duration-150 cursor-pointer">
            <div>
              <img src={logoUnesa} alt="" className="object-cover w-[80px]" />
            </div>
            <div className="w-9 h-9 rounded-full">
              <img src={profile} alt="" className="object-cover w-9 h-9 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
