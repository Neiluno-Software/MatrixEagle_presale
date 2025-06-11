"use client";
import * as React from "react";

interface StakingCardProps {
  imageUrl: string;
  text: string;
  className?: string;
}

export const StakingCard: React.FC<StakingCardProps> = ({
  imageUrl,
  text,
  className = ""
}) => {
  return (
    <article className={`grow text-lg 2xl:text-2xl font-semibold tracking-wide  text-center text-white rounded-3xl max-md:mt-10 ${className}`}>
      <div className="flex overflow-hidden relative flex-col justify-center px-11  w-full aspect-[0.881]  rounded-3xl">
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
