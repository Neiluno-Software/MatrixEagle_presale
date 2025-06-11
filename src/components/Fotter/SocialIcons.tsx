"use client";

import React from 'react';

export const SocialIcons: React.FC = () => {
  return (
    <nav className="flex gap-6 justify-center items-center mx-auto mt-11 mb-0 h-8 w-[149px] max-sm:mx-auto max-sm:mt-5 max-sm:mb-0 max-sm:w-full">
      <a href="#" aria-label="Twitter" className="social-icon">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '20px', height: '20px', flexShrink: 0 }}
        >
          <path
            d="M18.4441 5.92613C18.4568 6.10379 18.4568 6.28148 18.4568 6.45914C18.4568 11.8779 14.3325 18.1216 6.79441 18.1216C4.47207 18.1216 2.31473 17.4489 0.5 16.2815C0.829961 16.3195 1.14719 16.3322 1.48984 16.3322C3.40605 16.3322 5.17004 15.685 6.57867 14.581C4.77664 14.5429 3.26648 13.3627 2.74617 11.7383C3 11.7764 3.25379 11.8018 3.52031 11.8018C3.88832 11.8018 4.25637 11.751 4.59898 11.6622C2.72082 11.2814 1.31215 9.63172 1.31215 7.63934V7.58859C1.85781 7.89316 2.49238 8.08352 3.16492 8.10887C2.06086 7.37281 1.33754 6.11648 1.33754 4.69516C1.33754 3.93375 1.54055 3.23578 1.8959 2.62664C3.91367 5.11395 6.94668 6.73828 10.3477 6.91598C10.2842 6.61141 10.2461 6.29418 10.2461 5.97691C10.2461 3.71801 12.0736 1.87793 14.3451 1.87793C15.5253 1.87793 16.5913 2.37285 17.34 3.17234C18.2664 2.99469 19.1547 2.65203 19.9416 2.1825C19.637 3.1343 18.9898 3.93379 18.1395 4.44137C18.9644 4.35258 19.7639 4.1241 20.4999 3.80687C19.9416 4.61902 19.2436 5.34234 18.4441 5.92613Z"
            fill="#F6B387"
          />
        </svg>
      </a>

      <a href="#" aria-label="Telegram" className="social-icon">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '20px', height: '20px', flexShrink: 0 }}
        >
          <path
            d="M19.1992 3.85159L16.5586 16.3047C16.3594 17.1836 15.8398 17.4024 15.1016 16.9883L11.0781 14.0235L9.13672 15.8906C8.92188 16.1055 8.74219 16.2852 8.32813 16.2852L8.61719 12.1875L16.0742 5.44924C16.3984 5.16018 16.0039 5.00002 15.5703 5.28909L6.35157 11.0938L2.38282 9.85159C1.51953 9.58205 1.50391 8.9883 2.5625 8.57424L18.0859 2.59377C18.8047 2.32424 19.4336 2.75393 19.1992 3.85159Z"
            fill="#F6B387"
          />
        </svg>
      </a>

      <a href="#" aria-label="Custom Platform" className="social-icon">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '20px', height: '20px', flexShrink: 0 }}
        >
          <path
            d="M3.83334 8.33301H17.1667"
            stroke="#F6B387"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.91666 3.75L15.0833 12.9167"
            stroke="#F6B387"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.91666 12.9167L15.0833 3.75"
            stroke="#F6B387"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 8.33366V1.66699"
            stroke="#F6B387"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 12.5V18.3333"
            stroke="#F6B387"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a href="#" aria-label="Medium" className="social-icon">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '20px', height: '20px', flexShrink: 0 }}
        >
          <path
            d="M6.14062 4.32031C3.02541 4.32031 0.5 6.86316 0.5 9.99963C0.5 13.1361 3.02559 15.6789 6.14062 15.6789C9.25566 15.6789 11.7812 13.1363 11.7812 9.99963C11.7812 6.86297 9.25597 4.32031 6.14062 4.32031ZM15.1484 4.653C13.5908 4.653 12.3283 7.04734 12.3283 9.99972C12.3283 12.9521 13.591 15.3466 15.1486 15.3466C16.7063 15.3466 17.969 12.9522 17.969 9.99972H17.9688C17.9688 7.0465 16.7063 4.653 15.1485 4.653H15.1484ZM19.508 5.20991C18.9603 5.20991 18.5163 7.35453 18.5163 9.99972C18.5163 12.6449 18.96 14.7895 19.508 14.7895C20.056 14.7895 20.5 12.6443 20.5 9.99963C20.5 7.35434 20.0558 5.20991 19.5081 5.20991H19.508Z"
            fill="#F6B387"
          />
        </svg>
      </a>
    </nav>
  );
};
