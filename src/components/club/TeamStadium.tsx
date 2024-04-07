import Image from "next/image";
import img1 from "@/assets/image 18.png";

const TeamStadium = () => (
  <div className="col-span-2">
    <h1 className="text-2xl font-bold text-primary mb-8">الملعب</h1>
    <div className="p-4 bg-[#FCFCFD] rounded-lg">
      <div className="flex md:flex-row flex-col md:gap-0 gap-3 mb-8 border-b border-b-[#CCCCCC] text-sm font-medium items-center text-primary py-[26px] px-6">
        <p className="flex-1 ">أسم الملعب: سانتياغو برنابيو</p>
        <p className="flex-1">تأريخ البناء: 1955</p>
      </div>
      <Image
        unoptimized
        src={img1}
        alt={"stadium"}
        width={370}
        height={370}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

export default TeamStadium;
