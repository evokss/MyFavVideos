"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContex";

import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { RiPlayListLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";

function Sidebar() {
  const { open } = useContext(MenuContext);

  return (
    <aside
      className={`bg-white rounded-r-lg overflow-hidden ${
        open ? "w-60 p-4" : "w-0"
      } lg:w-60 lg:p-4`}
    >
      <ul>
        <li className="flex justify-start items-center hover:bg-blue-100 hover:text-blue-800 rounded-lg p-2 cursor-pointer">
          <IoHomeOutline className="mr-2" />
          <Link href="/">Home</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-orange-100 hover:text-orange-800 rounded-lg p-2 cursor-pointer">
          <AiOutlineCompass className="mr-2" />
          <Link href="/">Explore</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-orange-100 hover:text-orange-800 rounded-lg p-2 cursor-pointer">
          <BsFileEarmarkPlay className="mr-2" />
          <Link href="/">Shorts</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-orange-100 hover:text-orange-800 rounded-lg p-2 cursor-pointer">
          <RiPlayListLine className="mr-2" />
          <Link href="/">Playlists</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-orange-100 hover:text-orange-800 rounded-lg p-2 cursor-pointer">
          <MdOutlineSubscriptions className="mr-2" />
          <Link href="/">Subscriptions</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-pink-100 hover:text-pink-800 rounded-lg p-2 cursor-pointer">
          <IoBulbOutline className="mr-2" />
          <Link href="/">About me</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
