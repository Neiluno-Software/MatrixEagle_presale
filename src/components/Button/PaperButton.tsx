"use client";
import * as React from "react";

interface DownloadWhitepaperButtonProps {
  onClick?: () => void;
  label:string;
  className?: string;
}

export const DownloadWhitepaperButton: React.FC<DownloadWhitepaperButtonProps> = ({
  onClick,
  className = "",
  label
}) => {
  return (
    <div className={`flex shrink-0 justify-center items-center mx-auto my-12 rounded-2xl shadow-2xl h-[68px] w-[271px] max-md:w-60 max-md:h-[60px] max-sm:rounded-xl max-sm:h-[50px] max-sm:w-[200px] ${className}`}>
      <button
        onClick={onClick}
        className="flex absolute shrink-0 justify-center items-center pt-6 pr-6 pb-6 pl-6 rounded-2xl h-[68px] w-[271px] max-md:pt-5 max-md:pr-5 max-md:pb-5 max-md:pl-5 max-md:w-60 max-md:h-[60px] max-sm:pt-3.5 max-sm:pr-4 max-sm:pb-3.5 max-sm:pl-4 max-sm:rounded-xl max-sm:h-[50px] max-sm:w-[200px] bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        type="button"
        aria-label="Download Whitepaper"
      >
        <span className="shrink-0 w-56 text-xl font-semibold tracking-normal leading-6 text-center text-black h-[23px] max-md:text-lg max-sm:text-sm">
          {label}
        </span>
      </button>
    </div>
  );
};

export default DownloadWhitepaperButton;
