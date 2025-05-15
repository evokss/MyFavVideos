"use client";

import { useMenuContext } from "@/context/MenuContext";
import { FcFilmReel } from "react-icons/fc";
import { HiOutlineBars3 } from "react-icons/hi2";

const LogoSection = () => {
  const { menu } = useMenuContext();

  return (
    <div className="flex items-center basis-1/4">
      <div className="flex p-2 pr-0 items-center">
        <button
          onClick={menu.toggleMenu}
          aria-label="Toggle navigation menu"
          className="mr-4 cursor-pointer lg:hidden"
        >
          <HiOutlineBars3 className="size-6" />
        </button>
        <FcFilmReel className="size-6" aria-hidden="true" />
      </div>
      <h1 className="text-lg font-semibold">MyFavVideos</h1>
    </div>
  );
};

export default LogoSection;
