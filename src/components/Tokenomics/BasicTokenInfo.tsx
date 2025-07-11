"use client";
import React from "react";
import { useTranslation } from "react-i18next";

interface BasicTokenInfoProps {
  name: string;
  symbol: string;
  decimal: number;
  totalTokens: string;
}

export const BasicTokenInfo: React.FC<BasicTokenInfoProps> = ({
  name,
  symbol,
  decimal,
  totalTokens,
}) => {
  const { t } = useTranslation();

  const tokenInfo = [
    { label: t("tokenInfo.name"), value: name },
    { label: t("tokenInfo.symbol"), value: symbol },
    { label: t("tokenInfo.decimal"), value: decimal },
    { label: t("tokenInfo.tokens"), value: totalTokens },
  ];

  return (
    <section className="w-full mt-10 2xl:mt-20 rounded-3xl 3xl:border-4 2xl:border-2 border border-[#00D962] bg-gradient-to-r from-[#737373]/40 to-black/40 p-6 sm:p-10 sm:pr-6 sm:pl-6 2xl:p-14 2xl:pr-8 2xl:pl-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tokenInfo.map((item, index) => (
          <div
            key={index}
            className="sm:h-[30px] 2xl:h-[40px] 3xl:h-[50px] flex items-center justify-center text-center border-r-0 sm:border-r 2xl:border-r-2 3xl:border-r-4 border-[#00D962] last:border-none"
          >
            <div className="text-sm sm:text-base 2xl:text-2xl 3xl:text-4xl font-semibold text-white">
              {item.label}:{" "}
              <span className="text-white/90 font-medium">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
