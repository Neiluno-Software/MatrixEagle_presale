"use client";

import * as React from "react";
import Logo from "../../../public/matrix_eagle_logo.svg";
import LanguageSelector from "../Footer/languageSelector";
import { useTranslation } from "react-i18next";
import NavLinks from "./NavLinks";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleConnectWallet = () => console.log("connect wallet");

  return (
    <header className="relative w-full z-50 md:px-[50px] 2xl:px-[70px] 3xl:px-[128px]">
      {/* Top Navbar */}
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 xl:pt-[60px] 2xl:px-0 2xl:pt-[80px] 3xl:pt-[130px] py-3 h-[64px] sm:h-[72px] md:h-[84px] lg:h-[96px] 2xl:h-[110px]">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src={Logo}
            alt="Matrix Eagle Logo"
            className="h-[28px] sm:h-[40px] md:h-[50px] xl:h-[40px] 2xl:h-[66px] 3xl:h-[85px] object-contain min-w-[90px] md:min-w-[130px] xl:min-w-[90px] 2xl:min-w-[90px] 3xl:min-w-[150px] 2xl:max-w-[570px]"
          />
        </div>
        <div className="flex xl:space-x-[50px] 2xl:space-x-[78px] 3xl:space-x-[170px]">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-3  3xl:gap-x-10 ">
            <NavLinks />
          </nav>

          <div className="hidden lg:flex relative items-center justify-center">
            {/* Language Selector - Positioned above the button */}
            <div className="absolute xl:-top-12 2xl:-top-14 3xl:-top-20 right-0 ">
              <LanguageSelector />
            </div>

            {/* Button */}
            <div className="p-[2px] 2xl:p-1 rounded-lg bg-[radial-gradient(circle_at_top_left,_#FFFAEB,_#FFEB31)]">
              <button
                onClick={handleConnectWallet}
                className={`px-4 sm:px-5 md:px-6 border-white py-1 sm:py-2 rounded-lg text-black text-xs sm:text-sm md:text-base xl:text-[14px] 2xl:text-[18px] bg-gradient-to-br from-[#00D962] to-[#FFEB31] font-bold hover:opacity-80`}
              >
                {t("connectWallet")}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none text-2xl sm:text-3xl ml-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <>&times;</> : <>&#9776;</>}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#112a3f] flex flex-col items-center py-4 lg:hidden z-40 shadow-lg border-t border-[#FFA100] border">
          <NavLinks />
          <div className="mt-4 flex items-center">
            <LanguageSelector />
          </div>
          <div className="mt-4 px-4 w-full max-w-[220px]">
            <button
              onClick={handleConnectWallet}
              className="w-full bg-gradient-to-br from-[#000000] to-[#313030] text-white text-sm rounded-lg px-4 py-2 hover:opacity-80"
            >
              {t("connectWallet")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
