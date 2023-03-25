"use client"
import { FC } from "react";
import { motion } from "framer-motion";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
  <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.7}} className="transition bg-[#0087ff] hover:bg-[#003a6e] text-[#f9f9f9] md:text-sm  px-3 py-2 rounded-2xl font-semibold xl:text-lg font-buttonFont">
      {text}
    </motion.button>
  )
};

export default Button;
