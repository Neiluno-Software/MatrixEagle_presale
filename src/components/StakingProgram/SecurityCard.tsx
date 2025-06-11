"use client";
import * as React from "react";

interface SecurityCardProps {
  imageUrl: string;
  text: string;
  paddingClass?: string;
}

export const SecurityCard: React.FC<SecurityCardProps> = ({
  imageUrl,
  text,
  paddingClass = "px-14"
}) => {
  return (
    <article className="grow text-lg 2xl:text-2xl font-semibold tracking-wide text-center text-white rounded-3xl  max-md:mt-10">
      <div className={`flex items-center justify-center overflow-hidden relative flex-col ${paddingClass} w-full rounded-3xl aspect-[0.881] `}>
        <img
          src={imageUrl}
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <p className="relative z-10">{text}</p>
      </div>
    </article>
  );
};
