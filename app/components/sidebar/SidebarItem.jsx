import React from "react";
import Link from "next/link";

const SidebarItem = ({ icon, label, href, hoverColor, margin }) => {
  const hoverClasses = {
    blue: "hover:bg-blue-100 hover:text-blue-800",
    orange: "hover:bg-orange-100 hover:text-orange-800",
    pink: "hover:bg-pink-100 hover:text-pink-800",
  };

  return (
    <li
      className={`flex justify-start items-center ${hoverClasses[hoverColor]} rounded-lg p-2 cursor-pointer`}
    >
      {icon}
      <Link href={href} className={margin}>
        {label}
      </Link>
    </li>
  );
};

export default SidebarItem;
