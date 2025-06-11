"use client";

import React from 'react';
import { FAQItem } from './FAQItem';

const faqData = [
  {
    question: "Is Matrix Eagle safe to use?",
    answer: "Yes, Matrix Eagle is built on blockchain technology, ensuring transparency, security, and immutability for all transactions and records."
  },
  {
    question: "How can I invest?",
    answer: "You can invest by creating an account on our platform, completing the KYC process, and participating in the STO to purchase ETATA tokens."
  },
  {
    question: "What do I get from the STO?",
    answer: "By participating in the Security Token Offering (STO), you receive ETATA tokens, which offer a share in company profits and long-term platform growth."
  },
  {
    question: "Who can join?",
    answer: "Anyone who completes the registration and KYC verification process can join Matrix Eagle, subject to local regulations."
  }
];


export const FAQSection: React.FC = () => {
  return (
    <section className="relative w-full mt-4 lg:mt-[82px]  ">
      <div className="flex relative flex-col lg:gap-10 items-center px-6 pt-0 pb-20 mx-auto my-0 max-w-full w-[1200px] max-md:px-5 max-md:pt-0 max-md:pb-16 max-sm:px-4 max-sm:pt-0 max-sm:pb-10">
        <header className="lg:mb-10 h-12 text-lg 2xl:text-3xl font-bold tracking-wide leading-10 text-center text-white w-[110px] max-md:text-3xl max-sm:mb-5 max-sm:h-auto max-sm:text-2xl">
          <h2>FAQs</h2>
        </header>

        <div className="flex flex-col 2xl:gap-y-10  h-auto w-[90%]">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
