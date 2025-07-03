"use client";
import * as React from "react";

interface PriceDisplayProps {
  usdRaised: string;
  tokensSold: string;
  currentPrice: string;
  nextPrice: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  usdRaised,
  tokensSold,
  currentPrice,
  nextPrice
}) => {
  return (
    <section className="relative">
      <p className="relative self-center mt-9 text-3xl font-medium tracking-tighter text-white">
        UST RAISED SO FAR:{" "}
        <span style={{fontWeight: 700, color: "rgba(0,217,98,1)"}}>
          ${usdRaised}
        </span>
      </p>
      <p className="relative self-center mt-7 text-2xl font-medium tracking-tighter text-white">
        Tokens{" "}
        <span style={{fontWeight: 700, color: "rgba(0,217,98,1)"}}>
          Sold
        </span>
        : {tokensSold}
      </p>
      <div className="flex relative flex-wrap gap-5 justify-between px-11 py-8 mt-11 w-full font-medium text-white rounded-xl border-2 border-sky-300 border-solid bg-neutral-500 bg-opacity-40 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 text-3xl whitespace-nowrap">
          <div className="my-auto text-2xl text-center">
            1
          </div>
          <div className="font-bold text-sky-300 basis-auto">
            $ETATA
          </div>
          <div>${currentPrice}</div>
        </div>
        <div className="my-auto text-2xl">
          Next Price: ${nextPrice}
        </div>
      </div>
    </section>
  );
};
