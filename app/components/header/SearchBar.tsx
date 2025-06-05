import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  className = '',
  disabled = false,
}) => {
  return (
    <div
      className={`hidden sm:flex flex-row items-center basis-1/2 ${className}`}
      role="search"
      aria-label="Search bar (display only)"
    >
      <div className="relative flex flex-1 items-center">
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className="h-10 w-full rounded-l-full border border-zinc-300 pl-4 pr-12 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Search input (display only)"
        />
        <div
          className="absolute right-0 h-10 rounded-r-full border border-l-0 border-zinc-300 bg-white p-2 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Search icon (decorative)"
        >
          <CiSearch className="size-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
