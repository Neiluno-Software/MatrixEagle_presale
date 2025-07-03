"use client";
import * as React from "react";

interface PurchaseButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({
  onClick,
  disabled = false,
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex relative shrink-0 mt-6 bg-sky-300 rounded-xl h-[86px] max-md:max-w-full hover:bg-sky-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span className="sr-only">Purchase Tokens</span>
    </button>
  );
};
