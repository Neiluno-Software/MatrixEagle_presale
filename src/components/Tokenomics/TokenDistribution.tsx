import React from "react";

interface DistributionItem {
  label: string;
  percentage: string;
}

interface TokenDistributionProps {
  distributions: DistributionItem[];
}

export const TokenDistribution: React.FC<TokenDistributionProps> = ({
  distributions,
}) => {
  return (
    <section className="py-3 mt-8 2xl:mt-28 w-full border border-[#F6B387] border-solid rounded-[29px] md:mt-10 ">
      <div className="flex flex-col gap-x-5 md:flex-row py-3 ">
        <div className="lg:border-r-[4px]  2xl:h-[80px] border-r-[#F6B387] md:ml-0 md:w-full flex items-center justify-center ">
          <div className=" text-xs sm:text-sm 2xl:text-3xl font-bold tracking-wide text-center text-white ">
            {distributions[0].label}: {distributions[0].percentage}
          </div>
        </div>
        <div className="lg:border-r-[4px] 2xl:h-[80px] border-r-[#F6B387] md:ml-0 md:w-full flex items-center justify-center ">
          <div className=" text-xs sm:text-sm 2xl:text-3xl font-bold tracking-wide text-center text-white ">
            {distributions[1].label}: {distributions[1].percentage}
          </div>
        </div>
        <div className="lg:border-r-[4px] 2xl:h-[80px] border-r-[#F6B387] md:ml-0 md:w-full flex items-center justify-center ">
          <div className=" text-xs sm:text-sm 2xl:text-3xl font-bold tracking-wide text-center text-white ">
            {distributions[2].label}: {distributions[2].percentage}
          </div>
        </div>

        <div className=" md:ml-0 md:w-full flex items-center justify-center ">
          <div className=" text-xs sm:text-sm 2xl:text-3xl font-bold tracking-wide text-center text-white ">
            {distributions[3].label}: {distributions[3].percentage}
          </div>
        </div>
      </div>
    </section>
  );
};
