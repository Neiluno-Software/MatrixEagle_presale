"use client";

import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { SocialIcons } from "./SocialIcons";
import HowToBuy from '../HowToBuy/HowToBuy';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <footer className="w-full mt-10 bg-transparent ">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-10 space-y-8 text-center">
        {/* Social Icons */}
        <SocialIcons />

        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-x-9 2xl:gap-x-12">
          <a
              key={t("footer.whitepaper")}
              href="/Whitepaper Matrix Eagle (Etata).pdf"
              target="_blank"
              className="cursor-pointer text-large 2xl:text-[21px] font-semibold text-[#FFEB31] hover:text-[#FFEB31]/70 transition"
            >
            {t("footer.whitepaper")}
          </a>
          <a
              key={t("footer.howToBuy")}
              onClick={handleOpen}
              target="_self"
              className="cursor-pointer text-large 2xl:text-[21px] font-semibold text-[#FFEB31] hover:text-[#FFEB31]/70 transition"
            >
            {t("footer.howToBuy")}
          </a>
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
      <HowToBuy isOpen={isOpen} onClose={handleClose}></HowToBuy>
    </footer>
  );
};
