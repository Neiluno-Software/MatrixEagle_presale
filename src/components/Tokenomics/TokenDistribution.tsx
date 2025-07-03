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
    <section className="w-full mt-10 2xl:mt-14 rounded-3xl 3xl:border-4 2xl:border-2 border border-[#00D962] bg-gradient-to-r from-[#737373]/40 to-black/40 p-6 sm:p-10 2xl:p-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {distributions.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center text-center border-r 2xl:border-r-2 3xl:border-r-4 border-[#00D962] last:border-none`}
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
