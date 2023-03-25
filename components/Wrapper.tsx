import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-full mx-5 sm:mx-10 lg:mx-12 xl:mx-16 2xl:mx-44">
      {children}
    </div>
  );
};

export default Wrapper;
