"use client";
import React from "react";
import { useTranslation } from "react-i18next";

interface DistributionItem {
  label: string;
  percentage: string;
}

interface TokenDistributionProps {
  distributions: DistributionItem[];
}

export const TokenDistribution: React.FC<TokenDistributionProps> = ({
  distributions,
}) => {
  const { t } = useTranslation();

  return (
    <section className="w-full mt-10 2xl:mt-14 rounded-3xl 3xl:border-4 2xl:border-2 border border-[#00D962] bg-gradient-to-r from-[#737373]/40 to-black/40 p-6 sm:p-10 sm:pr-6 sm:pl-6 2xl:p-14 2xl:pr-8 2xl:pl-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {distributions.map((item, index) => (
          <div
            key={index}
            className={`sm:h-[30px] 2xl:h-[40px] 3xl:h-[50px] flex items-center justify-center text-center border-r-0 sm:border-r 2xl:border-r-2 3xl:border-r-4 border-[#00D962] last:border-none`}
          >
            <div className="text-sm sm:text-base 2xl:text-2xl 3xl:text-4xl font-semibold text-white">
              {t(item.label)}:{" "}
              <span className="text-white/90 font-medium">
                {item.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
