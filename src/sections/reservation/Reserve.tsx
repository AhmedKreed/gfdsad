"use client";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import imgstadium from "@/assets/image19.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
const stadiums = {
  img: imgstadium,
  title: "سوكر وورلد",
  desc: "جرافيتي هو ملعب كرة قدم يقع في البحرين. تتميز بإضاءة ممتازة وأفضل رعاية للعملاء. جرافيتي هو ملعب خارجي في الزلاق. إنه يوفر مكانًا مثاليًا لكرة القدم",
  price: "يبدأ من 100 ريال",
};
const options = [
  { value: "الرياض", label: "الرياض" },
  { value: "المدينة المنورة", label: "المدينة المنورة" },
  { value: "الخرج", label: "الخرج" },
  { value: "أبها", label: "أبها" },
  { value: "الطائف", label: "الطائف" },
  { value: "مكة المكرمة", label: "مكة المكرمة" },
  { value: "جدة", label: "جدة" },
];
let stadium: {
  img: StaticImageData;
  title: string;
  desc: string;
  price: string;
}[] = [];
for (let index = 0; index < 12; index++) {
  stadium.push(stadiums);
}
const Reserve = ({ allStadium }: { allStadium: any[] }) => {
  // restoring the locations in the useState
  const [locations, setLocations] = useState<string[]>();
  const onInputChange = (x: any, { action }: any) => {
    if (action === "select-option") {
      setLocations(x);
      // when adding from the select
    } else if (action === "clear") {
      setLocations(undefined);
      // when clearing from the select
    } else if (action === "remove-value") {
      locations?.length === 1 ? setLocations(undefined) : setLocations(x);
      // when removing certain value from the select
    }
  };
  return (
    <section className="grid lg:grid-cols-4 grid-cols-1 gap-8 mb-8">
      <nav className="lg:col-span-1 col-span-3">
        <div>
          <h1 className="text-primary font-bold text-2xl mb-8">التصنيفات</h1>
          <span className="text-[#4D4D4D] text-sm font-medium">
            فئات الملاعب
          </span>
          <Select
            placeholder="المنطقة"
            instanceId={1}
            components={makeAnimated()}
            isMulti
            name="locations"
            options={options}
            className="w-full mt-2"
            classNamePrefix="select"
            onInputChange={onInputChange}
            onChange={onInputChange}
          />
        </div>
        <div className="mt-8">
          <h1 className="text-primary font-bold text-2xl mb-8">فئات الملاعب</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-medium text-sm text-[#4D4D4D] pr-4 border border-[#CCCCCC] rounded-lg">
              <input
                type="checkbox"
                id="checkboxa"
                name="checkboxa"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="checkboxa"
                className="text-sm cursor-pointer py-4 w-full"
              >
                {" "}
                كرة قدم
              </label>
            </div>

            <div className="flex items-center gap-2 font-medium text-sm text-[#4D4D4D] pr-4 border border-[#CCCCCC] rounded-lg">
              <input
                type="checkbox"
                id="checkboxb"
                name="checkboxb"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="checkboxb"
                className="text-sm cursor-pointer py-4 w-full"
              >
                {" "}
                كرة سلة
              </label>
            </div>

            <div className="flex items-center gap-2 font-medium text-sm text-[#4D4D4D] pr-4 border border-[#CCCCCC] rounded-lg">
              <input
                type="checkbox"
                id="checkboxc"
                name="checkboxc"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="checkboxc"
                className="text-sm cursor-pointer py-4 w-full"
              >
                {" "}
                بادل
              </label>
            </div>
            <div className="flex items-center gap-2 font-medium text-sm text-[#4D4D4D] pr-4 border border-[#CCCCCC] rounded-lg">
              <input
                type="checkbox"
                id="checkboxd"
                name="checkboxd"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="checkboxd"
                className="text-sm cursor-pointer py-4 w-full"
              >
                {" "}
                كرة طائرة
              </label>
            </div>
          </div>
        </div>
      </nav>
      <div className="col-span-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {allStadium.map((item, index) => (
          <Link
            key={index}
            className="p-4 reserve flex flex-col bg-[#fcfcfd]"
            href={`/reservation/${item.id}`}
          >
            <Image
              unoptimized
              src={imgstadium}
              alt={"stadium"}
              className="object-cover mb-6 w-full h-auto"
            />
            <h1 className="mb-6 text-xl font-semibold text-primary">
              {item.name}
            </h1>
            <p className="mb-4 text-sm text-secondary font-medium leading-[18px]">
              {item.about}
            </p>
            <p className="font-bold text-primary mt-auto">{`يبدأ من ${item.rent} ريال`}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Reserve;
