"use client";
import * as React from "react";
import { EthIcon } from "./icons/EthIcon";
import { UsdtIcon } from "./icons/UsdtIcon";
import { HelpIcon } from "./icons/HelpIcon";

interface PresaleWidgetProps {
  tokenName: string;
  tokenSymbol: string;
  launchPrice: number;
  presalePrice: number;
  raisedAmount: number;
  goalAmount: number;
  soldTokens: number;
  totalTokens: number;
  conversionRate: number; // Number of tokens per 1 unit of selectedCurrency
}

export const PresaleWidget: React.FC<PresaleWidgetProps> = ({
  tokenSymbol,
  launchPrice,
  presalePrice,
  raisedAmount,
  goalAmount,
  soldTokens,
  totalTokens,
  conversionRate,
}) => {
  const [ethAmount, setEthAmount] = React.useState("");
  const [etataAmount, setEtataAmount] = React.useState("0");
  const [selectedCurrency, setSelectedCurrency] = React.useState<"ETH" | "USDT">("ETH");

  const handleEthAmountChange = (value: string) => {
    setEthAmount(value);
    const numValue = parseFloat(value) || 0;
    const tokenValue = numValue * conversionRate;
    setEtataAmount(tokenValue.toString());
  };

  const handleMaxClick = () => {
    handleEthAmountChange("1.5");
  };

  const handleConnectWallet = () => {
    console.log('connect wallet')
  }

  const progressPercent = Math.min((raisedAmount / goalAmount) * 100, 100).toFixed(2);

  return (
    <div className="max-md:px-3 mb-7 2xl:mb-10">
      <div className="w-full md:max-w-[590px] mx-auto bg-[#F6B387]  rounded-3xl p-1 md:p-2">
        <div className="w-full border border-zinc-800 bg-gradient-to-b from-[#414247] to-[#1B1D23] bg-gray-800/95 rounded-2xl p-6 md:py-10 md:px-12">
          <div className="text-center mb-6">
            <h2 className="text-xl 2xltext-4xl font-bold tracking-wide text-white max-md:text-3xl">
              <span className="text-[#FFA100]">{tokenSymbol}</span> Presale
            </h2>
            <p className="mt-4 text-white text-lg 2xltext-xl">
              1 {tokenSymbol} = ${presalePrice.toFixed(3)}<br />
              Launch Price = ${launchPrice.toFixed(3)}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="border w-full bg-white rounded-3xl h-6 mb-4 relative">
            <div
              className="h-full bg-gradient-to-r from-[#FFA10080] to-[#F6B387] rounded-3xl"
              style={{ width: `${progressPercent}%` }}
            />
            <span className="absolute inset-0 flex justify-center items-center text-black font-semibold text-sm 2xltext-base">
              {progressPercent}%
            </span>
          </div>

          {/* Raised Info */}
          <div className="text-center text-white text-base 2xltext-lg mb-6">
            <p>
              Fundraising Goal:{" "}
              <span className="text-[#FFA100]">
                ${raisedAmount.toLocaleString()} / ${goalAmount.toLocaleString()}
              </span>
            </p>
            <p>
              Total Token Supply:{" "}
              <span className="text-[#FFA100]">
                {soldTokens.toLocaleString()} / {totalTokens.toLocaleString()}
              </span>
            </p>
          </div>

          {/* Currency Select */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {["ETH", "USDT"].map((currency) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency as "ETH" | "USDT")}
                className={`cursor-pointer flex justify-center items-center h-11 rounded-xl border-2 px-8 transition-all w-full ${
                  selectedCurrency === currency
                    ? currency === "ETH"
                      ? "border-white bg-[#F6B387]"
                      : "border-amber-500 bg-amber-500/20"
                    : "border-white hover:border-amber-500"
                }`}
              >
                {currency === "ETH" ? (
                  <EthIcon className="h-8 w-20" />
                ) : (
                  <UsdtIcon className="h-8 w-20" />
                )}
              </button>
            ))}
          </div>

          {/* Input Amount */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1 text-sm 2xltext-lg">
              Amount in <span className="font-bold">{selectedCurrency}</span> You Pay:
            </label>
            <div className="relative">
              <input
                type="number"
                value={ethAmount}
                onChange={(e) => handleEthAmountChange(e.target.value)}
                placeholder="Enter Amount"
                className="w-full rounded-2xl bg-neutral-200 h-12 px-4 text-neutral-700 text-lg outline-none"
              />
              <button
                onClick={handleMaxClick}
                className="absolute right-12 top-1.5 h-9 px-3 rounded-xl bg-gradient-to-r from-[#F6B387] to-[#FFA100] text-[#1B1C22] font-bold"
              >
                Max
              </button>
              <div
                onClick={handleMaxClick}
                className="absolute right-3 top-2.5 h-[27px] w-[27px] cursor-pointer"
              >
                <img src="/EthBlue.svg" alt="ETH" className="h-full w-full" />
              </div>
            </div>
          </div>

          {/* ETATA Output */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-1 text-sm 2xltext-lg">
              Amount in <span className="font-bold">{tokenSymbol}</span> You Receive:
            </label>
            <div className="rounded-2xl bg-neutral-200 h-12 flex items-center px-4 text-neutral-500 text-lg">
              {etataAmount}
            </div>
          </div>

          {/* Connect Wallet */}
          <button onClick={handleConnectWallet} className="cursor-pointer w-full h-12 rounded-2xl border-2 border-white bg-gradient-to-r from-[#FFA100] to-[#F6B387] text-[#1B1C22] font-bold text-sm 2xltext-lg mb-6">
            Connect Wallet
          </button>

          {/* Help & Error Buttons */}
          <div className="flex flex-col md:flex-row justify-between 2xl:mb-16">
            <div className="w-full md:w-[45%] flex justify-center">
              <a
                href="#how-to-buy"
                className="text-sm 2xltext-lg w-full flex items-center justify-center gap-1 sm:gap-2 h-10 px-4 rounded-lg border-2 border-zinc-600 bg-neutral-700 text-white hover:border-amber-500 transition"
              >
                <HelpIcon className="w-5 h-5" />
                <span>How to Buy ?</span>
              </a>
            </div>
            <div className="mt-3 md:mt-0 w-full md:w-[45%] flex justify-center">
              <a
                href="#how-to-buy"
                className="text-sm 2xltext-lg w-full flex items-center justify-center md:gap-2 h-10 rounded-lg border-2 border-zinc-600 bg-neutral-700 text-white hover:border-amber-500 transition"
              >
                <HelpIcon className="w-5 h-5" />
                <span>Getting Error? Click here</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
