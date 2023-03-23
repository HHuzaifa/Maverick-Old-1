"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenu = (e:any) => {
      if (!e.target.closest(".mobile-menu")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <header className="py-3 sticky inset-0 w-full border-b-2 backdrop-blur-xl z-10">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="flex lg:items-baseline xl:items-baseline 2xl:items-baseline">
            <div className="flex flex-col text-[#f9f9f9] lg:pr-80">
              <Link href="/">
                <div className="text-xl sm:text-3xl md:text-4xl xl:text-4xl font-logoFont">
                  Huzaifa.
                </div>
                <div className="text-xs sm:text-sm md:text-lg xl:text-xl font-logoSubFont mt-1">
                  Maverick
                </div>
              </Link>
            </div>

            <ul className="text-[#f9f9f9] font-semibold hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex space-x-9 lg:ml-96 xl:ml-96 xl:pl-9">
              <li className="hover:text-[#0087ff] transition">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <Link href="/Skills">Skills</Link>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <Link href="/Portfolio">Portfolio</Link>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <Link href="/ContactMe">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Nav Menu */}
          <div className="mobile-menu flex justify-end items-center relative lg:hidden xl:hidden 2xl:hidden">
            <button className="mobile-menu" onClick={handleClick}>
              <div className="flex flex-col">
                <div className="w-5 h-1 bg-[#f9f9f9] rounded-sm"></div>
                <div className="w-5 h-1 bg-[#f9f9f9] rounded-sm my-1"></div>
                <div className="w-5 h-1 bg-[#f9f9f9] rounded-sm"></div>
              </div>
            </button>

            {showMenu && (
              <div className="absolute mt-96 lg:hidden xl:hidden 2xl:hidden">
                <ul className="px-28 py-11 md:px-52 md:text-lg font-semibold hover:text-gray-600 space-y-6 bg-gray-200 text-black font-buttonFont  text-center">
                  <li className="hover:text-[#0087ff] transition">
                    <Link href="/About">About</Link>
                  </li>
                  <li>
                    <Link href="/Skills">Skills</Link>
                  </li>
                  <li>
                    <Link href="/Portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/ContactMe">Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

