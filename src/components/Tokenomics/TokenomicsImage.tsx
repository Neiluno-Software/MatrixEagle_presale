import * as React from "react";

interface TokenomicsImageProps {
  src: string;
  alt?: string;
}

export const TokenomicsImage: React.FC<TokenomicsImageProps> = ({
  src,
  alt = "Tokenomics visualization"
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain w-full aspect-[1.45] max-w-[587px] 2xl:max-w-[1160px] 3xl:max-w-[1555px] max-md:mt-10 max-md:max-w-full"
    />
  );
};
