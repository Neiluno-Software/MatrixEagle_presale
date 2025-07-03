"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Purchase() {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [amount, setAmount] = useState("5");
  const [tokenAmount, setTokenAmount] = useState("20,000");
  const [progress] = useState(40);

  return (
    <div className="relative md:min-w-[480px] lg:min-w-[530px] 2xl:max-w-[1000px] w-full mx-auto px-2">
      {/* Decorative Images */}
      <img
        src="/coinRight.svg"
        alt="Top Right"
        className="hidden lg:flex absolute top-2 right-2 w-[50px] sm:w-[80px] md:w-[140px] 2xl:w-[220px] 3xl:w-[350px]  object-contain z-10 md:-top-[70px] md:-right-[70px] 2xl:-top-[110px] 2xl:-right-[100px]"
      />
      <img
        src="/coinLeft.svg"
        alt="Bottom Left"
        className="hidden lg:flex absolute bottom-2 left-2 w-[50px] sm:w-[80px] md:w-[140px] 2xl:w-[220px] 3xl:w-[350px]  object-contain z-10 md:-bottom-[70px] md:-left-[70px] 2xl:-bottom-[100px] 2xl:-left-[100px]"
      />

      <div className="relative flex items-center justify-center w-full">
        <div className="w-full bg-transparent rounded-3xl px-4 sm:px-8 md:px-10 2xl:px-[40px] 3xl:px-[70px] py-4 sm:py-10 border border-[#00D962] md:border-2 2xl:border-4 shadow-2xl bg-linear-to-r from-black/21 to-[#737373]/21 2xl:py-[52px]">
          {/* Header */}
          <div className="text-center mb-4 md:mb-8 2xl:mb-3">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[32px] 2xl:text-[45px] 2xl:leading-[33px] font-bold mb-2 md:mb-4">
              <span className="text-white">{t("Purchase.buy")} </span>
              <span className="text-yellow-400">$ETATA </span>
              <span className="text-white">{t("Purchase.Now")}</span>
            </h1>
            <h2 className="text-white text-base sm:text-xl md:text-2xl xl:text-[24px] 2xl:text-[34px] font-medium">
              {t("Purchase.poweringFuture")}
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg xl:text-[18px] 2xl:text-[22px] font-medium">
              {t("Purchase.secureToken")}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative rounded-xl mb-4 md:mb-6 xl:mb-3  border bg-[#73737361] border-[#00D962] 2xl:border-2 h-6 2xl:h-[55px]">
            <div
              className="bg-[#00D962] h-full rounded-l-xl rounded-r-sm transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-center mb-4 md:mb-8 2xl:mb-5 space-y-2 3xl:space-y-2 text-xs sm:text-base md:text-lg xl:text-[16px] 2xl:text-[22px]">
            <div>
              <span className="text-white">{t("Purchase.usdRaised")} </span>
              <span className="text-green-400 font-bold">$15,000</span>
            </div>
            <div className="text-white">
              <span>{t("Purchase.tokens")} </span>
              <span className="text-green-400 font-semibold">{t("Purchase.sold")}</span>
              <span>: 150,000,000</span>
            </div>
          </div>

          {/* Price Info */}
          <div className="bg-[#73737361] rounded-xl p-3 sm:p-4 2xl:py-2 2xl:px-6 mb-4 md:mb-6 xl:mb-3 2xl:mb-5 border border-[#00D962] 2xl:border-2 flex justify-between items-center text-xs sm:text-base md:text-lg xl:text-[18px] 2xl:text-[22px] text-white">
            <div>
              1 <span className="text-[#FFEB31] font-bold">$ETATA</span> = $0.005
            </div>
            <div>Next Price: $0.6</div>
          </div>

          {/* Currency Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 2xl:gap-x-[56px] mb-4 md:mb-6 2xl:mb-4">
            {["USDT", "BNB", "USDC"].map((currency) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency)}
                className={`flex-1 py-2 sm:py-3 2xl:py-2 3xl:py-3 rounded-xl border border-[#00D962] 2xl:border-2 font-semibold text-xs sm:text-base 2xl:text-[22px] transition-colors ${
                  selectedCurrency === currency
                    ? "bg-[#00D962] text-black"
                    : "bg-[#73737361] text-white hover:bg-[#d5dfed]"
                }`}
              >
                {currency}
              </button>
            ))}
          </div>

          {/* Amount Inputs */}
          <div className="text-xs sm:text-base 2xl:text-[24px] mb-2 2xl:mb-1">
            {t("Purchase.amountTOInvest")}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 2xl:gap-[49px] 2xl:justify-between w-full mb-6 2xl:mb-0">
            <div className="w-full sm:w-1/2 relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#73737361] border border-[#00D962] 2xl:border-2 rounded-xl p-2 sm:p-3 md:p-4 2xl:py-3 text-white text-sm sm:text-base md:text-lg 2xl:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#00D962]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg 2xl:text-[20px] text-white">
                USDT
              </span>
            </div>
            <div className="w-full sm:w-1/2 relative">
              <input
                type="text"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-[#73737361] border border-[#00D962] 2xl:border-2 rounded-xl p-2 sm:p-3 md:p-4 pr-20 text-white text-sm sm:text-base md:text-lg 2xl:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#00D962]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg 2xl:text-[20px] text-[#FFEB31]">
                $ETATA
              </span>
            </div>
          </div>

          {/* Rate Info */}
          <div className="text-left text-white mb-4 md:mb-6 xl:mb-3 text-xs sm:text-base md:text-lg 2xl:text-[20px]">
            {t("Purchase.currentRate")}: 1 USDT = 200 $ETATA
          </div>

          {/* Connect Button */}
          <button className="w-full bg-[#00D962] hover:bg-[#00D962]/90 text-[#01273E] text-xs sm:text-base md:text-lg 2xl:text-[20px] font-bold py-2.5 sm:py-4 2xl:py-3 rounded-xl transition-colors">
            {t("Purchase.connectWalletandBuy")} $ETATA
          </button>
        </div>
      </div>
    </div>
  );
}
