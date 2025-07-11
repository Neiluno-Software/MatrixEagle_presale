"use client";
import * as React from "react";
import { StakingCard } from "./StakingCard";
import { ProgramTitle } from "./ProgramTitle";
import { useTranslation } from "react-i18next";

export const StakingProgramSection: React.FC = () => {
      const { t } = useTranslation();

  return (
    <section className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col  items-center " >
        <div className="w-[35%] max-md:ml-0 max-md:w-full  rounded-3xl">
          <StakingCard
            imageUrl="/staking1.png"
            text={t("values.staking1")}
          />
        </div>
        <ProgramTitle title={t("values.stakingTitle")} colorClass="text-yellow-400" />
        <div className="ml-5 w-[35%] max-md:ml-0 max-md:w-full  rounded-3xl">
          <StakingCard
            imageUrl="/staking2.png"
            text={t("values.staking2")}
          />
        </div>
      </div>
    </section>
  );
};
