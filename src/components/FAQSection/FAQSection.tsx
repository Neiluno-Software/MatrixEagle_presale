"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FAQItem } from "./FAQItem";

export const FAQSection: React.FC = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
    {
      question: t("faq.question6"),
      answer: t("faq.answer6"),
    },
    {
      question: t("faq.question7"),
      answer: t("faq.answer7"),
    },
    {
      question: t("faq.question8"),
      answer: t("faq.answer8"),
    },
    {
      question: t("faq.question9"),
      answer: t("faq.answer9"),
    },
    {
      question: t("faq.question10"),
      answer: t("faq.answer10"),
    },
  ];

  return (
    <section className="relative w-full pt-6 sm:pt-8 2xl:pt-[200px]">
      <div className="flex relative flex-col items-center gap-6 sm:gap-10 px-4 sm:px-6 pb-6 sm:pb-14 max-w-full w-full sm:w-[1200px] 2xl:w-full mx-auto">
        {/* Header */}
        <header className="text-center text-[#FFEB31] font-bold leading-tight tracking-wide mb-6 sm:mb-3">
          <h2 className="text-2xl max-sm:leading-snug sm:text-5xl xl:text-[40px] 2xl:text-[56px] 3xl:text-[87px]">
            {t("faq.title")}
          </h2>
        </header>

        {/* FAQ List */}
        <div className="w-full sm:w-[60%] 2xl:w-[70%] flex flex-col gap-6 sm:gap-8 2xl:gap-y-[10px] 3xl:gap-y-[105px]">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
