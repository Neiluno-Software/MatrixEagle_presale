"use client";
import { useTranslation } from "react-i18next";

export default function AgricultureProblemAndSolution() {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent px-4 py-10 sm:px-8 sm:py-16 2xl:py-28 ">
      <div className="px-[50px] md:px-[100px] 2xl:px-[130px] mx-auto space-y-10 sm:space-y-10 ">
        {/* Title */}
        <h1 className="text-center text-[#FFEB31] text-3xl sm:text-5xl 2xl:text-[54px] 3xl:text-7xl font-extrabold leading-tight">
          {t("agriculture.title")}
        </h1>

        {/* Subtitle */}
        <h2 className="text-center text-white text-lg sm:text-2xl 2xl:text-[32px] 3xl:text-4xl font-semibold">
          {t("agriculture.subtitle")}
        </h2>

        {/* Problems */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-x-20 mt-6 2xl:mt-8 2xl:px-[70px] px-[0px] mb-6 2xl:mb-12">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#737373]/40 to-black/40 3xl:border-4 2xl:border-2 border border-[#00D962] rounded-2xl sm:rounded-3xl p-6 sm:p-8 2xl:p-5 text-center"
            >
              <p className="text-white text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl font-medium">
                {t(`agriculture.problems.${i}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Problem */}
        <div className="bg-gradient-to-r from-[#737373]/40 to-black/40 3xl:border-4 2xl:border-2 border border-[#00D962] rounded-2xl sm:rounded-3xl p-6 sm:p-8 2xl:p-9 text-center 2xl:mx-[70px]">
          <p className="text-white text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl font-medium">
            {t("agriculture.problems.2")}
          </p>
        </div>

        {/* Solution Title */}
        <h2 className="text-center text-[#FFEB31] text-2xl sm:text-4xl 2xl:text-[50px] 3xl:text-6xl font-extrabold">
          {t("agriculture.solution.title")}
        </h2>

        {/* Solution Subtitle */}
        <div className="flex justify-center">

        <h3 className="text-center text-white text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl font-medium 2xl:w-[60%]">
          {t("agriculture.solution.subtitle")}
        </h3>
        </div>

        {/* Solution Highlight */}
        <h3 className="text-center text-[#FFEB31] text-xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold mt-10">
          {t("agriculture.solution.highlight")}
        </h3>

        {/* Solution Points */}
        <div className="space-y-6 2xl:space-y-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#737373]/40 to-black/40 3xl:border-4 2xl:border-2 border border-[#00D962] rounded-2xl sm:rounded-3xl p-6 sm:p-8 2xl:p-9 text-center 2xl:mx-[70px]"
            >
              <p className="text-white text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl font-medium">
                {t(`agriculture.solution.points.${i}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="flex justify-center 2xl:px-[130px]">

        <p className="text-center text-[#FFEB31] text-lg sm:text-2xl 2xl:text-[34px] 3xl:text-4xl font-semibold leading-relaxed mt-10 2xl:mt-16 ">
          {t("agriculture.closing")}
        </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 2xl:mt-20">
          <button className="bg-[#00D962] hover:bg-[#00D962]/80 text-black font-bold text-base sm:text-lg 2xl:text-[26px] 3xl:text-3xl px-6 sm:px-10 py-3 sm:py-4 rounded-xl transition duration-200 3xl:border-4 2xl:border-2 border border-[#FFEB31]">
            {t("agriculture.cta")}
          </button>
        </div>
      </div>
    </div>
  );
}
