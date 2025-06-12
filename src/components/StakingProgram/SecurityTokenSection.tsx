"use client";
import * as React from "react";
import { SecurityCard } from "./SecurityCard";
import { ProgramTitle } from "./ProgramTitle";

export const SecurityTokenSection: React.FC = () => {
  return (
    <section className="mt-10 max-md:mt-10 max-md:max-w-full  ">
      <div className="flex gap-5 max-md:flex-col  items-center">
        <div className="w-[33%] max-md:ml-0 max-md:w-full  rounded-3xl">
          <SecurityCard
            imageUrl="/security1.png"
            text="A share of company profits"
          />
        </div>
        <ProgramTitle
          title="Security Token Offering"
          colorClass="text-yellow-400"
        />

        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full  rounded-3xl">
          <SecurityCard
            imageUrl="/security2.png"
            text="A stake in the long-term growth of the platform"
            paddingClass="px-6"
          />
        </div>
      </div>
    </section>
  );
};
