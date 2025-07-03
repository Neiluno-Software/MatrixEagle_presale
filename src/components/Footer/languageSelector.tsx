"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const languages = [
  {
    code: "en",
    label: "English",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    code: "fr",
    label: "Français",
    flag: "https://flagcdn.com/fr.svg",
  },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="h-full relative text-left mt-2 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 pl-3 pr-8 py-1 bg-gradient-to-r from-[#1C1C2E] to-[#2A2B3E] border border-gray-600 rounded-md text-white "
      >
        <img src={selected.flag} alt={selected.label} className="w-5 h-5" />
        <span className="text-sm 2xl:text-[20px] 3xl:text-[26px] font-bold ">
          {selected.label}
        </span>
        <div className="w-[20px] h-[20px] 3xl:w-[40px] 3xl:h-[40px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[100%} h-[100%] ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {open && (
        <div className="absolute top-full mb-2 w-full z-[100] rounded-md shadow-lg bg-[#1C1C2E] border border-gray-700">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                switchLanguage(lang.code);
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#33344A] text-white text-sm 2xl:text-[20px] 3xl:text-[26px] font-bold "
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
