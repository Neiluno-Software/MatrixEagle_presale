"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className=" relative mx-auto mt-9 mb-0 w-full px-4 sm:px-[50px]  2xl:px-2 2xl:mt-0">
      {/* Title */}
      <h1
        className="
          mt-0 mb-2 xl:mb-6 lg:mb-11 2xl:mb-10 w-full
          text-3xl xl:text-[35px]
          2xl:text-[54px] 2xl:leading-[68px]
          font-semibold
          text-left text-white
          -tracking-[5%]
          /* 3xl overrides 2xl if present */
          3xl:text-[77px]
        "
      >
        {t("hero.title")} <span className="text-[#FFEB31]">{t("hero.titleSpan")}</span>
      </h1>

      {/* Description paragraph 1 */}
      <p
        className="
          mt-0 mb-2 xl:mb-6 2xl:mb-7 leading-normal tracking-normal w-full
          text-base text-left text-white
          max-md:text-sm max-sm:text-sm
          xl:text-[18px]
          2xl:text-[29px]
          /* 3xl will override 2xl */
          3xl:text-[42px]
          font-light
          lg:mb-[44px] lg:leading-[49px]  xl:leading-[34px]
        "
      >
        {t("hero.description1")}
      </p>

      {/* Description paragraph 2 */}
      <div>
        <p
          className="
            font-light
            mt-0 mb-2 xl:mb-6 2xl:mb-6 w-full max-w-[1192px]
            text-base text-left text-white tracking-normal
            max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5
            xl:text-[18px]
            2xl:text-[29px]
            3xl:text-[42px]
            lg:mb-7 3xl:mb-8 xl:leading-[34px]
          "
        >
          {t("hero.description2")}
        </p>
      </div>

      {/* Description paragraph 3 */}
      <div>
        <p
          className="
            font-light
            mt-0 mb-7 2xl:mb-10 w-full max-w-[1192px]
            text-base text-left text-white tracking-normal
            max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5
            xl:text-[18px]
            2xl:text-[29px]
            3xl:text-[42px]
            3xl:mb-8 xl:leading-[34px]
          "
        >
          {t("hero.description3")}
        </p>
      </div>

      {/* Join call to action */}
      <div className="flex justify-start mb-7">
        <h2 className="text-xl font-bold text-[#FFEB31] xl:text-[18px] 2xl:text-[32px] 3xl:text-[51px]">
          {t("hero.joinCall")}
        </h2>
      </div>

    </section>
  );
};
