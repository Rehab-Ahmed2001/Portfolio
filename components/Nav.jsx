"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-[#B05496] border-b-2  border-[#B05496]"
            } 
          Capitalize font-medium hover:text-[#DB58B5] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
