"use client";
import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useChainId, useAccount, useReadContract, useWriteContract, useBalance } from "wagmi";
import { ethers } from 'ethers';
import {
  TOKEN_ADDRESS_MAIN,
  TOKEN_ADDRESS_TEST,
  USDT_ADDRESS_MAIN,
  USDT_ADDRESS_TEST,
  USDC_ADDRESS_MAIN,
  USDC_ADDRESS_TEST,
  PRESALE_ADDRESS_MAIN,
  PRESALE_ADDRESS_TEST,
  MAIN_NET,
} from "../../config";
import PRESALE_ABI from '../../config/abis/PRESALE_ABI.json';
import TOKEN_ABI from '../../config/abis/USDT_ABI.json';
import USDT_ABI from '../../config/abis/USDT_ABI.json';
import USDC_ABI from '../../config/abis/USDT_ABI.json';
import { RefreshContext } from '../../context/RefreshContext'

const useRefresh = () => {
  const { fast, slow } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow }
}

export default function Purchase() {
  const { slowRefresh } = useRefresh();

  const { t } = useTranslation();

  const { openConnectModal } = useConnectModal();
  const chainId = useChainId();
  const { isConnected, address } = useAccount();
  const { data: balance, refetch: refetchBalance } = useBalance({ address: address });
  const { writeContractAsync } = useWriteContract();

  ////// Presale Contract ////////////////////////
  const { data: phase, refetch: refetchPhase } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'phase',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };


  const { data: tokenPrice, refetch: refetchTokenPrice } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getCurrentTokenPrice',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: nextPrice, refetch: refetchNextPrice } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getTokenPriceByPhase',
    args: [parseInt(phase) + 1],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: tokenInCurrentPhase, refetch: refetchTokenInCurrentPhase } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'tokenInCurrentPhase',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: targetAmountForCurrentPhase, refetch: refetchTargetAmountForCurrentPhase } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getTokenAmountByPhase',
    args: [phase],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: totalUSD, refetch: refetchTotalUSD } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getTotalRaisedUSD',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: tokenTotal, refetch: refetchTokenTotal } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'tokenTotal',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: bnbPrice, refetch: refetchBnbPrice } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getLatestBNBPrice',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: _startTime, refetch: refetchStartTime } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'startTime',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: _phaseDuration, refetch: refetchPhaseDuration } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'phaseDuration',
    args: [],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  /////// USDT Contract //////////////////////////////////////
  const { data: balanceUSDT, refetch: refetchBalanceUSDT } = useReadContract({
    address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
    abi: USDT_ABI,
    functionName: 'balanceOf',
    args: [address],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: approvedAmountUSDT, refetch: refetchApprovedAmountUSDT } = useReadContract({
    address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
    abi: USDT_ABI,
    functionName: 'allowance',
    args: [address, chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  /////// USDC Contract //////////////////////////////////////
  const { data: balanceUSDC, refetch: _refetchBalanceUSDC } = useReadContract({
    address: chainId === MAIN_NET ? USDC_ADDRESS_MAIN : USDC_ADDRESS_TEST,
    abi: USDT_ABI,
    functionName: 'balanceOf',
    args: [address],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  const { data: approvedAmountUSDC, refetch: refetchApprovedAmountUSDC } = useReadContract({
    address: chainId === MAIN_NET ? USDC_ADDRESS_MAIN : USDC_ADDRESS_TEST,
    abi: USDT_ABI,
    functionName: 'allowance',
    args: [address, chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  ////// Token Contract //////////////////////////////////////
  const { data: _balanceToken, refetch: refetchBalanceToken } = useReadContract({
    address: chainId === MAIN_NET ? TOKEN_ADDRESS_MAIN : TOKEN_ADDRESS_TEST,
    abi: TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    chainId: chainId
  }) as { data: any; refetch: () => void };

  useEffect(() => {
    refetchApprovedAmountUSDT();
    refetchApprovedAmountUSDC();
    refetchBalance();
    refetchBalanceToken();
    refetchBalanceUSDT();
    refetchBnbPrice();
    refetchNextPrice();
    refetchPhase();
    refetchStartTime();
    refetchTokenInCurrentPhase();
    refetchTokenPrice();
    refetchTokenTotal();
    refetchTotalUSD();
    refetchTargetAmountForCurrentPhase();
    refetchPhaseDuration();
  }, [slowRefresh])

  const [payKind, setPayKind] = useState(0);
  const [_payKindString, setPayKindString] = useState('ETH you pay');
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");

  const [payAmount, setPayAmount] = useState(0);
  const [expectationTokenAmount, setExpectationTokenAmount] = useState(0);

  const [progress, setProgress] = useState(0);

  //const [_countdownTime, setCountdownTime] = useState(0);

  const [isApproving, setIsApproving] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    if (tokenInCurrentPhase !== undefined && targetAmountForCurrentPhase) {
      setProgress(parseFloat(ethers.formatUnits(tokenInCurrentPhase, 18)) / parseFloat(ethers.formatUnits(targetAmountForCurrentPhase.toString(), 18)) * 100);
      console.log("eagle progress = ", parseFloat(ethers.formatUnits(tokenInCurrentPhase, 18)) / parseFloat(ethers.formatUnits(targetAmountForCurrentPhase.toString(), 18)) * 100)
    }
  }, [tokenInCurrentPhase, targetAmountForCurrentPhase]);

  const handleClick = (index: any) => {
    if (index === payKind)
      return;

    setPayKind(index);
    if (index === 0) {
      setPayKindString('USDT you pay');
      setSelectedCurrency('USDT');
    } else if (index === 1) {
      setPayKindString('BNB you pay');
      setSelectedCurrency('BNB');
    } else if (index === 2) {
      setPayKindString('USDC you pay');
      setSelectedCurrency('USDC');
    }

    setPayAmount(0);
    setExpectationTokenAmount(0);
  };

  const handleChange = (e: any) => {
    setPayAmount(e.target.value);

    if (payKind === 0)
      setExpectationTokenAmount(e.target.value / parseFloat(ethers.formatUnits(tokenPrice ? tokenPrice.toString() : "1", 8)));
    else if (payKind === 1)
      setExpectationTokenAmount(e.target.value * parseFloat(ethers.formatUnits(bnbPrice ? bnbPrice.toString() : "0", 8)) / parseFloat(ethers.formatUnits(tokenPrice ? tokenPrice.toString() : "1", 8)));
    else
      setExpectationTokenAmount(e.target.value / parseFloat(ethers.formatUnits(tokenPrice ? tokenPrice.toString() : "1", 8)));
  }

  const getBuyButtonText = () => {
    if (payAmount === 0)
      return 'Enter Amount';

    if (isPaying)
      return 'Paying ...';

    if (payKind === 0)
      if (isApproving)
        return 'Approving ...';
      else if (parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 18)) <= payAmount)
        return 'Insufficient Balance';
      else if (parseFloat(ethers.formatUnits(approvedAmountUSDT ? approvedAmountUSDT : "0", 18)) < payAmount)
        return 'Approve USDT';
      else
        return 'Pay with USDT';
    else if (payKind === 1) {
      if (balance?.formatted && parseFloat(balance.formatted) <= payAmount)
        return 'Insufficient Balance';
      else
        return 'Pay with BNB';
    }
    else if (payKind === 2) {
      if (isApproving)
        return 'Approving ...';
      else if (parseFloat(ethers.formatUnits(balanceUSDC ? balanceUSDC : "0", 18)) <= payAmount)
        return 'Insufficient Balance';
      else if (parseFloat(ethers.formatUnits(approvedAmountUSDC ? approvedAmountUSDC : "0", 18)) < payAmount)
        return 'Approve USDC';
      else
        return 'Pay with USDC';
    }
  }

  const handleBuy = async () => {
    if (payAmount === 0)
      return;

    if (payKind === 0) {
      if (parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 18)) <= payAmount)
        return;

      if (parseFloat(ethers.formatUnits(approvedAmountUSDT ? approvedAmountUSDT : "0", 18)) < payAmount) {
        setIsApproving(true);
        await writeContractAsync({
          address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
          abi: USDT_ABI,
          functionName: "approve",
          args: [chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST, ethers.parseUnits(payAmount.toString(), 18)]
        })
          .then(() => {
            refetchApprovedAmountUSDT();
            setIsApproving(false);
          })
          .catch((err) => {
            console.log(err);
            setIsApproving(false);
          });
        return;
      }

      setIsPaying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "buyTokenByUSDT",
        args: [["0x0000000000000000000000000000000000000000000000000000000000000000"], ethers.parseUnits(payAmount.toString(), 18)]
      })
        .then(() => {
          setIsPaying(false);
        })
        .catch((err) => {
          console.log(err);
          setIsPaying(false);
        });
    } else if (payKind === 1) {
      if (balance?.formatted &&parseFloat(balance.formatted) <= payAmount)
        return;

      setIsPaying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "buyTokenByBNB",
        args: [["0x0000000000000000000000000000000000000000000000000000000000000000"]],
        value: ethers.parseEther(payAmount.toString())
      })
        .then(() => {
          setIsPaying(false);
        })
        .catch((err) => {
          console.log(err);
          setIsPaying(false);
        });

    } else if (payKind === 2) {
      if (parseFloat(ethers.formatUnits(balanceUSDC ? balanceUSDC : "0", 18)) <= payAmount)
        return;

      if (parseFloat(ethers.formatUnits(approvedAmountUSDC ? approvedAmountUSDC : "0", 18)) < payAmount) {
        setIsApproving(true);
        await writeContractAsync({
          address: chainId === MAIN_NET ? USDC_ADDRESS_MAIN : USDC_ADDRESS_TEST,
          abi: USDC_ABI,
          functionName: "approve",
          args: [chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST, ethers.parseUnits(payAmount.toString(), 18)]
        })
          .then(() => {
            refetchApprovedAmountUSDC();
            setIsApproving(false);
          })
          .catch((err) => {
            console.log(err);
            setIsApproving(false);
          });
        return;
      }

      setIsPaying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "buyTokenByUSDC",
        args: [["0x0000000000000000000000000000000000000000000000000000000000000000"], ethers.parseUnits(payAmount.toString(), 18)]
      })
        .then(() => {
          setIsPaying(false);
        })
        .catch((err) => {
          console.log(err);
          setIsPaying(false);
        });
    }
  }



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
          <div className="text-center mb-3 md:mb-4 2xl:mb-3">
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
          <div className="relative rounded-[5px] 2xl:rounded-[10px] mb-4 md:mb-6 xl:mb-3  border bg-[#73737361] border-[#00D962] 2xl:border-2 h-10 2xl:h-[55px]">
            <div
              className="bg-[#00D962] h-full rounded-[4px] 2xl:rounded-[7px] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-center mb-4 md:mb-5 2xl:mb-5 space-y-2 3xl:space-y-2 text-xs sm:text-base md:text-lg xl:text-[16px] 2xl:text-[22px]">
            <div>
              <span className="text-white">{t("Purchase.usdRaised")} </span>
              <span className="text-green-400 font-bold">${parseFloat(ethers.formatUnits(totalUSD ? totalUSD.toString() : "0", "ether")).toFixed(2)}</span>
            </div>
            <div className="text-white">
              <span>{t("Purchase.tokens")} </span>
              <span className="text-green-400 font-semibold">{t("Purchase.sold")}</span>
              <span>: {parseFloat(ethers.formatUnits(tokenTotal ? tokenTotal.toString() : "0", "ether")).toFixed(2)}</span>
            </div>
          </div>

          {/* Price Info */}
          <div className="bg-[#73737361] rounded-[10px] p-2 sm:p-3 2xl:py-2 2xl:px-6 mb-4 md:mb-6 xl:mb-3 2xl:mb-5 border border-[#00D962] 2xl:border-2 flex justify-between items-center text-xs sm:text-base md:text-lg xl:text-[18px] 2xl:text-[22px] text-white">
            <div>
              1 <span className="text-[#FFEB31] font-bold">$ETATA</span> = ${ethers.formatUnits(tokenPrice ? tokenPrice : "0", 8)}
            </div>
            <div>Next Price: ${ethers.formatUnits(nextPrice ? nextPrice : "0", 8)}</div>
          </div>

          {/* Currency Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 2xl:gap-x-[56px] mb-4 md:mb-6 2xl:mb-4">
            {["USDT", "BNB", "USDC"].map((currency, index) => (
              <button
                key={currency}
                onClick={() => handleClick(index)}
                className={`cursor-pointer w-1/3 flex-1 py-2 sm:py-3 2xl:py-2 3xl:py-3 rounded-[10px] border border-[#00D962] 2xl:border-2 font-semibold text-xs sm:text-base 2xl:text-[22px] transition-colors ${payKind === index
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
                value={payAmount}
                onChange={handleChange}
                className="w-full bg-[#73737361] border border-[#00D962] 2xl:border-2 rounded-[10px] p-2 sm:p-3 2xl:py-3 text-white text-sm sm:text-base md:text-lg 2xl:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#00D962]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg 2xl:text-[20px] text-white">
                {selectedCurrency}
              </span>
            </div>
            <div className="w-full sm:w-1/2 relative">
              <input
                type="number"
                value={expectationTokenAmount.toFixed(0)}
                disabled={true}
                placeholder="0.00"
                className="w-full bg-[#73737361] border border-[#00D962] 2xl:border-2 rounded-[10px] p-2 sm:p-3 pr-20 text-white text-sm sm:text-base md:text-lg 2xl:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#00D962]"
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
          {
            isConnected ?
              <button
                className="cursor-pointer w-full bg-[#00D962] hover:bg-[#00D962]/90 text-[#01273E] text-xs sm:text-base md:text-lg 2xl:text-[20px] font-bold py-2.5 sm:py-4 2xl:py-3 rounded-[10px] transition-colors"
                onClick={handleBuy}
              >
                {getBuyButtonText()}
              </button>
              :
              <button
                className="cursor-pointer w-full bg-[#00D962] hover:bg-[#00D962]/90 text-[#01273E] text-xs sm:text-base md:text-lg 2xl:text-[20px] font-bold py-2.5 sm:py-4 2xl:py-3 rounded-[10px] transition-colors"
                onClick={openConnectModal}
              >
                {t("Purchase.connectWalletandBuy")} $ETATA
              </button>
          }
        </div>
      </div>
    </div>
  );
}
