import React from "react";
import Link from "next/link";

const SidebarItem = ({ icon, label, href, hoverColor, margin }) => {
  return (
    <li
      className={`flex justify-start items-center hover:bg-${hoverColor}-100 hover:text-${hoverColor}-800 rounded-lg p-2 cursor-pointer`}
    >
      {icon}
      <Link href={href} className={margin}>
        {label}
      </Link>
    </li>
  );
};

export default SidebarItem;
