import React from "react";
import Link from "next/link";

const SidebarItem = ({ icon, label, href, hoverColor, margin, cursor }) => {
  const hoverClasses = {
    gray: "hover:bg-gray-100 hover:text-gray-600",
    pink: "hover:bg-pink-100 hover:text-pink-800",
  };
  const isLinkExternal = href.startsWith("https");

  return (
    <li
      className={`flex justify-start items-center ${hoverClasses[hoverColor]} rounded-lg p-2`}
    >
      {icon}
      {isLinkExternal ? (
        <a
          href={href}
          className={`${margin} ${cursor}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <Link href={href} className={`${margin} ${cursor}`}>
          {label}
        </Link>
      )}
    </li>
  );
};

export default SidebarItem;
