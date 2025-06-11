import React from 'react';

interface TokenomicsHeaderProps {
  title: string;
}

export const TokenomicsHeader: React.FC<TokenomicsHeaderProps> = ({ title }) => {
  return (
    <header className="z-10 self-start mt-12 2xl:mt-[131px] ml-4 text-lg sm:text-4xl tracking-wider text-[#FFA100] max-md:max-w-full 2xl:text-[66px]">
      {title}
    </header>
  );
};
