"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { TokenomicsHeader } from "./TokenomicsHeader";
import { BasicTokenInfo } from "./BasicTokenInfo";
import { ContractAddress } from "./ContractAddress";
import { TokenDistribution } from "./TokenDistribution";
interface TokenomicsSectionProps {
  title?: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenDecimal?: number;
  totalTokens?: string;
  contractAddress?: string;
  copyIconSrc?: string;
  warningText?: string;
  distributions?: Array<{
    label: string;
    percentage: string;
  }>;
  SecondDistributions?: Array<{
    label: string;
    percentage: string;
  }>;
}

export const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({
  // title,
  tokenName = "ETATA",
  tokenSymbol = "ETATA",
  tokenDecimal = 9,
  totalTokens = "100,000,000",
  contractAddress = "0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c",
  copyIconSrc = "/copyIcon.svg",
  // warningText,
  distributions = [
    { label: "privateSale", percentage: "5.33%" },
    { label: "ecosystem", percentage: "15%" },
    { label: "liquidity", percentage: "10%" },
    { label: "publicSale", percentage: "10.18%" },
  ],
  SecondDistributions = [
    { label: "staking", percentage: "28%" },
    { label: "contingency", percentage: "15%" },
    { label: "presale", percentage: "2%" },
    { label: "partnersFounders", percentage: "15%" },
  ],
}) => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col justify-center rounded-[29px] w-[88%]  2xl:w-full items-center  3xl:mt-[94px] px-0 md:px-10 2xl:px-[130px] ">
      <div className=" w-full flex justify-center">
        <div className="p-4 w-[90%] 2xl:w-[90%] 3xl:w-[90%]">

        <TokenomicsHeader title={t("tokenomics.title")} />

        <BasicTokenInfo
          name={tokenName}
          symbol={tokenSymbol}
          decimal={tokenDecimal}
          totalTokens={totalTokens}
        />

        <ContractAddress
          address={contractAddress}
          copyIconSrc={copyIconSrc}
          warningText={t("tokenomics.warningText")}
        />

        <TokenDistribution
          distributions={distributions.map((d) => ({
            label: t(`tokenomics.distribution.${d.label}`),
            percentage: d.percentage,
          }))}
        />
        <TokenDistribution
          distributions={SecondDistributions.map((d) => ({
            label: t(`tokenomics.distribution.${d.label}`),
            percentage: d.percentage,
          }))}
        />
        </div>
      </div>
      
    </main>
  );
};

export default TokenomicsSection;
