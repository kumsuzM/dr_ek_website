"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`flex flex-col self-stretch ${isActive ? "text-teal-500" : "text-black"}`}
    >
      <Link href={href} className="group hover:text-teal-500">
        {children}
        {!isActive && (
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-[3px] bg-teal-500"></span>
        )}
      </Link>
      {isActive && (
        <div className="shrink-0 bg-teal-500 h-[3px] max-md:mt-10" />
      )}
    </div>
  );
};

export default NavLink;
