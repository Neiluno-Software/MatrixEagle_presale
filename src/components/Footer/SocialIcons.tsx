"use client";

import React from "react";

export const SocialIcons: React.FC = () => {
  const socials = [
    { name: "X", img: "/socialIcons/matrixXIcon.svg", alt: "X (Twitter)", link: "https://x.com/matrixeagle01" },
    { name: "Telegram", img: "/socialIcons/matrixTelegramIcon.svg", alt: "Telegram", link: "https://t.me/+U3ztRpPw-pc5YTkx" },
    { name: "LinkedIn", img: "/socialIcons/linkedinIcon.svg", alt: "LinkedIn", link: "https://www.linkedin.com/company/matrixeagle" },
    { name: "Facebook", img: "/socialIcons/facebookIcon.svg", alt: "Facebook", link: "https://www.facebook.com/matrixeagle" },
    { name: "Instagram", img: "/socialIcons/instagramIcon1.svg", alt: "Instagram", link: "https://www.instagram.com/matrixeagle01" },
  ];

  return (
    <nav className="flex gap-6 justify-center items-center mx-auto mt-11 mb-0 h-auto w-full max-sm:mt-5 max-sm:mb-0">
      <div className="flex flex-wrap justify-center items-center gap-4 2xl:gap-x-[34px] 3xl:gap-x-[70px] mb-8">
        {socials.map((social, index) => (
          <div
            key={index}
            className="w-12 h-12 2xl:w-[54px] 2xl:h-[54px] 3xl:w-[100px] 3xl:h-[100px] rounded-lg flex items-center justify-center p-2"
          >
            <a href={social.link} target="_blank">
              <img
                src={social.img}
                alt={social.alt}
                className="w-full h-full object-contain cursor-pointer hover:scale-110"
              />
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};
