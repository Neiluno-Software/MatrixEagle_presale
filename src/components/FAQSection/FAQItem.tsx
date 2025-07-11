"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="w-full  mx-auto 2xl:border-b-2 3xl:border-b-4 border-b border-[#00D962] py-4 sm:py-6 2xl:py-8">
      <button
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        className="cursor-pointer flex items-center justify-between w-full px-4 sm:px-6 2xl:px-0 text-left group"
      >
        <h3 className="text-white text-base sm:text-xl 2xl:text-[36px] 3xl:text-5xl font-medium leading-snug group-hover:text-yellow-300 transition">
          {question}
        </h3>
        <div className="w-5 h-5 sm:w-7 sm:h-7 2xl:w-10 2xl:h-10 ml-4 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110">
          <svg
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full transition-transform duration-300 ${
              isExpanded ? "rotate-45" : ""
            }`}
          >
            <path
              d="M23.75 16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75V6.75H16.25V14.25H23.75V16.75Z"
              fill="#FFEB31"
            />
          </svg>
        </div>
      </button>

      {isExpanded && answer && (
        <div className="px-4 sm:px-6 2xl:px-8 pt-3 sm:pt-4">
          <p className="text-white text-sm sm:text-base 2xl:text-xl leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </article>
  );
};
