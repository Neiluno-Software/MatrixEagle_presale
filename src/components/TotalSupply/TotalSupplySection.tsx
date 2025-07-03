import { useTranslation } from "react-i18next";
import { TokenomicsImage } from "../Tokenomics/TokenomicsImage"
import { TotalSupply } from "../Tokenomics/TotalSupply"

const TotalSupplySection = () => {
    const { t } = useTranslation();
  
  return (
    <div>
        <div className="bg-black/26 w-full 2xl:mt-[60px] 3xl:mt-[100px] 2xl:pt-[30px] 3xl:pt-[100px]">
        <TotalSupply
          totalSupply={t("tokenomics.totalSupply")}
          description={t("tokenomics.description")}
        />
        <div className="w-full flex justify-center ">
          <div className="w-[90%] flex flex-col items-center ">
            <div className="relative flex pl-15 md:pl-40 2xl:pl-70 3xl:pl-80">
              {/* <div className="absolute top-[60px] inset-0 z-20 w-[40%] h-full">
              <ThreeDNetwork />
            </div> */}
              <TokenomicsImage
                src="/tokenomics_graph.svg"
                alt={t("tokenomics.imageAlt")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalSupplySection