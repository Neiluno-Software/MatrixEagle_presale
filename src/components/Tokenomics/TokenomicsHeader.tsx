import React from 'react';

interface TokenomicsHeaderProps {
  title: string;
}

export const TokenomicsHeader: React.FC<TokenomicsHeaderProps> = ({ title }) => {
  return (
  <header className="z-10 self-start mt-4 md:mt-8 2xl:mt-[131px] ml-4 text-lg sm:text-4xl tracking-wider text-[#FFEB31] text-center max-md:max-w-full 2xl:text-[56px] 3xl:text-[87px] font-bold">
      {title}
    </header>
  );
};
