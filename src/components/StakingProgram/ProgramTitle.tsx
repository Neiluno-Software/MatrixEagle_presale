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
    <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <h2 className={`self-stretch my-auto text-3xl font-bold tracking-wide text-center ${colorClass} max-md:mt-10`}>
        {title}
      </h2>
    </div>
  );
};
