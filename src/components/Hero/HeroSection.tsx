import * as React from "react";
// import { RocketIcon } from "../icons/RocketIcon";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative mx-auto mt-9 mb-0 w-full  max-md:px-5 max-md:py-0 2xl:mt-22">
      <h1 className="mx-auto mt-0 mb-11 w-full text-3xl 2xl:text-5xl font-bold tracking-wide text-center text-white leading-[72px] max-w-[1028px] max-md:mb-8 max-md:text-4xl max-md:leading-[54px] max-sm:mb-6 max-sm:text-3xl max-sm:leading-10">
        Empowering Agriculture Through Blockchain Innovation
      </h1>
      <p className="mx-auto mt-0 mb-[44px] w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px] max-md:mb-24 max-md:text-sm max-md:leading-5 max-sm:mb-20 max-sm:text-sm max-sm:leading-5 2xl:text-[22px]">
        Matrix Eagle is a blockchain-based platform built to transform and
        support agriculture in Latin America, starting in Colombia. <br /> We
        aim to connect global investors with real agricultural projects through
        smart contracts, secure blockchain technology, and utility tokens. With
        this platform, we make it easier, safer, and more transparent to invest
        in agriculture while giving farmers reliable access to funding and
        resources to help their land and communities grow.
      </p>
      <div className="flex gap-20 justify-center mb-8 2xl:mb-7  max-md:gap-5 max-md:items-center ">
        <button
          className="w-[271px] h-[68px] relative overflow-hidden rounded-[14px] bg-radial from-[#FFDF00] from-0% to-[#FFA100] bg-opacity-0"
          style={{
            background:
              "linear-gradient(26.6deg, #30304e -3%, #27283c 65.14%);",
          }}
        >
          <div className="w-[271px] h-[68px] absolute left-0 top-0 rounded-[14px]">
            <p className="w-56 h-[23px] absolute left-6 top-[22px] text-[19px] font-semibold text-center text-black">
              Connect Wallet
            </p>
          </div>
        </button>
      </div>
      <div>

      <p className="2xl:text-[22px] mx-auto mt-0 mb-7 2xl:mb-8 w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px]  max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5">
        Matrix Eagle is not just a blockchain platform, it's a bridge between
        technology and agriculture, between impact and income. We believe in a
        future where farmers have fair access to funding, investors earn while
        doing good, and communities grow together.
      </p>
      </div>
      <div>
      <p className="2xl:text-[22px] mx-auto mt-0 mb-7 2xl:mb-8 w-full text-base tracking-normal leading-6 text-center text-white max-w-[1192px]  max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-5">
        By combining innovation, transparency, and real-world value, Matrix
        Eagle gives everyone a chance to be part of something meaningful.
        Whether you're a farmer, investor, or supporter of sustainable growth,
        your journey with us can shape the future of agriculture in Latin
        America and beyond. Join us. Invest with purpose. Grow with confidence.
      </p>
      </div>
      <div className="flex justify-center mb-7 2xl:mb-8">
        <h2 className="text-xl 2xl:text-[28px] font-bold text-[#FFA100]">
          Join us. Invest with purpose. Grow with confidence
        </h2>
      </div>

      <div className="flex gap-20 justify-center mb-8 2xl:mb-7  max-md:gap-5 max-md:items-center ">
        <button
          className="w-[271px] h-[68px] relative overflow-hidden rounded-[14px] bg-radial from-[#FFDF00] from-0% to-[#FFA100] bg-opacity-0"
          style={{
            background:
              "linear-gradient(26.6deg, #30304e -3%, #27283c 65.14%);",
          }}
        >
          <div className="w-[271px] h-[68px] absolute left-0 top-0 rounded-[14px]">
            <p className="w-56 h-[23px] absolute left-6 top-[22px] text-[19px] font-semibold text-center text-black">
              Download Whitepaper
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};
