import * as React from "react";

interface JourneySectionProps {
  heading: string;
  description: string;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  heading,
  description
}) => {
  return (
    <section className="flex flex-col items-center">
      <h2 className=" sm:text-2xl 3xl:text-[66px] font-normal text-center tracking-wider text-[#FFA100] max-md:mt-10 max-md:max-w-full">
        {heading}
      </h2>
      <div className="mt-[32px] w-full lg:w-[82%] 3xl:w-[71%] flex justify-center">
      <p className="text-xs sm:text-sm 3xl:text-2xl tracking-wide leading-8 text-white max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
      </div>
      
    </section>
  );
};
