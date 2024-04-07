import Image from "next/image";
import img from "@/assets/image 17.png";

const PlayerInfo = ({ Playersd }: { Playersd: any }) => {
  return (
    <div className="col-span-2 md:m-0 mb-8 p-4 flex gap-6">
      <Image
        unoptimized
        src={img}
        alt={"player's img"}
        className="w-auto lg:h-[272px] h-[145px] object-contain"
      />
      <div className="flex flex-col gap-6 w-full">
        <h1 className="sm:text-2xl text-lg sm:font-semibold font-bold text-primary">
          {Playersd.name}
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="sm:w-1/2 w-full py-4 px-6 border-b border-b-[#CCCCCC]  text-sm text-primary ">
            <h3 className="font-medium">العمر </h3>
            <p className="text-[#666666]">{Playersd.age}</p>
          </div>
          <div className="sm:w-1/2 w-full py-4 px-6 border-b border-b-[#CCCCCC]">
            <h3 className="font-medium"> الفريق </h3>
            <p className="text-[#666666]">{Playersd.team}</p>
          </div>
          <div className="w-full py-4 px-6 border-b border-b-[#CCCCCC]">
            <h3 className="font-medium"> النادي </h3>
            <p className="text-[#666666]">{Playersd.club}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
