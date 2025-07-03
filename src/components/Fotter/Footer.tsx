"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { SocialIcons } from "./SocialIcons";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t("footer.whitepaper"), href: "#" },
    { label: t("footer.howToBuy"), href: "#" },
  ];

  return (
    <footer className="w-full mt-10 bg-transparent ">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-10 space-y-8 text-center">
        {/* Social Icons */}
        <SocialIcons />

        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-4 sm:gap-6 2xl:gap-x-22">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm sm:text-base lg:text-lg font-semibold text-[#FFEB31] hover:text-[#FFEB31]/70 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Disclaimer Text */}
        <div className="text-white space-y-4 text-xs sm:text-sm lg:text-base 2xl:text-[24px] max-w-4xl mx-auto leading-relaxed">
          <p>
            {t("footer.disclaimer1")} <br />
            {t("footer.disclaimer2")} <br />
            {t("footer.disclaimer3")}
          </p>
          <p className="text-[#FFEB31] font-medium 2xl:text-[20px]">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};
