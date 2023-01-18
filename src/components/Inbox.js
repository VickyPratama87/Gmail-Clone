import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrRefresh } from "react-icons/gr";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";

const Inbox = () => {
  return (
    <div className="sticky top-[66px]">
      <div className="w-full">
        <div className="flex items-center justify-between px-1 lg:px-4 border-b py-2 bg-white">
          {/* Left Side */}
          <div className="flex items-center gap-6 box-content">
            <div className="flex gap-1 -ml-1">
              <div className="p-1 hover:bg-gray-200 rounded-[.3rem]">
                <input type="checkbox" className="" />
              </div>
              <div className="flex items-center p-1 hover:bg-gray-200 rounded-[.3rem] duration-150 cursor-pointer">
                <RxTriangleDown className="w-4 h-4" />
              </div>
            </div>
            <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
              <GrRefresh className="w-4 h-4" />
            </div>
            <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
              <BsThreeDotsVertical className="w-4 h-4" />
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center gap-6 text-gray-500 -mr-1.5">
            <div className="p-1.5 box-border rounded-[.3rem] hover:bg-gray-200 duration-150 cursor-pointer">
              <p className="text-[12px]">1-50 of 354</p>
            </div>
            <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
              <MdNavigateBefore className="w-5 h-5" />
            </div>
            <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
              <MdNavigateNext className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
