import React from "react";
import clsx from "clsx";

type ImageItem = {
  src: string;
  alt: string;
  maxHeight?: string;
};

type ImageTickerProps = {
  images: ImageItem[];
  direction?: "left" | "right";
  className?: string;
};

const ImageTicker: React.FC<ImageTickerProps> = ({
  images,
  direction = "left",
  className = "",
}) => {
  const animationClass = direction === "left" ? "ticker-track-left" : "ticker-track-right";

  return (
    <div className={clsx("relative w-full overflow-hidden bg-linear-to-r from-[#737373]/38 to-black/38 py-4 2xl:pt-[94px] 2xl:pb-[120px] border-[#7FE4FF] border-t-2 border-b-2 2xl:border-t-8 2xl:border-b-8 ", className)}>
      <div className={clsx("flex w-max", animationClass, "space-x-6 items-center")}>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex items-center md:space-x-3 2xl:space-x-[40px] text-white text-sm md:px-4 md:py-2 2xl:w-[480px] 2xl:h-[480px] rounded-xl 2xl:rounded-4xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full object-cover max-h-[280px] 2xl:max-h-[480px] 2xl:rounded-4xl"
            //   style={{ maxHeight: image.maxHeight || "300px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTicker;
