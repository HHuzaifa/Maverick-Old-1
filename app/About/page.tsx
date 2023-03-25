"use client";

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

// Components
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const handleType = (count: number) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section id="AboutSection" className="w-full max-h-fit">
      <div className="z-0 absolute -inset-4 top-40 -left-4 w-10 h-52 bg-gradient-to-r from-[#BF1690] to-[#0087ff] rounded-full blur-3xl"></div>
      <div className="z-0 absolute right-4 w-12 h-32 bg-gradient-to-r from-[#0087ff] to-[#BF1690] rounded-full blur-3xl"></div>
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center">
          <div className="w-full xl:-mr-16">
            <Image
              src="/hero-blob.svg"
              width="650"
              height="650"
              alt="Hero Image"
              className="lg:order-last md:order-last my-10 lg:-mr-16"
            />
          </div>

          <div className="w-full lg:flex md:order-first lg:order-first lg:flex-col">
            <div className="flex flex-col">
              <div className="w-full h-auto text-[#f9f9f9]">
                <h1 className="text-base md:text-base lg:text-2xl xl:text-3xl 2xl:text-6xl font-HeadingFont font-bold -mt-28 md:mt-8 xl:mt-20">
                  Hi There!
                </h1>
                <div className="my-10 md:my-5 lg:my-7 xl:my-10">
                  <h1 className="text-xl font-HeadingFont md:text-lg lg:text-3xl xl:text-4xl 2xl:text-7xl">
                    I<span className="text-[#f9f9f9] font-bold">&apos;</span>m{" "}
                    <span className="text-[#f9f9f9] font-bold">Huzaifa</span>
                    <span className="text-[#f9f9f9] font-bold">,</span>
                  </h1>
                  <h1 className="text-[#f9f9f9] font-HeadingFont font-extrabold md:text-lg lg:text-2xl xl:text-3xl text-xl 2xl:text-6xl">
                    a{" "}
                    <span className="text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl text-[#0087ff]">
                      <Typewriter
                        words={[
                          " Full Stack Web App Developer",
                          " Machine Learning Engineer",
                        ]}
                        loop={10}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={20}
                        delaySpeed={2500}
                        onLoopDone={handleDone}
                        onType={handleType}
                      />
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="text-[#f9f9f9]  flex justify-around xl:justify-start md:justify-start lg:justify-start text-2xl md:text-xl lg:text-3xl mb-10 md:mb-5 md:space-x-7 lg:space-x-5 xl:space-x-7">
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.7 }}
                href="https://github.com/HHuzaifa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.7 }}
                href="https://www.linkedin.com/in/huzaifa-hk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.7 }}
                href="https://www.facebook.com/huzaifakk50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.7 }}
                href="https://twitter.com/Hooha_riddle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.7 }}
                href="https://huzaifa50100.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsMedium />
              </motion.a>
            </div>

            <div className="flex mb-20 justify-around xl:justify-start md:justify-start lg:justify-start xl:space-x-10 md:space-x-6 lg:space-x-10">
              <a href="#PortfolioSection">
                <Button text={"See Portfolio"} />
              </a>
              <a href="#ContactSection">
                <Button text={"Contact Me"} />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
