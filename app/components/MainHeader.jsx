import React from "react";
import Image from "next/image";
import { FcFilmReel } from "react-icons/fc";
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const MainHeader = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 h-14 mb-4">
      <div className="flex items-center basis-1/4">
        <div className="flex p-2 pr-0">
          <HiOutlineBars3 className="size-6 cursor-pointer" />
          <FcFilmReel className="size-6 ml-4" />
        </div>
        <h1>MyFavVideos</h1>
      </div>
      <div className="hidden sm:flex flex-row items-center basis-1/2">
        <div className="border border-zinc-300 rounded-l-full pl-4 h-10 flex items-center flex-1">
          <input className="border-0 focus:outline-none" placeholder="Search" />
        </div>
        <button className="border border-zinc-300 rounded-r-full border-l-0 h-10">
          <div className="py-2 pl-3 pr-5">
            <CiSearch className="size-6 cursor-pointer" />
          </div>
        </button>
      </div>
      <div className="basis-1/6 justify-items-end">
        <Image
          className="rounded-3xl"
          src="/images/profile-photo.webp"
          alt="A user profile picture"
          quality={95}
          width={35}
          height={35}
        />
      </div>
    </div>
  );
};

export default MainHeader;
