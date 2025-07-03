"use client";
import * as React from "react";
import { StakingProgramSection } from "./StakingProgramSection";
import { SecurityTokenSection } from "./SecurityTokenSection";

export const StakingProgram: React.FC = () => {
  return (
    <main className="rounded-none">
      <StakingProgramSection />
      <SecurityTokenSection />
    </main>
  );
};

export default StakingProgram;
