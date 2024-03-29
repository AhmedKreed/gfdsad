"use client";
import { NavLinks } from "@/constants";
import SignUp from "./buttons/SignUp";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/Logo.png";
import LogIn from "./buttons/LogIn";
import Link from "next/link";

const NavBar = () => {
  const [toggleLinks, setToggleLinks] = useState(false);
  const [toggleLink, setToggleLink] = useState("");
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
        } lg:hidden links flex-col bg-white padding-X md:gap-10 gap-6 py-10 items-start relative`}
      >
        {NavLinks.map((link) => (
          <button
            key={link.id}
            onClick={() =>
              setToggleLink((prev) => (prev === link.title ? "" : link.title))
            }
            className="text-secondary items-center  flex gap-2 font-semibold md:text-xl text-lg flex-wrap"
          >
            {link.title}
            <span
              className={`transition-all relative h-[15px] w-[10px] ${
                toggleLink === link.title ? "-rotate-90" : "rotate-90"
              }`}
            >
              <span className="w-[9.375px] h-[1px] top-[4px] right-[2.8px] absolute bg-secondary rotate-45"></span>
              <span className="w-[9.375px] h-[1px] bottom-[4px] right-[2.8px] absolute bg-secondary -rotate-45"></span>
            </span>

            <div className="w-full flex flex-col gap-5 mt-3 text-base">
              {toggleLink === link.title
                ? link.links.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      onClick={() => setToggleLinks(false)}
                    >
                      {item.title}
                    </Link>
                  ))
                : null}
            </div>
          </button>
        ))}
        <Link
          href={"/reservation"}
          className="text-secondary font-semibold"
          onClick={() => setToggleLinks(false)}
        >
          حجز ملاعب
        </Link>
        <div className="lg:hidden mt-auto flex gap-[6px]">
          <div onClick={() => setToggleLinks(false)}>
            <LogIn />
          </div>
          <div onClick={() => setToggleLinks(false)}>
            <SignUp />
          </div>
        </div>
      </ul>
      {/* DESKTOP DEVICES */}
      <div className="flex gap-6 max-lg:hidden mr-10">
        {NavLinks.map((item) => (
          <button
            onClick={() =>
              setToggleLink((prev) => (prev === item.title ? "" : item.title))
            }
            key={item.id}
            className="flex gap-2 items-center text-secondary font-semibold relative"
          >
            {item.title}
            <span
              className={`transition-all relative h-[15px] w-[10px] ${
                toggleLink === item.title ? "-rotate-90 " : "rotate-90"
              }`}
            >
              <span className="w-[9.375px] h-[1px] top-[4px] left-1/2 -translate-x-1/2 absolute bg-secondary rotate-45"></span>
              <span className="w-[9.375px] h-[1px] bottom-[4px] left-1/2 -translate-x-1/2  absolute bg-secondary -rotate-45"></span>
            </span>
            <div
              className={`${
                toggleLink === item.title ? "flex " : "hidden "
              } absolute flex-col items-start h-[150px] min-w-[300px] rounded-md bottom-[-180px] shadow-md bg-[#fcfcfd] z-20 left-[-245px] justify-start pt-4 gap-4 pr-4`}
            >
              {toggleLink === item.title
                ? item.links!.map((link) => (
                    <Link
                      key={link.title}
                      href={link.link}
                      className="hover:pr-4 transition-all"
                    >
                      {link.title}
                    </Link>
                  ))
                : null}
            </div>
          </button>
        ))}
        <Link
          href={"/reservation"}
          onClick={() => {
            setToggleLinks(false);
            setToggleLink("");
          }}
          className="text-secondary font-semibold"
        >
          حجز ملاعب
        </Link>
      </div>
      {/* MENU ICON */}
      <div
        className="lg:hidden block w-6 h-6 relative cursor-pointer transition-none"
        onClick={() => setToggleLinks(!toggleLinks)}
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
        <SignUp />
      </div>
    </nav>
  );
};

export default NavBar;
