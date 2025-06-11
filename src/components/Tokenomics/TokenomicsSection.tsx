"use client";
import React from "react";
import { TokenomicsHeader } from "./TokenomicsHeader";
import { BasicTokenInfo } from "./BasicTokenInfo";
import { ContractAddress } from "./ContractAddress";
import { TokenDistribution } from "./TokenDistribution";
import { TokenomicsImage } from "./TokenomicsImage";
import { TotalSupply } from "./TotalSupply";

interface TokenomicsSectionProps {
  title?: string;
  tokenName?: string;
  tokenSymbol?: string;
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
  title = "TOKENOMICS",
  tokenName = "ETATA",
  tokenSymbol = "ETATA",
  totalTokens = "100,000,000",
  contractAddress = "0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c",
  copyIconSrc = "/copyIcon.svg",
  warningText = "Please note that you should not send any tokens to this address, as doing so may result in the permanent loss of the tokens.",
  distributions = [
    { label: "Private sale", percentage: "5.33%" },
    { label: "Ecosystem", percentage: "15%" },
    { label: "Liquidity", percentage: "10%" },
    { label: "Public sale", percentage: "10.18%" },
  ],
  SecondDistributions = [
    { label: "Staking", percentage: "28%%" },
    { label: "Contingency", percentage: "15%" },
    { label: "Presale", percentage: "2%" },
    { label: "Partners/founders", percentage: "14.49%" },
  ],
}) => {
  return (
    <main className="flex flex-col rounded-[29px] w-full items-center">
      <div className="w-[70%]">
        <TokenomicsHeader title={title} />

        <BasicTokenInfo
          name={tokenName}
          symbol={tokenSymbol}
          totalTokens={totalTokens}
        />

        <ContractAddress
          address={contractAddress}
          copyIconSrc={copyIconSrc}
          warningText={warningText}
        />

        <TokenDistribution distributions={distributions} />
        <TokenDistribution distributions={SecondDistributions} />

        <TotalSupply
          totalSupply="100 Million Tokens"
          description="Tokenomics outlines the distribution and utility of our tokens, ensuring the long-term success and stability of the Etata project."
        />
      </div>

      <div className="bg-[url('/herobg3.svg')]  bg-no-repeat bg-[length:100%_auto] bg-[center_140px] 2xl:bg-[center_160px] w-full flex justify-center">
        <div className="w-[90%] flex flex-col items-center">
          <TokenomicsImage
            src="/tokenomicsImage.svg"
            alt="Tokenomics distribution chart"
          />

          {/* <JourneySection
            heading="Join Us on Our Journey to Sustainable Prosperity"
            description="With Etata, investors are not just purchasing a token; they are funding a future. A future where food production is not only a means to an end but a pathway to a more sustainable and inclusive world. We invite you to join us in this revolutionary venture, where your investment goes beyond the financial to sow seeds of change in communities and industries worldwide. Transform the way the world thinks about food production, one token at a time."
          />
          <div className="flex justify-center">
            <CompanyTagline tagline="Matrix Eagle | Etata: Nourishing Bodies, Empowering Communities, Enriching Investors." />
          </div> */}
          <div className=" pb-6">
            <img src={"/Tea.png"} alt={"tea"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TokenomicsSection;
