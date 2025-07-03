import * as React from "react";

interface CompanyTaglineProps {
  tagline: string;
}

export const CompanyTagline: React.FC<CompanyTaglineProps> = ({ tagline }) => {
  return (
    <footer className=" w-full sm:w-[80%] mt-[56px] 3xl:mt-[116px] 3xl:w-[71%] tracking-wider text-[#FFA100]  max-md:mt-10 max-md:max-w-full max-md:text-4xl ">
      <div className="text-lg lg:text-lg 3xl:text-[50px] ">
        {tagline}
      </div>
    </footer>
  );
};
