"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  let navMenu = [
    {
      name: "Learn",
      href: "/learn",
    },
    {
      name: "Developmet",
      href: "/development",
    },
    {
      name: "Pricing Plane",
      href: "/pricing",
    },
    {
      name: "Support",
      href: "/support",
    },
    {
      name: "Help",
      href: "/help",
    },
  ];
  return (
    <div className="py-7 relative bg-white text-sm">
      <div className="container mx-auto">
        <div className="flex  items-center justify-between">
          <div className="flex items-center gap-16">
            <Link href="/">
              <Image
                className="w-auto"
                alt="logo"
                src="/logo.png"
                width={50}
                height={50}
              />
            </Link>
            <ul className="hidden md:flex  items-center gap-7">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:flex hidden  items-center gap-7">
            <div className="flex items-center gap-2">
              <span className=" uppercase">EN</span>
              <AiOutlineGlobal size={24} />
            </div>
            <ul className="flex items-center gap-7">
              <li>
                <Link className="text-[#797EF6] uppercase" href="">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-[#797EF6] uppercase" href="">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`transition duration-300 mobile-menu absolute left-0 w-full bg-white transitoin transform translate-y-[65%]
          ${showMenu ? "h-auto visible" : "h-0 invisible"}
          `}
          >
            <ul className="block md:hidden px-10 py-4 items-center gap-7">
              {navMenu.map((item, index) => (
                <li className="p-2" key={index}>
                  <Link
                    className="hover:text-[#797EF6] transition duration-200"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <AiOutlineMenu
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer block md:hidden"
            size={24}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
