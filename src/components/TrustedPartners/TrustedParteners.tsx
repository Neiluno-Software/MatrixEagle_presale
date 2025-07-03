"use client";

import { useTranslation } from "react-i18next";

const TrustedParteners = () => {
  const { t } = useTranslation();

  const TrustedParteners = [
    "/trustedpartner1.png",
    "/trustedpartner2.png",
    "/trustedpartner3.png",
    "/trustedpartner4.png",
  ];

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 2xl:mt-30   ">
      <div className="w-full md:max-w-7xl 2xl:max-w-[78%] 3xl:max-w-[86%]">
        <div className="text-center text-[#FFEB31] font-bold tracking-wider mb-12">
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl  2xl:text-[39px] 3xl:text-6xl">
            {t("trustedPartners.titlePart1")}{" "}
            <span className="text-[#FFEB31]">{t("trustedPartners.titlePart2")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 2xl:gap-x-0">
          {TrustedParteners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-[#00D962] rounded-xl 2xl:rounded-2xl 2xl:border-2 3xl:rounded-4xl 3xl:border-4 bg-linear-to-r from-black/40 to-[#737373]/20 h-16 sm:h-20 md:h-24 2xl:h-[120px] 2xl:w-[300px] transition-all duration-300"
            >
              <img
                src={partner}
                alt={t("trustedPartners.alt", { index: index + 1 })}
                className="object-contain max-h-full max-w-[70%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedParteners;
