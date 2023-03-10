import React from "react";
import { MdOutlineChatBubbleOutline, MdOutlineGroups, MdEmail } from "react-icons/md";
import { FiVideo, FiMenu } from "react-icons/fi";

import Menu from "./Menu";

const Menus = () => {
  const menus = [
    {
      icon: <FiMenu className="w-5 h-5" />,
    },
    {
      icon: <MdEmail className="w-5 h-5" />,
      title: "Mail",
    },
    {
      icon: <MdOutlineChatBubbleOutline className="w-5 h-5" />,
      title: "Chat",
    },
    {
      icon: <MdOutlineGroups className="w-5 h-5" />,
      title: "Spaces",
    },
    {
      icon: <FiVideo className="w-4 h-4" />,
      title: "Meet",
    },
  ];
  return (
    <>
      <div className="w-16 h-full flex flex-col pt-3 fixed left-0 bg-[#EAF1FB]">
        {menus.map((menu) => (
          <Menu icon={menu.icon} title={menu.title} />
        ))}
      </div>
    </>
  );
};

export default Menus;
