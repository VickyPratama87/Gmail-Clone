import React from "react";

const SideBtn = ({ icon, title }) => {
  return (
    <div className="flex items-center text-[#5F6368] gap-x-5 space-y-1 pl-4 rounded-full hover:bg-[#deeafb] hover:text-[#001D35] duration-75 cursor-pointer">
      {icon}
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default SideBtn;
