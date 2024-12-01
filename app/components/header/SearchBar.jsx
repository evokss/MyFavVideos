import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
