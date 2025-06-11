import React from 'react';

interface BasicTokenInfoProps {
  name: string;
  symbol: string;
  totalTokens: string;
}

export const BasicTokenInfo: React.FC<BasicTokenInfoProps> = ({
  name,
  symbol,
  totalTokens
}) => {
  return (
    <section className="mt-8 2xl:mt-20 py-3 w-full border border-orange-300 border-solid rounded-[29px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-x-5 max-md:flex-col  ">
        <div className="w-[68%] max-md:ml-0 max-md:w-full">
          <div className="md:py-3 max-md:flex-col flex items-center flex-wrap grow text-xs sm:text-sm 2xl:text-3xl font-bold tracking-wide text-center text-white  max-md:max-w-full">
            <div className=" flex  h-full items-center 2xl:h-[80px]   md:border-r-[4px] border-r-[#F6B387] grow shrink-0 px-16 basis-0 w-fit max-md:px-5 max-md:max-w-full">
              Name: {name}
            </div>
            <div className="md:border-r-[4px] 2xl:h-[80px] flex items-center border-r-[#F6B387] grow shrink-0 px-16  basis-0 w-fit max-md:px-5">
              Symbol: {symbol}
            </div>
          </div>
        </div>
        <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full flex items-center justify-center">
          <div className=" text-xs sm:text-sm 2xl:text-3xl font-bold tracking-wide text-center text-white ">
            Tokens: {totalTokens}
          </div>
        </div>
      </div>
    </section>
  );
};
