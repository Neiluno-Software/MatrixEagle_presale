"use client";
import * as React from "react";

interface InvestmentInputProps {
  usdAmount: string;
  tokenAmount: string;
  exchangeRate: string;
  onUsdAmountChange?: (amount: string) => void;
  onTokenAmountChange?: (amount: string) => void;
}

export const InvestmentInput: React.FC<InvestmentInputProps> = ({
  usdAmount,
  tokenAmount,
  exchangeRate,
  onUsdAmountChange,
  onTokenAmountChange
}) => {
  const [usdValue, setUsdValue] = React.useState(usdAmount);
  const [tokenValue, setTokenValue] = React.useState(tokenAmount);

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsdValue(value);
    onUsdAmountChange?.(value);
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTokenValue(value);
    onTokenAmountChange?.(value);
  };

  return (
    <section className="relative">
      <label className="relative self-start mt-9 text-2xl font-medium tracking-tighter text-gray-300">
        Amount You Want to Invest
      </label>
      <div className="flex relative flex-wrap gap-10 items-start mt-5 w-full whitespace-nowrap max-md:max-w-full">
        <input
          type="number"
          value={usdValue}
          onChange={handleUsdChange}
          className="grow shrink-0 px-12 py-8 text-3xl font-medium tracking-tighter text-white rounded-xl border-2 border-sky-300 border-solid basis-0 bg-neutral-500 bg-opacity-40 w-fit max-md:px-5 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="5"
        />
        <div className="flex flex-auto gap-3 px-20 py-7 rounded-xl border-2 border-sky-300 border-solid bg-neutral-500 bg-opacity-40 max-md:px-5">
          <input
            type="number"
            value={tokenValue}
            onChange={handleTokenChange}
            className="grow text-3xl font-medium tracking-tighter text-white bg-transparent focus:outline-none"
            placeholder="20,000"
          />
          <div className="text-3xl font-bold tracking-tighter text-sky-300 basis-auto">
            $ETATA
          </div>
        </div>
      </div>
      <p className="relative self-start mt-7 text-2xl font-medium text-white">
        Current Rate: {exchangeRate}
      </p>
    </section>
  );
};
