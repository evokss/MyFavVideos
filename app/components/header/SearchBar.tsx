import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className="hidden sm:flex flex-row items-center basis-1/2">
      <div className="border border-zinc-300 rounded-l-full h-10 flex items-center flex-1">
        <input
          className="flex-grow border-0 focus:outline-none ml-4"
          placeholder="Search"
          type="text"
        />
      </div>
      <button
        className="border border-zinc-300 rounded-r-full border-l-0 h-10 cursor-default"
        type="button"
      >
        <div className="py-2 pl-3 pr-5">
          <CiSearch className="size-6" />
        </div>
      </button>
    </div>
  );
};

export default SearchBar;
