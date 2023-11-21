import Image from "next/image";
import { CountDown } from "./CountDown";

export const CountdownCampaign = () => {
  return (
    <div
      className=" flex flex-row mlg:justify-center relative flex-wrap break-words max-w-[430px] xl:max-w-[790px] w-full backdrop-blur-sm rounded-[16px]  p-10 gap-10 bg-[#18181b] border-[1px] border-[#FFA532] opacity-[.9] my-10 "
      style={{
        boxShadow: "0px 0px 8px 3px rgba(255, 112, 0, 0.20)",
      }}
    >
      <div className=" mlg:hidden absolute left-[-100px] top-[-150px] rounded-[262px] w-[262px] h-[262px] bg-[#FF7000] opacity-[.2] blur-[50px] z-20" />
      <div className=" mlg:hidden absolute right-[-100px] bottom-[-100px] rounded-[300px] w-[300px] h-[300px] bg-[#FF7000] opacity-[.4] blur-[100px] z-20" />
      <Image
        className="cursor-pointer w-[365px]  lg:w-[365px] h-[300px] lg:h-[365px] z-30"
        src="/coffeecub.png"
        width={365}
        height={365}
        alt="logo"
      />
      <div className=" flex relative flex-col flex-1 lg:h-[365px] gap-y-5">
        <span className="text-[32px] font-semibold">
          CaffeineCraft Campaign
        </span>
        <div className="flex w-[80px] justify-center items-center  rounded-full bg-[#461804] border-[1px] border-tertiary">
          <h4 className=" text-white font-semibold px-[6px] py-1">9 Piece</h4>
        </div>
        <div className=" lg:absolute bottom-0  w-full">
          <h3>END CAMPAIGN</h3>
          <CountDown />
        </div>
      </div>
    </div>
  );
};