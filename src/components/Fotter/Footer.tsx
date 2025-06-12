"use client";

import React from "react";
import { SocialIcons } from "./SocialIcons";

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Whitepaper", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "How To Buy", href: "#" },
  ];
  return (
    <footer className="relative mt-20 w-full">
      <div className="relative w-full h-auto lg:h-[289px]">
        

        <div className="relative px-48 py-0 mx-auto my-0 w-full max-w-screen-2xl h-[285px] max-md:px-24 max-md:py-0 max-sm:px-5 max-sm:py-0">
          <hr className="mx-auto my-0 w-full h-[1px] bg-gradient-to-r from-[#030B15] via-neutral-400 to-[#030B15] border-0 max-w-[1488px]" />

          <SocialIcons />

          <nav
            className="relative mx-auto mt-6 h-[45px] flex items-center justify-center gap-6 "
          >
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-bold leading-5 tracking-normal text-[#FFA100] transition-colors hover:text-[#FFA100]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div>
            <p className=" mx-auto mt-0 md:mt-7 mb-0 text-sm tracking-normal leading-5 text-center text-white  ">
              Disclaimer: Cryptocurrency may be unregulated in your
              jurisdiction. The value of cryptocurrencies may fluctuate Profits
              may be subject to capital gains or other taxes applicable in your
              jurisdiction
            </p>

            <p className=" mx-auto mt-4 mb-0 text-sm tracking-normal leading-5 text-center text-[#FFA100] h-[19px] w-[275px] ">
              2025© Matrix Eagle | All Rights Reserved
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
