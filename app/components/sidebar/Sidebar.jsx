import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContex";
import SidebarItem from "./SidebarItem";

import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { RiPlayListLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";

const Sidebar = () => {
  const { open } = useContext(MenuContext);

  const sidebarItems = [
    {
      icon: <IoHomeOutline />,
      label: "Home",
      href: "/",
      hoverColor: "blue",
      margin: "ml-2",
    },
    {
      icon: <AiOutlineCompass />,
      label: "Explore",
      href: "/",
      hoverColor: "orange",
      margin: "ml-2",
    },
    {
      icon: <BsFileEarmarkPlay />,
      label: "Shorts",
      href: "/",
      hoverColor: "orange",
      margin: "ml-2",
    },
    {
      icon: <RiPlayListLine />,
      label: "Playlists",
      href: "/",
      hoverColor: "orange",
      margin: "ml-2",
    },
    {
      icon: <MdOutlineSubscriptions />,
      label: "Subscriptions",
      href: "/",
      hoverColor: "orange",
      margin: "ml-2",
    },
    {
      icon: <IoBulbOutline />,
      label: "About me",
      href: "/",
      hoverColor: "pink",
      margin: "ml-2",
    },
  ];

  return (
    <aside
      className={`bg-white rounded-r-lg overflow-hidden fixed top-14 left-0 shadow-sm ${
        open ? "w-60 p-4" : "w-0 p-0"
      } lg:w-60 lg:p-4 mt-6`}
    >
      <ul>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            hoverColor={item.hoverColor}
            margin={item.margin}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
