import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
  <button className="hover:xl:text-[#81c4ff] bg-gradient-to-r from-[#0087ff] to-[#BF1690] text-[#f9f9f9] sm:text-md md:text-lg lg:text-base xl:text-xl 2xl:text-3xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-4 lg:py-3 xl:px-4 xl:py-3 rounded-full font-semibold  font-buttonFont">
      {text}
    </button>
  )
};

export default Button;
