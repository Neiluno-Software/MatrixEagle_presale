import * as React from "react";

interface TotalSupplyProps {
  totalSupply: string;
  description: string;
}

export const TotalSupply: React.FC<TotalSupplyProps> = ({
  totalSupply,
  description,
}) => {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 3xl:mt-20 text-center ">
      <h1 className="text-xl  md:text-3xl 2xl:text-[47px]  3xl:text-[76px] font-extrabold text-white mb-6">
        Total Supply:{" "}
        <span className="text-[#FFEB31]">{totalSupply}</span>
      </h1>

      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl 2xl:[24px] 3xl:text-[40px] font-medium max-w-4xl 3xl:max-w-[70%] mx-auto leading-relaxed mb-0 md:mb-8 3xl:mb-12 sm:mb-16">
        {description}
      </p>
    </header>
  );
};
