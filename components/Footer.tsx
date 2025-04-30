import React from "react";
import { Logo } from "./Logo";
import { FaHeart } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <div>
      <div className="p-10 bg-zinc-900 text-gray-100 flex items-center justify-between">
        <Logo title="Bloggers" className="text-white tracking-wider" />
        <div className="hidden md:inline-flex gap-4 items-center">
          <BsYoutube
            size={27}
            className="cursor-pointer hover:text-gray-300 duration-200"
          />
          <BsGithub
            size={27}
            className="cursor-pointer hover:text-gray-300 duration-200"
          />
          <BsInstagram
            size={27}
            className="cursor-pointer hover:text-gray-300 duration-200"
          />
          <BsFacebook
            size={27}
            className="cursor-pointer hover:text-gray-300 duration-200"
          />
        </div>
        <p className="flex items-center justify-center text-gray-100 font-semibold">
          Made With
          <FaHeart size={14} className="mx-1" />
          By Oussama
        </p>
      </div>
    </div>
  );
};
