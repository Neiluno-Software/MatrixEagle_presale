"use client";
import { useTranslation } from "react-i18next";

export default function TeamAndAdvisors() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t("team.members.bonner.name"),
      title: t("team.members.bonner.title"),
      image: "/teamMemberImages/CEO.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: t("team.members.hector.name"),
      title: t("team.members.hector.title"),
      image: "/teamMemberImages/coFounderImage.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: t("team.members.eder.name"),
      title: t("team.members.eder.title"),
      image: "/teamMemberImages/strategicAdvisor.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: t("team.members.jose.name"),
      title: t("team.members.jose.title"),
      image: "/teamMemberImages/foodEngineer_cropped.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: t("team.members.aryan.name"),
      title: t("team.members.aryan.title"),
      image: "/teamMemberImages/projectManagerImage.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: t("team.members.marko.name"),
      title: t("team.members.marko.title"),
      image: "/teamMemberImages/blockchainDeveloper.png",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className=" bg-transparent px-6 sm:px-10 md:px-8 lg:px-12 py-8 sm:py-16 md:py-20 2xl:pt-[141px]">
      <div className="max-w-7xl 2xl:max-w-[78%] 3xl:max-w-[88%] mx-auto">
        <h1 className="text-[#FFEB31] text-center text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[40px] 2xl:text-[56px] 3xl:text-[87px] font-bold mb-10 sm:mb-16">
          {t("team.title")}
        </h1>
        <div className="flex justify-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 md:gap-12 2xl:gap-14 xl:w-[80%] w-auto 2xl:w-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-transparent w-full">
              <div className="w-full max-w-full xl:w-[300px] 2xl:w-[488px] 3xl:w-[650px] mx-auto">
                <div className="relative mb-4 border border-[#00D962] md:border-2 2xl:border-4 bg-gradient-to-r from-[#737373]/30 to-[#000000]/70 rounded-xl sm:rounded-2xl overflow-hidden aspect-[311/286]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>

                <div className="flex justify-between items-start gap-3 sm:gap-4 mt-4 sm:mt-5">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-[#FFEB31] text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-[23px] 2xl:text-[40px] 3xl:text-[62px] font-semibold leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-white text-xs sm:text-base md:text-lg xl:text-[16px] 2xl:text-[23px] 3xl:text-[35px] font-medium leading-relaxed max-w-[240px] sm:max-w-[280px] md:max-w-full">
                      {index === 0 && member.title.includes(" at ") ? (
                        <>
                          {member.title.split(" at ")[0]}{" "}
                          <span className="text-[#FFEB31]">Matrix Eagle</span>
                        </>
                      ) : (
                        member.title
                      )}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-1 2xl:mt-5 items-center">
                    <a
                      href={member.twitter}
                      className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-[33px] 3xl:w-[43px] 2xl:h-[33px] 3xl:h-[43px] bg-[#FFEB31] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-[33px] 3xl:w-[43px] 2xl:h-[33px] 3xl:h-[43px] bg-[#FFEB31] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
