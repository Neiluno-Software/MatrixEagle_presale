"use client";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "../icons/CheckCircle";

const timelineData = [
  {
    quarter: "Q1 2025",
    direction: "left",
    points: [
      "roadmap.q1.point1",
      "roadmap.q1.point2",
    ],
    image: "/roadmap/roadmap1.png",
  },
  {
    quarter: "Q2 2025",
    direction: "right",
    points: [
      "roadmap.q2.point1",
      "roadmap.q2.point2",
      "roadmap.q2.point3",
    ],
    image: "/roadmap/roadmap2.png",
  },
  {
    quarter: "Q3 2025",
    direction: "left",
    points: [
      "roadmap.q3.point1",
      "roadmap.q3.point2",
      "roadmap.q3.point3"
    ],
    image: "/roadmap/roadmap3.png",
  },
  {
    quarter: "Q4 2025",
    direction: "right",
    points: [
      "roadmap.q4.point1",
      "roadmap.q4.point2",
      "roadmap.q4.point3"
    ],
    image: "/roadmap/roadmap4.png",
  },
];

export default function RoadMap() {
  const { t } = useTranslation();

  return (
    <div className="text-white py-4 md:py-8 2xl:py-[142px] px-4">
      <div className="max-w-[95%] mx-auto">
        <h1 className="text-xl md:text-3xl xl:text-[40px] 2xl:text-[56px] 3xl:text-[87px] text-center font-bold mb-0 md:mb-8 2xl:mb-16 text-[#FFEB31]">
          {t("roadmap.title")}
        </h1>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#00D962] h-full z-0" />

          {timelineData.map((item) => (
            <div key={item.quarter} className="relative flex flex-col pt-10 md:pt-10 lg:pt-20 2xl:pt-24">
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 z-10 rounded-full border-4 border-[#00D962] bg-[#00D962] items-center justify-center">
                <div className="w-5 h-5">
                  <CheckCircle />
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden flex flex-col items-center gap-6">
                <div className="rounded-2xl overflow-hidden">
                  <img src={item.image} alt={`${item.quarter} illustration`} className="w-[250px] h-[250px] object-contain" />
                </div>
                <div className="w-[250px] text-left max-w-xs">
                  <h2 className="text-center text-lg md:text-2xl 2xl:text-2xl font-bold mb-2 text-[#FFEB31]">
                    {item.quarter}:
                  </h2>
                  <ul className="text-base space-y-1">
                    {item.points.map((point, idx) => (
                      <li key={idx}>• {t(point)}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex mt-10 md:mt-16 lg:mt-32 mb-0 relative grid-cols-3 items-center justify-between gap-2 md:gap-4 2xl:gap-8">
                {item.direction === "left" ? (
                  <>
                    <div className="left-[20px] w-[40%] justify-left items-left text-left">
                      <h2 className="text-lg md:text-xl 2xl:text-[40px] 3xl:text-[60px] font-bold mb-4 text-[#FFEB31]">
                        {item.quarter}:
                      </h2>
                      <ul className="text-sm md:text-base 2xl:text-[24px] 3xl:text-[32px] font-medium space-y-2">
                        {item.points.map((point, idx) => (
                          <li key={idx}>• {t(point)}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.quarter} illustration`}
                          className="w-[200px] 2xl:w-[300px] 3xl:w-[400px] h-[200px] 2xl:h-[300px] 3xl:h-[450px] object-contain"
                        />
                      </div>
                    </div>

                    <div className="hidden md:flex w-[40%]"> &nbsp; </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex w-[40%]"> &nbsp; </div>
                    <div className="flex justify-center items-center">
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.quarter} illustration`}
                          className="w-[200px] 2xl:w-[300px] 3xl:w-[400px] h-[200px] 2xl:h-[300px] 3xl:h-[450px] object-contain"
                        />
                      </div>
                    </div>

                    <div className="left-[20px] w-[40%] justify-left items-left text-left">
                      <div className="pl-10">
                        <h2 className="text-lg md:text-xl 2xl:text-[40px] 3xl:text-[60px] font-semibold mb-4 text-[#FFEB31]">
                          {item.quarter}:
                        </h2>
                        <ul className="text-sm md:text-base 2xl:text-[24px] 3xl:text-[32px] font-medium space-y-2">
                          {item.points.map((point, idx) => (
                            <li key={idx}>• {t(point)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          <div className="hidden md:flex relative flex-col pt-10 md:pt-10 lg:pt-20 2xl:pt-24">
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 z-10 rounded-full border-4 border-[#00D962] bg-[#00D962] items-center justify-center">
                <div className="w-5 h-5">
                  <CheckCircle />
                </div>
              </div>
          </div>
          <div className="hidden md:flex relative flex-col pt-10">&nbsp;</div>
        </div>

        {/* Description */}
        <div className="mt-6 md:mt-8 2xl:mt-[140px] flex justify-center">
          <div className="w-full max-w-4xl 2xl:max-w-[94%] text-center text-white space-y-6 text-sm md:text-base 2xl:text-[25px] 3xl:text-[35px] md:font-semibold">
            <p>{t("roadmap.description1")}</p>
            <p>{t("roadmap.description2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
