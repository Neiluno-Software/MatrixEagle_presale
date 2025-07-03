"use client";

import React from "react";

export const SocialIcons: React.FC = () => {
  const icons = [
    { name: "X", src: "/socialIcons/matrixXIcon.svg", alt: "X (Twitter)" },
    { name: "Telegram", src: "/socialIcons/matrixTelegramIcon.svg", alt: "Telegram" },
    { name: "LinkedIn", src: "/socialIcons/linkedinIcon.svg", alt: "LinkedIn" },
    { name: "Facebook", src: "/socialIcons/facebookIcon.svg", alt: "Facebook" },
    { name: "Instagram", src: "/socialIcons/instagramIcon1.svg", alt: "Instagram" },
  ];

  return (
    <nav className="flex gap-6 justify-center items-center mx-auto mt-11 mb-0 h-auto w-full max-sm:mt-5 max-sm:mb-0">
      <div className="flex flex-wrap justify-center items-center gap-4 2xl:gap-x-[34px] 3xl:gap-x-[70px] mb-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-12 h-12 2xl:w-[54px] 2xl:h-[54px] 3xl:w-[100px] 3xl:h-[100px]  rounded-lg flex items-center justify-center p-2"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </nav>
  );
};
