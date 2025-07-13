"use client";
import * as React from "react";
import { PriceDisplay } from "./PriceDisplay";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { InvestmentInput } from "./InvestmentInput";
import { PurchaseButton } from "./PurchaseButton";

export default function TokenPurchaseInterface() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState('USDT');
  const [usdAmount, setUsdAmount] = React.useState('5');
  const [tokenAmount, setTokenAmount] = React.useState('20,000');

  const paymentMethods = [
    { name: 'USDT' },
    { name: 'BNB' },
    { name: 'USDC' }
  ];

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleUsdAmountChange = (amount: string) => {
    setUsdAmount(amount);
    // Calculate token amount based on exchange rate
    const numAmount = parseFloat(amount) || 0;
    const tokens = numAmount * 200; // 1USDT = 200$ETATA
    setTokenAmount(tokens.toLocaleString());
  };

  const handleTokenAmountChange = (amount: string) => {
    setTokenAmount(amount);
    // Calculate USD amount based on exchange rate
    const numAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const usd = numAmount / 200; // 1USDT = 200$ETATA
    setUsdAmount(usd.toString());
  };

  const handlePurchase = () => {
    console.log('Purchase initiated:', {
      paymentMethod: selectedPaymentMethod,
      usdAmount,
      tokenAmount
    });
  };

  return (
    <div className="rounded-none">
      <div className="flex gap-5 max-md:flex-col max-md:">
        <aside className="w-[21%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8b8dc588b500fe30a1310ba6d9fe30c41402f3?placeholderIfAbsent=true"
            alt="Left side decoration"
            className="object-contain grow w-full aspect-[1.03] mt-[993px] max-md:mt-10 border border-red-500"
          />
        </aside>
        <main className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <section className="flex relative z-10 flex-col px-20 py-20 mt-32 mr-0 w-full min-h-[1079px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a74fdd1885bd5e6f17b71554200daa2d580a893?placeholderIfAbsent=true"
              alt="Background"
              className="object-cover absolute inset-0 size-full"
            />
            <header className="relative text-center">
              <h1 className="relative self-center text-7xl font-bold tracking-tighter leading-none text-center text-sky-300 max-md:max-w-full max-md:text-4xl">
                Buy <span style={{color: "rgba(251,193,0,1)"}}>$ETATA</span> Now
              </h1>
              <h2 className="relative mt-10 mr-6 text-6xl font-medium tracking-tighter leading-none text-center text-white max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                Powering the future of Agriculture
              </h2>
              <p className="relative mt-11 mr-12 text-4xl font-medium tracking-tighter text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Secure your tokens before the next price increase.
              </p>
            </header>

            <PriceDisplay
              usdRaised="15,000"
              tokensSold="150,000,000"
              currentPrice="0.005"
              nextPrice="0.6"
            />

            <PaymentMethodSelector
              methods={paymentMethods}
              onMethodSelect={handlePaymentMethodSelect}
            />

            {/* <InvestmentInput
              usdAmount={usdAmount}
              tokenAmount={tokenAmount}
              exchangeRate="1USDT = 200$ETATA"
              onUsdAmountChange={handleUsdAmountChange}
              onTokenAmountChange={handleTokenAmountChange}
            /> */}

            <PurchaseButton onClick={handlePurchase} />
          </section>
        </main>
        <aside className="ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8085a0ebaa1afa67eb8e52e99f65e0b1064ef869?placeholderIfAbsent=true"
            alt="Right side decoration"
            className="object-contain shrink-0 max-w-full aspect-[0.84] w-[323px]"
          />
        </aside>
      </div>
    </div>
  );
}
