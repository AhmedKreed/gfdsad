import Image from "next/image";
import goal from "@/assets/Vector (3).png";
import yellowcard from "@/assets/image 16.png";

const MatchHighlights = ({ Matche }: { Matche: any }) => (
  <nav className="md:col-span-1 col-span-2 p-4 bg-[#FCFCFD] rounded-xl flex flex-col gap-6 h-fit shadow-lg">
    <div className="flex">
      <h2 className="font-bold text-primary w-[50%]">
        {Matche.teams.theGuest.name}
      </h2>
      <h2 className="font-bold text-primary w-[50%]">
        {Matche.teams.theHost.name}
      </h2>
    </div>
    <div className="h-fit w-[100%] flex gap-3 items-center">
      <Image unoptimized src={goal} alt={"goal"} width={18} height={18} />
      <div>
        <p className="text-secondary font-medium text-sm">
          <span className="ml-2">4</span> جود بيلنجهام
        </p>
      </div>
    </div>
    <div className="h-fit w-[50%] mr-auto flex gap-3 items-center">
      <Image
        unoptimized
        src={yellowcard}
        alt={"yellowcard"}
        width={18}
        height={18}
      />
      <div>
        <p className="text-secondary font-medium text-sm">
          <span className="ml-2">8</span> جود بيلنجهام
        </p>
      </div>
    </div>
    <div className="h-fit w-[100%] flex gap-3 items-center">
      <Image unoptimized src={goal} alt={"goal"} width={18} height={18} />
      <div>
        <p className="text-secondary font-medium text-sm">
          <span className="ml-2">11</span> جود بيلنجهام
        </p>
      </div>
    </div>
    <div className="h-fit w-[50%] mr-auto flex gap-3 items-center">
      <Image
        unoptimized
        src={yellowcard}
        alt={"yellowcard"}
        width={18}
        height={18}
      />
      <div>
        <p className="text-secondary font-medium text-sm">
          <span className="ml-2">59</span> جود بيلنجهام
        </p>
      </div>
    </div>
  </nav>
);

export default MatchHighlights;
