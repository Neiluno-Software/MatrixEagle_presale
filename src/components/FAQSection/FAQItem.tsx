"use client";

import React, { useState } from 'react';

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
    <article className="flex flex-col justify-center items-start  w-full max-w-6xl rounded border-b border-solid border-b-neutral-300 h-auto max-sm:h-auto max-sm:min-h-[70px]">
      <button
        className="flex relative justify-between items-center pt-5 pr-4 pb-6 pl-8 w-full h-[85px] max-sm:p-4 max-sm:h-auto max-sm:min-h-[69px] text-left"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        <h3 className="flex-1 text-lg 2xl:text-3xl tracking-normal leading-10 text-white max-md:text-2xl max-md:leading-9 max-sm:text-lg max-sm:leading-7">
          {question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="faq-icon"
            style={{ width: '30px', height: '30px' }}
          >
            <path
              d="M23.75 16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75V6.75H16.25V14.25H23.75V16.75Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <div>
      {isExpanded && answer && (
        <div className="px-8 pb-6 text-white max-sm:px-4">
          <p className="text-sm 2xltext-lg leading-6 max-md:text-base max-sm:text-sm">
            {answer}
          </p>
        </div>
      )}
      </div>
    </article>
  );
};
