import Wrapper from "./Wrapper";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-black">
      <Wrapper>
        <div className="flex justify-between items-center py-10">
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

          <div>
            <ul className="text-[#f9f9f9] font-semibold flex flex-col mr-5 xl:mr-64 xl:flex-row xl:space-x-5 text-center space-y-5">
              <li className="hover:text-[#0087ff] transition xl:mt-5">
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

          <div className="text-[#f9f9f9] text-xl flex flex-col xl:flex-row space-y-5 xl:space-x-5">
            <a
              href="https://github.com/HHuzaifa"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:mt-5"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifa-hk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/huzaifakk50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/Hooha_riddle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://huzaifa50100.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMedium />
            </a>
          </div>
        </div>
        <p className="text-[#f9f9f9] text-base font-logoSubFont">
          © 2023 Maverick. All rights reserved
        </p>
      </Wrapper>
    </footer>
  );
}
