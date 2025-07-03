"use client";
import { useTranslation } from "react-i18next";

export default function VisionMissionSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-black/26 p-4 md:p-4 md:mt-8 2xl:mt-[70px] 3xl:mt-[280px] px-0 md:px-10 3xl:px-[130px] 2xl:px-[70px]">
      <div className="max-w-7xl 2xl:max-w-[100%] mx-auto">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-[51%_48%] gap-12 lg:gap-16 items-center">
          {/* Left side - Vision and Mission content */}
          <div className="bg-[url('/blurredCoin.png')] bg-no-repeat bg-contain bg-center px-4 sm:px-6 lg:px-12 2xl:px-0 py-10 sm:py-14 lg:py-20 ">
            <div className="space-y-8 2xl:space-y-[45px] 3xl:space-y-[40px]">
              {/* Our Vision Section */}
              <div className="border-2 2xl:border-2 3xl:border-4 border-[#00D962] rounded-3xl p-6 sm:p-8 lg:p-12 2xl:py-9 bg-black/30">
                <h2 className="text-[#FFEB31] text-xl lg:text-2xl 2xl:text-[40px] 3xl:text-[60px] font-bold mb-6 2xl:mb-4">
                  {t("Vision.ourVision")}
                </h2>
                <div className="space-y-1 lg:space-y-2 2xl:space-y-6 text-white text-sm lg:text-base 2xl:text-[20px] 3xl:text-[30px] leading-relaxed">
                  <p>{t("Vision.ourVisionDesc1")}</p>
                  <p>{t("Vision.ourVisionDesc2")}</p>
                </div>
              </div>

              {/* Our Mission Section */}
              <div className="border-2 2xl:border-2  3xl:border-4 border-[#00D962] rounded-3xl p-6 sm:p-8 lg:p-12 bg-black/30 2xl:pb-17">
                <h2 className="text-[#FFEB31] text-xl lg:text-2xl 2xl:text-[40px] 3xl:text-[60px] font-bold mb-6 2xl:mb-0">
                  {t("Vision.ourMission")}
                </h2>
                <div className="space-y-1 lg:space-y-2 2xl:space-y-6 text-white text-sm lg:text-base 2xl:text-[20px] 3xl:text-[30px] leading-relaxed">
                  <p>{t("Vision.ourMissionDesc1")}</p>
                  <p>{t("Vision.ourMissionDesc2")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Circular image */}
          <div className="hidden lg:flex justify-center lg:justify-end 2xl:justify-center h-full">
            <div className="relative  w-full flex justify-center">
              <div className="overflow-hidden w-full h-full 2xl:max-w-[600px] 3xl:max-w-[900px] 2xl:rounded-6xl border md:border-none 2xl:border-none border-[#00D962] md:rounded-4xl">
                <div className="h-full">
                  <img
                    src="/vissionmissionImage.png"
                    alt={t("Vision.altVisionImage")}
                    className="w-full object-contain h-[300px] sm:h-[400px] md:h-auto 2xl:h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
