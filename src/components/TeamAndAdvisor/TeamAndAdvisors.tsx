"use client";
import { TeamMember } from "./TeamMember";

export function TeamAndAdvisors() {
  return (
    <section className=" flex mt-7 flex-col items-center text-4xl font-medium text-amber-500 rounded-none">
      <div className=" w-full sm:w-[60%] ">
        <h1 className=" text-[#FFA100] font-bold  text-2xl lg:text-[32px] 2xl:text-3xl w-full flex justify-center">
          Team and Advisors
        </h1>

        <div className="flex flex-col md:flex-row gap-5 justify-between mt-20 max-md:mt-10 max-md:-mr-1.5 max-md:max-w-full">
          <TeamMember
            imageUrl="Blockchain.png"
            role="Blockchain developers"
          />

          <TeamMember
            imageUrl="/Tea.png"
            role="Agriculture professionals"
          />
        </div>

        <div className="flex flex-col md:flex-row  gap-5 justify-between mt-20 max-md:mt-10 max-md:-mr-1.5 max-md:max-w-full">
          <TeamMember
            imageUrl="/Broker.png"
            role="Blockchain developers"
          />

          <TeamMember
            imageUrl="/Strategist.png"
            role="Agriculture professionals"
          />
        </div>
      </div>
    </section>
  );
}

export default TeamAndAdvisors;
