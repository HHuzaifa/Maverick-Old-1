import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
  <button className="transition bg-[#0087ff] hover:bg-[#003a6e] text-[#f9f9f9] md:text-sm xl:text-lg px-3 py-2 rounded-2xl font-semibold  font-buttonFont">
      {text}
    </button>
  )
};

export default Button;
