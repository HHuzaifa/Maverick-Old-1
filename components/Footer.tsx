import Wrapper from "./Wrapper";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-black">
      <Wrapper>
        <div className="flex justify-between items-center py-10">
          <div className="flex flex-col text-[#f9f9f9] lg:pr-80">
            <a  href="#AboutSection">
              <div className="text-xl sm:text-3xl md:text-4xl xl:text-4xl font-logoFont">
                Huzaifa.
              </div>
              <div className="text-xs sm:text-sm md:text-lg xl:text-xl font-logoSubFont mt-1">
                Maverick
              </div>
            </a>
          </div>

          

          <div className="text-[#f9f9f9] text-xl flex space-x-3 xl:space-x-5">
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
        </div>
        <p className="text-[#f9f9f9] text-base font-logoSubFont">
          © 2023 Maverick. All rights reserved
        </p>
      </Wrapper>
    </footer>
  );
}
