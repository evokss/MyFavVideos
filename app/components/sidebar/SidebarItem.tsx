import React from 'react';
import Link from 'next/link';

export type HoverColor = 'gray' | 'pink';

export interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  hoverColor: HoverColor;
  margin: string;
  cursor: string;
}

const hoverClasses: Record<HoverColor, string> = {
  gray: 'hover:bg-gray-100 hover:text-gray-600',
  pink: 'hover:bg-pink-100 hover:text-pink-800',
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  hoverColor,
  margin,
  cursor,
}) => {
  const isLinkExternal = href.startsWith('https');

  return (
    <li
      className={`flex justify-start items-center ${hoverClasses[hoverColor]} rounded-lg p-2`}
      role="listitem"
    >
      {icon}
      {isLinkExternal ? (
        <a
          href={href}
          className={`${margin} ${cursor}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {label}
        </a>
      ) : (
        <Link href={href} className={`${margin} ${cursor}`} aria-label={label}>
          {label}
        </Link>
      )}
    </li>
  );
};

SidebarItem.displayName = 'SidebarItem';

export default SidebarItem;
