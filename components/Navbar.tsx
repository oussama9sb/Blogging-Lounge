"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { FiMenu } from "react-icons/fi";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Features", href: "/features" },
  { title: "About me", href: "/about" },
  { title: "Studio", href: "/studio" },
];

export const Navbar = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo
          title="Bloggers"
          className="text-black font-bold text-3xl uppercase"
        />
        <div className="hidden md:inline-flex items-center gap-7 text-gray-700 font-semibold ">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="hover:text-black duration-200 relative group overflow-hidden"
            >
              {item.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        <div className="md:hidden cursor-pointer relative">
          <FiMenu size={25} onClick={() => setDisplay((prev) => !prev)} />
          {display && (
            <div className="flex flex-col text-gray-700 font-semibold absolute right-0 w-[17rem]">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:text-black duration-200 relative group overflow-hidden px-2 py-1 border-b-1 last:border-none bg-zinc-100 shadow-md last:rounded-b-md"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
