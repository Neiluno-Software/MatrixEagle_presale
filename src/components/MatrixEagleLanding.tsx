import * as React from "react";
import { Navbar } from "./Navbar/Navbar";
import { HeroSection } from "./Hero/HeroSection";
import OurValues from "./OurValues/OurValues";
import { FAQSection } from "./FAQSection/FAQSection";
import { Footer } from "./Fotter/Footer";
import TokenomicsSection from "./Tokenomics/TokenomicsSection";
import TeamAndAdvisors from "./TeamAndAdvisor/TeamAndAdvisors";

import Purchase from "./Purchase/Purchase";
import RoadMap from "./RoadMap/Roadmap";
import AgricultureProblemAndSolution from "./AgricultureProblemAndSolution/AgricultureProblemAndSolution";
import ContactForm from "./ContactUs/ContactForm";
import GallerySection from "../GallerySection/GallerySection";
import TrustedParteners from "./TrustedPartners/TrustedParteners";
import VisionMissionSection from "./VisionAndMission/VisionMissionSection";
import TotalSupplySection from "./TotalSupply/TotalSupplySection";

export const MatrixEagleLanding: React.FC = () => {
  return (
    <div className="w-full 2xl:pr-[50px]">
      <div className="w-full">
        <Navbar />
        <div className="flex items-center justify-center w-full">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row lg:gap-x-4 lg:justify-between px-0 lg:px-10 2xl:px-0 ">
              <div className="w-[100%] lg:w-[50%] xl:w-[45%] 2xl:w-[55%]  2xl:mt-[120px] 2xl:px-[70px]  3xl:pl-[130px]">
                <HeroSection />
              </div>
              <div className="w-full lg:w-[36%] xl:w-[55%] 2xl:w-[45%] ">
                <div className=" relative w-[100%] lg:mt-[40px] 2xl:mt-[80px] flex justify-center lg:justify-end  px-4 sm:px-6 lg:px-8  2xl:pr-[70px] py-0">
                  <Purchase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 lg:px-10 pt-[20px] lg:pt-[80px] 2xl:px-[70px] 3xl:px-[130px] 2xl:pt-[20px]">
        <TrustedParteners />
      </div>
      <VisionMissionSection />
      <OurValues />
      <div className="flex justify-center">
        <TokenomicsSection />
      </div>
      <div>
        <TotalSupplySection />
        <div className="flex justify-center bg-black/36">
          <div className="w-[84%] 2xl:w-full">
            <RoadMap />
          </div>
        </div>
        <AgricultureProblemAndSolution />
        <TeamAndAdvisors />
      </div>
      <GallerySection />
      <div className="px-0 lg:px-10">
        <ContactForm />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default MatrixEagleLanding;
