"use client";

import React from "react";

export const AgricultureProblemAndSolution: React.FC = () => {
  return (
    <section className="flex justify-center px-6 py-10 w-full 2xl:mt-12">
      <div className="flex flex-col gap-y-10 items-center  md:w-[75%]">
        <div className=" max-w-full text-xl font-medium tracking-normal leading-6 text-center text-white  max-md:px-5 max-md:py-0 max-md:w-full">
          <h1 className="text-2xl mb-7 lg:text-[32px] 2xl:text-[40px]  font-medium text-[#FFA100] max-md:text-2xl max-sm:text-xl">
            Agriculture Problem In Latin America
          </h1>
          <div className="text-base 2xl:text-[20px] font-medium ">
            Agriculture in Latin America, especially in Colombia, faces many
            ongoing problems:
          </div>
          <div className="flex  text-left">
            <p className="mt-4 text-sm 2xl:text-[15px] 2xl:max-w-[550px] font-normal text-white max-md:text-lg max-sm:text-base max-sm:leading-5">
              • Most farmers do not have access to fair or reliable loans.{" "}
              <br />
              • They deal with unstable markets and low profit margins. <br />
              • There's a lack of trust and transparency in how agricultural
              investments are managed. <br />
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center max-w-full text-xl font-medium tracking-normal leading-6 text-center text-white  max-md:px-5 max-md:py-0 max-md:w-full">
          <h1 className="text-lg 2xl:text-[40px] font-medium text-[#FFA100] max-md:text-2xl max-sm:text-xl">
            Matrix Eagle’s Solution To That:
          </h1>
          <div className="text-base 2xl:text-[20px] font-medium">
            Matrix Eagle is a platform that combines blockchain technology and real agriculture to solve  the problems above. We create a trusted and easy-to-use space where:
          </div>
          <div className="flex  text-left">
            <p className="mt-4 text-sm 2xl:text-[15px] 2xl:max-w-[550px] font-normal text-white max-md:text-lg max-sm:text-base max-sm:leading-5">
              • Farmers can receive funding through smart contracts that protect both sides..{" "}
              <br />
              • Investors can safely support farming projects while earning profits.. <br />
              • All transactions are traceable and secure using BEP-20 blockchain standards. <br />
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className=" text-center text-lg 2xl:text-2xl font-medium text-[#FFA100]  ">
            By creating this bridge between modern finance and traditional farming, Matrix Eagle brings  real value to both worlds.
          </h1>
        </div>
      </div>
    </section>
  );
};
