"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface ContractAddressProps {
  address: string;
  copyIconSrc: string;
  warningText: string;
}

export const ContractAddress: React.FC<ContractAddressProps> = ({
  address,
  copyIconSrc,
  warningText,
}) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section className="w-full mt-10 2xl:mt-14 rounded-3xl 3xl:border-4 2xl:border-2 border border-[#00D962] bg-gradient-to-r from-[#737373]/40 to-black/40 p-6 sm:p-10 2xl:p-9 text-white text-center">
      <div className="space-y-2">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <span className="text-sm sm:text-base 2xl:text-3xl font-semibold">
            {t("contractAddress.title")}
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto max-w-full overflow-hidden">
            <span className="truncate text-xs sm:text-sm 2xl:text-2xl font-medium">
              {address}
            </span>
            {copied ? (
              <span className="text-xs sm:text-sm 2xl:text-xl text-green-400 font-medium">
                {t("contractAddress.copied")}
              </span>
            ) : (
              <img
                src={copyIconSrc}
                alt={t("contractAddress.copyAlt")}
                onClick={handleCopy}
                className="w-5 2xl:w-8 cursor-pointer hover:opacity-80 transition"
              />
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm 2xl:text-lg text-yellow-400  mx-auto">
          {t(warningText)}
        </p>
      </div>
    </section>
  );
};
