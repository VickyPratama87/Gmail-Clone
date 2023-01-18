import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLabel, BiTrash } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineStarBorder, MdOutlineLabel, MdSettings, MdOutlineScheduleSend } from "react-icons/md";
import { RiPencilFill, RiInboxFill, RiSendPlane2Line, RiDraftFill, RiSpamLine } from "react-icons/ri";
import SideBtn from "./SideBtn";

const LeftSide = () => {
  const buttons = [
    {
      icon: <RiInboxFill className="w-4 h-4" />,
      title: "Inbox",
    },
    {
      icon: <MdOutlineStarBorder className="w-4 h-4" />,
      title: "Starred",
    },
    {
      icon: <IoMdTime className="w-4 h-4" />,
      title: "Snoozed",
    },
    {
      icon: <RiSendPlane2Line className="w-4 h-4" />,
      title: "Sent",
    },
    {
      icon: <RiDraftFill className="w-4 h-4" />,
      title: "Draft",
    },
    {
      icon: <BiLabel className="w-4 h-4" />,
      title: "Important",
    },
    {
      icon: <MdOutlineScheduleSend className="w-4 h-4" />,
      title: "Scheduled",
    },
    {
      icon: <RiSpamLine className="w-4 h-4" />,
      title: "Spam",
    },
    {
      icon: <BiTrash className="w-4 h-4" />,
      title: "Trash",
    },
    {
      icon: <MdOutlineLabel className="w-4 h-4" />,
      title: "Categories",
    },
    {
      icon: <MdSettings className="w-4 h-4" />,
      title: "Manage Labels",
    },
    {
      icon: <AiOutlinePlus className="w-4 h-4" />,
      title: "Create new label",
    },
  ];

  return (
    <div className="w-60 h-full hidden lg:block sticky top-20">
      <div className="flex items-center justify-center w-36 h-12 px-1 rounded-[1rem] bg-[#C2E7FF] text-[#001D35] hover:drop-shadow-lg duration-75 cursor-pointer">
        <RiPencilFill className="w-5 h-5 mr-4" />
        <p className="font-medium">Compose</p>
      </div>

      <div className="pt-3">
        {buttons.map((button) => (
          <SideBtn icon={button.icon} title={button.title} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
