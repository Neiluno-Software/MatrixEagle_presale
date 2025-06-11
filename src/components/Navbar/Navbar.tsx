"use client";
import * as React from "react";
import Logo from "../../../public/Logo.svg";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleConnectWallet = () =>{
    console.log('connect wallet');
  }
  return (
    <header className="relative w-full z-50 ">
      {/* Top Navbar */}
      <div className="flex justify-between items-center w-full h-[121px] md:h-auto px-4 py-3 ">
        {/* Logo & Title */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Matrix Eagle Logo"
            className="shrink-0 w-[60px] h-auto max-md:w-[40px]"
          />
          <h1 className="ml-5 text-xl 2xl:text-4xl max-md:text-2xl font-extrabold tracking-normal leading-8 text-[#F6B387] max-xl:ml-4 max-xl:text-3xl max-md:ml-2.5 ">
            Matrix Eagle
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-x-2 xl:gap-4 2xl:gap-x-8 ">
          {navLinks}
        </nav>
        {/* Connect Wallet (Always visible) */}
        <div className="hidden md:block md:ml-4">
          <button onClick={()=>handleConnectWallet()} className="text-sm 2xltext-base border-l-4 border-r-4 border-t-4 border-[#FFA100]  rounded-[14px] bg-gradient-to-r from-[#30304E] to-[#27283C] md:w-[170px] h-[45px] flex items-center justify-center cursor-pointer hover:from-[#F0B90BB2] hover:to-[#222222] transition-all duration-300">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FFA100] focus:outline-none text-3xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <>&times;</> : <>&#9776;</>}
        </button>

      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a2e] flex flex-col items-center py-4 md:hidden z-40 shadow-lg border-t border-[#FFA100]">
          {navLinks}
          <div className="md:ml-4">
          <div className="text-sm 2xltext-base border-l-4 border-r-4 border-t-4 border-[#FFA100]  rounded-[14px] bg-gradient-to-r from-[#30304E] to-[#27283C] md:w-[170px] h-[45px] flex items-center justify-center cursor-pointer hover:from-amber-600 hover:to-[#222222] transition-all duration-300">
            Connect Wallet
          </div>
        </div>
        </div>
      )}
    </header>
  );
};

// Reusable nav links
const navLinks = (
  <>
    {[
      "Dashboard",
      "Tokenomics",
      "Whitepaper",
      "Roadmap",
      "How To Buy",
      "Contact Us",
    ].map((label) => (
      <a
        key={label}
        href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-sm 2xltext-base font-bold tracking-normal leading-6 text-[#FFA100] cursor-pointer transition-colors duration-300 hover:text-[#ffb833a2] py-2 px-4"
      >
        {label}
      </a>
    ))
    
    }
    
  </>
);
