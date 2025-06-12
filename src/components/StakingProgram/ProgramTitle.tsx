"use client";
import * as React from "react";

interface ProgramTitleProps {
  title: string;
  colorClass?: string;
}

export const ProgramTitle: React.FC<ProgramTitleProps> = ({
  title,
  colorClass = "text-yellow-400"
}) => {
  return (
    <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full bg-[#171717] px-4 2xl:px-5 rounded-[20px] py-4">
      <h2 className={`self-stretch my-auto 2xl:text-[28px] font-bold tracking-wide text-center ${colorClass} `}>
        {title}
      </h2>
    </div>
  );
};
