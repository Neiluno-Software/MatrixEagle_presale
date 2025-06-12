"use client";
import { TeamMember } from "./TeamMember";

export function TeamAndAdvisors() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      description: "Visionary Leader",
      imageUrl: "Blockchain.png",
    },
    {
      name: "Jane Smith",
      role: "Chief Blockchain Architect",
      description: "Blockchain Developer",
      imageUrl: "Blockchain.png",
    },
    {
      name: "Carlos Perez",
      role: "Head of Agricultural Operations",
      description: "Agriculture expert",
      imageUrl: "Blockchain.png",
    },
    {
      name: "Maria Garcia",
      role: "Chief Financial Officer",
      description: "Financial Advisor",
      imageUrl: "Blockchain.png",
    },
    {
      name: "David Lee ",
      role: "Head of Marketing",
      description: "Marketing Strategist",
      imageUrl: "Blockchain.png",
    },
    {
      name: "Sophia Chen",
      role: "Lead Legal Counsel",
      description: "Legal & Compliance Expert",
      imageUrl: "Blockchain.png",
    },
  ];
  return (
    <section className=" flex mt-40 flex-col items-center text-4xl font-medium text-amber-500 rounded-none">
      <div className=" w-full sm:w-[60%] ">
        <h1 className=" text-[#FFA100] font-bold  text-2xl lg:text-[32px] 2xl:text-[64px] w-full flex justify-center">
          Team and Advisors
        </h1>

        <div
          className="grid gap-5 mt-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-3"
        >
          {teamMembers?.map((teamMember) => (
            <>
              <TeamMember
                role={teamMember.role}
                name={teamMember.name}
                description={teamMember.description}
              />
            </>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamAndAdvisors;
