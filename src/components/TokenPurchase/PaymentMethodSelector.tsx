"use client";
import * as React from "react";

interface PaymentMethod {
  name: string;
  isSelected?: boolean;
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  onMethodSelect?: (method: string) => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  onMethodSelect
}) => {
  const [, setSelectedMethod] = React.useState<string>(methods[0]?.name || '');

  const handleMethodClick = (methodName: string) => {
    setSelectedMethod(methodName);
    onMethodSelect?.(methodName);
  };

  return (
    <div className="flex relative flex-wrap gap-5 justify-between mt-8 text-2xl font-medium whitespace-nowrap text-slate-200 max-md:max-w-full">
      {methods.map((method) => (
        <button
          key={method.name}
          onClick={() => handleMethodClick(method.name)}
          className="px-16 py-7 rounded-xl border-2 border-sky-300 border-solid bg-neutral-500 bg-opacity-40 max-md:px-5 hover:bg-opacity-60 transition-all"
        >
          {method.name}
        </button>
      ))}
    </div>
  );
};
