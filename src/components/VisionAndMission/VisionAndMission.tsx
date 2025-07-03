"use client";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="px-2 md:px-4 3xl:px-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Row 1 - Our Mission */}
        <div className="md:col-span-1 md:order-1">
          <img
            src="/vision.png"
            alt={t("Vision.altMissionImage")}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-1 md:order-2 flex items-center">
          <div className="flex flex-col pt-3 gap-y-3 3xl:pt-8 3xl:gap-y-8 h-full text-center">
            <h2 className="text-xl 3xl:text-[28px] font-bold text-[#FFA100]">
              {t("Vision.ourMission")}
            </h2>
            <p className="text-sm lg:text-lg">
              {t("Vision.ourMissionDesc")}
            </p>
          </div>
        </div>

        {/* Row 2 - Our Vision */}
        <div className="md:order-3 flex">
          <div className="md:col-span-1 md:order-2 flex">
            <div className="text-center flex flex-col pt-3 gap-y-3 3xl:pt-8 3xl:gap-y-8">
              <h2 className="text-xl 3xl:text-[28px] font-bold text-[#FFA100]">
                {t("Vision.ourVision")}
              </h2>
              <p className="text-sm lg:text-lg">
                {t("Vision.ourVisionDesc1")}
              </p>
              <p className="text-lg">
                {t("Vision.ourVisionDesc2")}
              </p>
            </div>
          </div>
        </div>
        <div className="md:order-4">
          <img
            src="/mission.png"
            alt={t("Vision.altVisionImage")}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
