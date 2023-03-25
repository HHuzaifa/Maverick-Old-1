"use client";
import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { BiMenu } from "react-icons/bi"

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
    <header className="w-full h-auto py-3 2xl:py-8 sticky inset-0 border-b-2 backdrop-blur-2xl z-10">
      <Wrapper>
        <div className="w-full flex justify-between items-center">


          <div className="w-full flex lg:justify-between lg:items-baseline xl:items-baseline 2xl:items-baseline">

            <div className="flex flex-col text-[#f9f9f9] lg:pr-80">
              <a href="#AboutSection">
                <div className="text-xl xl:text-4xl 2xl:text-7xl 2xl:pb-4 font-logoFont">
                  Huzaifa.
                </div>
                <div className="text-xs xl:text-xl 2xl:text-4xl font-logoSubFont mt-1">
                  Maverick
                </div>
              </a>
            </div>

            <ul className="text-[#f9f9f9] font-semibold hidden sm:hidden md:hidden lg:flex xl:text-lg 2xl:text-4xl space-x-9">
              <li className="hover:text-[#0087ff] transition">
                <a href="#AboutSection" >About</a>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <a href="#SkillsSection">Skills</a>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <a href="#PortfolioSection">Portfolio</a>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <a href="#ContactSection">Contact</a>
              </li>
            </ul>

          </div>

          {/* Mobile Nav Menu */}
          <div className="mobile-menu w-full flex justify-end items-center relative lg:hidden xl:hidden 2xl:hidden">

            <button className="mobile-menu transition-all" onClick={handleClick}>
              <BiMenu className="text-4xl text-white" />
            </button>

            {showMenu && (
            <div className="absolute top-16 right-2 ml-3 -left-40 sm:mr-16 sm:-left-64 lg:hidden xl:hidden 2xl:hidden py-14 rounded-3xl bg-[#f9f9f9] text-[#020016]">
              <ul className="max-w-full font-navLinkFont font-semibold space-y-10 text-center">
                <li className="hover:text-[#0087ff] transition">
                <a href="/">About</a>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <a href="#SkillsSection">Skills</a>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <a href="#PortfolioSection">Portfolio</a>
              </li>
              <li className="hover:text-[#0087ff] transition">
                <a href="#ContactSection">Contact</a>
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

