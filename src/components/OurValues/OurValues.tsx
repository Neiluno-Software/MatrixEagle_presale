import { ThreeDNetwork } from "../Animated3dLines/ThreeDNetwork";
import StakingProgram from "../StakingProgram/StakingProgram";

const OurValues = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-20 w-[40%] h-full ">
        <ThreeDNetwork />
      </div>
      <div className="bg-[url('/bg3.png')]  bg-no-repeat bg-[length:100%_auto] bg-[center_-40px] md:bg-[center_-130px] 2xl:bg-[center_-320px] w-full pb-6">
        <div className="flex flex-col  items-center">
          <div className="flex justify-center py-3">
            <p className="bg-[#F6B38732] text-[#FFA100] text-xl md:text-2xl 2xl:text-[38px] py-1 px-4 rounded-[20px]">
              Our Values
            </p>
          </div>
          <hr className="mb-7 mx-auto my-0 w-full h-[1px] bg-gradient-to-r from-[#030B15] via-neutral-400 to-[#030B15] border-0 max-w-[1488px]" />

          <div className="w-[60%] ">
            <StakingProgram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
