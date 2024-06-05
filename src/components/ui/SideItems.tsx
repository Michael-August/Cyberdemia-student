'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface SideItemsProps {
  img: React.ComponentType;
  link: string;
  children: ReactNode;
}

const SideItems: React.FC<SideItemsProps> = ({ img: Icon, link, children }) => {
  const pathname = usePathname();
  const isLinkActive = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <Link href={link}>
      <div
        className={`py-3 items-center  w-full hover:bg-sa-light font-bold cursor-pointer p-5 mb-2 flex gap-5 ${isLinkActive(link) ? 'bg-white text-cp-primary' : ''}`}
      >
        <span
          className={`text-white text-[20px] ${isLinkActive(link) ? 'text-cp-primary' : ''}`}
        >
          <Icon />
        </span>
        <div>{children}</div>
      </div>
    </Link>
  );
};

export default SideItems;
