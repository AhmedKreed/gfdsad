"use client";
import { NavLinks } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/Logo.png";
import LogIn from "./buttons/LogIn";
import Link from "next/link";

const NavBar = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  const handleToggle = () => {
    setToggleLinks(!toggleLinks);
    const body = document.body.classList;
    toggleLinks ? body.remove("class-1") : body.add("class-1");
  };

  return (
    <nav className="flex justify-between items-center padding-X py-5 relative bg-white border-b border-b-[#E6E6E6]">
      {/* LOGO */}
      <Link href={"/"}>
        <Image
          unoptimized
          className="object-contain"
          src={logo}
          alt={"Logo"}
          width={32}
          height={32}
        />
      </Link>
      {/* MOBILE & TABLET DEVICES */}
      <ul
        className={`${
          toggleLinks ? "flex" : "hidden"
        } lg:hidden links flex-col bg-white padding-X gap-12 py-10 pb-16 items-start relative`}
      >
        {NavLinks.map((link) => (
          <Link
            onClick={() => {
              setToggleLinks(false);
            }}
            key={link.id}
            className="text-secondary items-center flex gap-2 font-semibold text-xl flex-wrap"
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
        <div className="lg:hidden mt-auto flex gap-[6px]">
          <div onClick={() => setToggleLinks(false)}>
            <LogIn />
          </div>
        </div>
      </ul>
      {/* DESKTOP DEVICES */}
      <ul className="flex gap-6 max-lg:hidden mr-10">
        {NavLinks.map((item) => (
          <Link
            key={item.id}
            className="flex gap-2 items-center text-secondary font-semibold relative"
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </ul>
      {/* MENU ICON */}
      <div
        className="lg:hidden block w-6 h-6 relative cursor-pointer transition-none"
        onClick={handleToggle}
      >
        <span
          className={`line ${
            toggleLinks ? "-rotate-[45deg] top-[11px]" : " top-[4px]"
          } `}
        ></span>
        <span
          className={`line transition-none ${
            toggleLinks ? "opacity-0 bottom-[11px]" : " bottom-[11px]"
          } `}
        ></span>
        <span
          className={`line ${
            toggleLinks ? "rotate-[45deg] top-[11px]" : " bottom-[4px]"
          } `}
        ></span>
      </div>
      <div className="max-lg:hidden mr-auto flex gap-[6px]">
        <LogIn />
      </div>
    </nav>
  );
};

export default NavBar;
