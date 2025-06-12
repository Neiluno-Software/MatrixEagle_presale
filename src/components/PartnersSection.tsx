import * as React from "react";

export const PartnersSection: React.FC = () => {
  const partners = [
    {
      src: "/Partner1.svg",
      alt: "Partner 1",
      maxHeight: "67px",
    },
    {
      src: "/Partner2.svg",
      alt: "Partner 2",
      maxHeight: "67px",
    },
    {
      src: "/Partner3.svg",
      alt: "Partner 3",
      maxHeight: "67px",
    },
    {
      src: "/Partner4.svg",
      alt: "Partner 4",
      maxHeight: "67px",
    },
    {
      src: "/Partner5.svg",
      alt: "Partner 5",
      maxHeight: "67px",
    },
    {
      src: "/Partner6.svg",
      alt: "Partner 6",
      maxHeight: "67px",
    },
  ];

  return (
    <section className="relative w-full mt-[68px]">
      <div className="text-lg lg:text-xl 2xl:text-2xl mb-[44px]  w-full text-center font-medium text-white">
        Featured In
      </div>

      <div>
        {/* Ticker at the bottom of the screen */}

        <div className="w-full overflow-hidden z-50 mb-3">
          <div className="ticker-track space-x-6 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className=" flex items-center md:space-x-3 text-white text-sm md:px-4 md:py-2"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-[40px] xl:h-[130px] w-[150px] md:h-8  object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
