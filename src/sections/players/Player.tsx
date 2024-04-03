import Image from "next/image";
import img from "@/assets/image 17.png";
import { Playersd } from "@/constants";
const x = ["", "", "", "", "", "", "", "", "", "", ""];
const Player = ({ id }: { id: number }) => {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 md:gap-8">
      <div className="col-span-2 md:m-0 mb-8 p-4 flex gap-6">
        <Image
          unoptimized
          src={img}
          alt={"player's img"}
          className="w-auto lg:h-[272px] h-[145px] object-contain"
        />
        <div className="flex flex-col gap-6 w-full">
          <h1 className="sm:text-2xl text-lg sm:font-semibold font-bold text-primary">
            {Playersd[id].name}
          </h1>
          <div className="flex flex-wrap w-full">
            <div className="sm:w-1/2 w-full py-4 px-6 border-b border-b-[#CCCCCC]  text-sm text-primary ">
              <h3 className="font-medium">العمر </h3>
              <p className="text-[#666666]">{Playersd[id].age}</p>
            </div>
            <div className="sm:w-1/2 w-full py-4 px-6 border-b border-b-[#CCCCCC]">
              <h3 className="font-medium"> الفريق </h3>
              <p className="text-[#666666]">{Playersd[id].team}</p>
            </div>
            <div className="w-full py-4 px-6 border-b border-b-[#CCCCCC]">
              <h3 className="font-medium"> النادي </h3>
              <p className="text-[#666666]">{Playersd[id].club}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="p-4 bg-[#FCFCFD] rounded-lg mb-8 shadow-md">
          <div className="text-sm flex items-center">
            <p className=" font-medium flex-1 text-[#4D4D4D]">كارلو انشيلوتي</p>
            <p className="font-semibold text-[#4D4D4D]">مدرب</p>
          </div>
          {x.map((item, index) => (
            <div key={index} className="flex gap-3 mt-3">
              <p className="text-sm text-[#4D4D4D] font-bold w-5">
                {index + 1}
              </p>
              <p className="text-sm text-[#4D4D4D] flex-1">تيبو كورتوا</p>
              <p className="text-sm text-[#4D4D4D]">حارس</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-1 col-span-2">
        <h1 className="text-2xl font-bold text-primary mb-8">المسابقات</h1>
        <div className="p-4 bg-[#FCFCFD] rounded-lg">
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
          <div className="py-4 px-6 border-b border-b-[#CCCCCC] text-sm">
            <p className="text-primary">كأس العالم للأندية</p>
            <p className="text=secondary">2014 2016 2017 2018 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
