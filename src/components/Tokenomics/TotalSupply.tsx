import * as React from "react";

interface TotalSupplyProps {
  totalSupply: string;
  description: string;
}

export const TotalSupply: React.FC<TotalSupplyProps> = ({
  totalSupply,
  description
}) => {
  return (
    <header className="mt-[76px] flex flex-col self-stretch w-full text-xs sm:text-sm 2xl:text-[28px] font-semibold max-md:max-w-full">
      <h1 className="self-center text-white max-md:max-w-full">
        <span className="text-white">Total Supply:</span>{" "}
        <span className="text-xs sm:text-sm 2xl:text-[28px] text-[#FFA100]">{totalSupply}</span>
      </h1>

      <p className="mt-8 text-center text-white max-md:max-w-full">
        {description}
      </p>
    </header>
  );
};
