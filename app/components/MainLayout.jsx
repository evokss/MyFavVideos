import React from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { RiPlayListLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-r-lg w-60 p-4">
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
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
