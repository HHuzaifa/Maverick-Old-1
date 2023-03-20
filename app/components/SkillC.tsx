import { FC } from "react";
import Image from "next/image";

const Skill: FC<{ image: string }> = ({ image }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-12 xl:w-16 xl:h-16">
        <Image src={image} width="512" height="512" alt="skill icon" />
      </div>
    </div>
  );
};

export default Skill;
