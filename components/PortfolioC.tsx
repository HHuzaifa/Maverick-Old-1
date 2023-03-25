// import { FC } from "react";
// import Image from "next/image";
// import Button from "./Button";
// import Link from "next/link";

// const PortfolioCard: FC<{ image: string; bText: string; pLink: string }> = ({
//   image,
//   bText,
//   pLink,
// }) => {
//   return (
//     <div className="w-full h-full relative z-0">
//       <div className="max-w-md  xl:max-w-2xl xl:h-48 flex flex-col justify-center items-center">
//         <Image
//           src={image}
//           width="330"
//           height="330"
//           alt="portfolio card image"
//           className="object-cover"
//         />

//         <div className="absolute">
//           <Link href={pLink} target="_blank">
//             <Button text={bText} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioCard;

import { FC } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const PortfolioCard: FC<{ image: string; bText: string; pLink: string }> = ({
  image,
  bText,
  pLink,
}) => {
  return (
    <div className="w-full h-full relative z-0 group">
      <div className="max-w-md xl:max-w-2xl xl:h-48 flex flex-col justify-center items-center">
        <Image
          src={image}
          width="330"
          height="330"
          alt="portfolio card image"
          className="object-cover group-hover:opacity-20 transition-all"
        />

        <div className="absolute opacity-0 group-hover:opacity-100 transition-all">
          <Link href={pLink} target="_blank">
            <Button text={bText} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
