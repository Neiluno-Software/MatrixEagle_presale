"use client";
import React, { useState } from "react";

interface ContractAddressProps {
  address: string;
  copyIconSrc: string;
  warningText: string;
}

export const ContractAddress: React.FC<ContractAddressProps> = ({
  address,
  copyIconSrc,
  warningText,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // icon reverts after 1 sec
  };
  return (
    <section className="flex flex-col justify-center items-center  py-2  mt-8 2xl:mt-19 w-full text-center border border-orange-300 border-solid rounded-[29px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="2xl:py-6 flex flex-col w-full max-md:max-w-full">
        <div className="flex justify-center flex-wrap gap-3.5 items-start text-xs sm:text-sm 2xl:text-3xl tracking-wide text-white">
          <div className="self-stretch my-auto font-bold">
            Contract Address:
          </div>
          <div className="flex items-center w-full md:w-auto">
            <div className="w-[90%] md:w-auto overflow-hidden text-ellipsis whitespace-nowrap grow shrink max-md:max-w-full  text-sm sm:text-sm 2xl:text-3xl font-normal">
              {address}
            </div>
            {copied ? (
              <p className="text-xs">copied</p>
            ) : (
              <img
                src={copyIconSrc} 
                alt={copied ? "Copied!" : "Copy address"}
                onClick={handleCopy}
                className="ml-3 object-contain shrink-0 aspect-square w-[20px]  2xl:w-[33px] cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
        <p className="self-center mt-3.5 text-xs sm:text-xs 2xl:text-base tracking-normal text-yellow-500 max-md:max-w-full">
          {warningText}
        </p>
      </div>
    </section>
  );
};
