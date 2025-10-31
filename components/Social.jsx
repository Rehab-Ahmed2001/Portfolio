import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Social() {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/rehab-khawas/",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/Rehab-Ahmed2001",
    },
    {
      icon: <HiOutlineMail />,
      path: "mailto:khawasrehab@gmail.com",
    },
  ];

  return (
    <div>
      <div className="flex gap-6">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="w-9 h-9  border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            containerStyles="flex gap-6"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
