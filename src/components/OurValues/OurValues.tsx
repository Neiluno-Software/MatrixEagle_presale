"use client";
import { useTranslation } from "react-i18next";

export default function Component() {
  const { t } = useTranslation();

  const values = [
    {
      title: t("values.staking1Title"),
      description: t("values.staking1"),
      image: "/interest1.svg",
    },
    {
      title: t("values.security1Title"),
      description: t("values.security1"),
      image: "/profit.svg",
    },
    {
      title: t("values.staking2Title"),
      description: t("values.staking2"),
      image: "/interest2.svg",
    },
    {
      title: t("values.security2Title"),
      description: t("values.security2"),
      image: "/staking.svg",
    },
  ];

  return (
    <div className="bg-black/26 pb-4 2xl:py-16 md:py-8 px-4 pt-[120px] 3xl:pt-[290px] 3xl:pb-[50px]  md:px-10 2xl:px-[70px] 3xl:px-[130px] ">
      <div className="max-w-7xl 2xl:max-w-[100%] mx-auto  ">
        <h1 className="text-xl lg:text-3xl 2xl:text-[56px] 3xl:text-[87px] font-bold text-center mb-2 md:mb-8 2xl:mb-16 text-[#FFEB31]">
          {t("values.ourValues")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-x-4 3xl:gap-x-[91px]">
          {values.map((value, index) => {
            return (
              <div key={index} className="relative p-3 2xl:p-0 2xl:w-[370px] 2xl:h-[164px] 3xl:w-[550px] 3xl:h-[252px]">
                <div className="absolute 2xl:-top-8  2xl:-right-8 3xl:-top-10 -top-1.5 3xl:-right-12 -right-1.5 bg-[#00D962]  rounded-md md:rounded-xl 3xl:rounded-4xl z-20 h-[40px] w-[40px] md:h-[45px] md:w-[45px] 2xl:h-[80px] 2xl:w-[80px] 3xl:h-[120px] 3xl:w-[120px] ">
                  <img src={value.image} alt="image" />
                </div>
                <div
                  key={index}
                  className="bg-linear-to-r from-[#737373]/38 to-black/38 border 2xl:border-2 3xl:border-4 border-[#00D962] rounded-2xl p-2 lg:p-4 2xl:p-6 3xl:p-8 h-full 2xl:min-h-[120px] flex flex-col justify-between"
                >
                  <div className="mt-1 2xl:mt-0">
                    <h2 className="text-xl lg:text-2xl 2xl:text-[34px] 3xl:text-[55px] font-bold text-[#FFEB31] mb-1 ">
                      {value.title}
                    </h2>
                    <p className="text-white  text-sm lg:text-sm 2xl:text-[22px] 3xl:text-[33px] leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
