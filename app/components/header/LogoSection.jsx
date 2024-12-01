"use client";

import { MenuContext } from "@/context/MenuContex";
import React, { useContext } from "react";
import { FcFilmReel } from "react-icons/fc";
import { HiOutlineBars3 } from "react-icons/hi2";

const LogoSection = () => {
  const { menu } = useContext(MenuContext);

  return (
    <div className="flex items-center basis-1/4">
      <div className="flex p-2 pr-0">
        <HiOutlineBars3
          onClick={menu.toggleMenu}
          className="size-6 mr-4 cursor-pointer lg:hidden"
        />
        <FcFilmReel className="size-6 lg:flex-1" />
      </div>
      <h1>MyFavVideos</h1>
    </div>
  );
};

export default LogoSection;
