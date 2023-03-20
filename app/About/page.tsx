"use client";
import Wrapper from "@/app/components/Wrapper";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
// Components
import Button from "@/app/components/Button";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full h-full">
      <div className="z-0 absolute -inset-4 top-40 -left-4 w-10 h-52 bg-gradient-to-r from-[#BF1690] to-[#0087ff] rounded-full blur-3xl"></div>
      <div className="z-0 absolute right-4 w-12 h-32 bg-gradient-to-r from-[#0087ff] to-[#BF1690] rounded-full blur-3xl"></div>
      <Wrapper>
        <div className="lg:flex xl:flex w-full xl:justify-center xl:items-center xl:mt-16">
          <div className="xl:mr-36">
            <img src="/hero-blob.svg" alt="hero image"></img>
          </div>

          <div className="lg:flex lg:flex-col xl:mr-20">
            <div className="flex flex-col">
              <div className="text-[#f9f9f9]">
                <h1 className="text-lg font-HeadingFont sm:text-xl md:text-2xl lg:text-lg xl:text-2xl font-bold">
                  Hi There!
                </h1>
                <h1 className="text-xl font-HeadingFont sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl">
                  I<span className="text-[#f9f9f9] font-bold">'</span>m{" "}
                  <span className="text-[#f9f9f9] font-bold">Huzaifa</span>
                  <span className="text-[#f9f9f9] font-bold">,</span>
                </h1>
                <h1 className="text-[#f9f9f9] font-HeadingFont font-bold text-xl">
                  a{" "}
                  <span className="text-2xl xl:text-3xl text-[#0087ff]">
                    Full Stack Web Developer
                  </span>
                </h1>
                <h1 className="text-[#f9f9f9] font-HeadingFont font-bold text-xl">
                  &
                </h1>
                <h1 className="text-2xl xl:text-3xl font-HeadingFont font-bold text-[#0087ff]">
                  Machine Learning Engineer
                </h1>
              </div>
            </div>

            <div className="text-[#f9f9f9] lg:text-xl lg:space-x-10 flex justify-center space-x-9 text-xl my-12 sm:text-2xl sm:space-x-12 md:text-3xl md:space-x-16 md:my-24">
              <a
                href="https://github.com/HHuzaifa"
                target="_blank"
                rel="noopener noreferrer"
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

            <div className="flex mb-20 justify-around xl:space-x-8">
              <Link href="/Portfolio">
                <Button text={"See Portfolio"} />
              </Link>
              <Link href="/ContactMe">
                <Button text={"Contact Me"} />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
