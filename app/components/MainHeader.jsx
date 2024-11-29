import React from "react";
import Image from "next/image";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const MainHeader = () => {
  return (
    <div className="bg-white flex justify-between items-center gap-x-4 pr-4 pl-4 h-14">
      <div className="basis-1/4 flex items-center">
        <div className="p-2">
          <HiOutlineBars3 className="size-6 cursor-pointer" />
        </div>
        <h1>MyFavVideos</h1>
      </div>
      <div className="basis-2/4 w-full flex flex-row items-center">
        <div className="border border-zinc-300 rounded-l-full pl-4 h-10 flex items-center">
          <input className="border-0 focus:outline-none" placeholder="Search" />
        </div>
        <button className="border border-zinc-300 rounded-r-full border-l-0 h-10">
          <div className="py-2 pl-3 pr-5">
            <CiSearch className="size-6 cursor-pointer" />
          </div>
        </button>
      </div>
      <div className="">
        <Image
          className="rounded-2xl"
          src="/images/profile-photo.webp"
          alt="A user profile picture"
          quality={90}
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default MainHeader;
