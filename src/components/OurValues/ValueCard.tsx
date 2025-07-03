"use client";
import * as React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  className = ""
}) => {
  return (
    <div className={`grow max-md:mt-10 max-md:max-w-full ${className}`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex-1 max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow items-start px-20 py-11 rounded-3xl border-sky-300 border-solid border-[5px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-6xl font-bold leading-none text-sky-300 max-md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-4xl font-medium tracking-wider leading-10 text-white">
              {description}
            </p>
          </section>
        </div>
        <div className="ml-5 flex-shrink-0 max-md:ml-0 max-md:w-full max-md:flex max-md:justify-center">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="object-contain shrink-0 max-w-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
