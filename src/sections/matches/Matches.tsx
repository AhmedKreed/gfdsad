"use client";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
import Link from "next/link";
import makeAnimated from "react-select/animated";
import leftArrow from "@/assets/Left arrow.png";
import rightArrow from "@/assets/Right arrow (1).png";
import { leagueimg1 } from "@/assets";
import { Matche } from "@/constants";
const options = [
  { value: "كرة قدم", label: "كرة قدم" },
  { value: "كرة السلة", label: "كرة السلة" },
  { value: "كرة اليد", label: "كرة اليد" },
  { value: "أبها", label: "أبها" },
  { value: "التنس", label: "التنس" },
  { value: "رياضات أخرى", label: "رياضات أخرى" },
];
const weekDays = [
  "السبت",
  "الاحد",
  "الااثنين",
  "الثلاثاء",
  "الاربعاء",
  "الخميس",
  "الجمعة",
];
const Matches = () => {
  const now = new Date();
  const day = now.getDay();
  const [sports, setSports] = useState<any>();
  const [arrows, setArrow] = useState<number>(day + 1);
  const onInputChange = (x: any, { action, prevInputValue }: any) => {
    if (action === "select-option") {
      setSports(x);
      // when adding from the select
    } else if (action === "clear") {
      setSports(undefined);
      // when clearing from the select
    } else if (action === "remove-value") {
      sports.length === 1 ? setSports(undefined) : setSports(x);
      // when removing certain value from the select
    }
  };
  const handleClick = (index: number) => {
    setArrow(index);
  };
  const handleLeftArrow = () => {
    setArrow((prev: any) => (prev === weekDays.length - 1 ? 0 : prev + 1));
  };
  const handleRightArrow = () => {
    setArrow((prev: any) => (prev ? prev - 1 : weekDays.length - 1));
  };
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 md:gap-8">
      <nav className="col-span-1 md:m-0 mb-8">
        <Select
          instanceId={1}
          components={makeAnimated()}
          isMulti
          name="sports"
          options={options}
          className="w-full mt-2"
          classNamePrefix="select"
          onInputChange={onInputChange}
          onChange={onInputChange}
        />
      </nav>
      <div className="col-span-2">
        <div className="flex gap-4 items-center mb-14">
          <Image
            unoptimized
            src={rightArrow}
            alt={"rightArrow"}
            width={18}
            height={18}
            className="object-contain max-sm:hidden w-auto h-auto"
            onClick={() => handleRightArrow()}
          />
          <div className="mt-[5px] sm:static relative w-full flex flex-1 border border-[#B3B3B3] rounded-lg text-[#4D4D4D] sm:text-sm text-xs font-semibold cursor-pointer ">
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[0]
                  ? "bg-button text-white rounded-r-lg"
                  : ""
              }`}
              onClick={() => handleClick(0)}
            >
              السبت
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[1] ? "bg-button text-white" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              الاحد
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[2] ? "bg-button text-white" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              الاثنين
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[3] ? "bg-button text-white" : ""
              }`}
              onClick={() => handleClick(3)}
            >
              الثلاثاء
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[4] ? "bg-button text-white" : ""
              }`}
              onClick={() => handleClick(4)}
            >
              الاربعاء
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[5] ? "bg-button text-white" : ""
              }`}
              onClick={() => handleClick(5)}
            >
              الخميس
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-2 flex-1 text-center ${
                weekDays[arrows!] === weekDays[6]
                  ? "bg-button text-white rounded-l-lg"
                  : ""
              }`}
              onClick={() => handleClick(6)}
            >
              الجمعة
            </div>
          </div>
          <Image
            unoptimized
            src={leftArrow}
            alt={"leftArrow"}
            width={18}
            height={18}
            className="object-contain max-sm:hidden"
            onClick={handleLeftArrow}
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="p-6 bg-[#FCFCFD] mb-8 rounded-lg">
            <div className="flex gap-2 items-center mb-8">
              <Image
                unoptimized
                src={leagueimg1}
                alt={"leagueimg"}
                width={32}
                height={32}
                className="object-contain"
              />
              <h1 className="text-primary font-bold text-lg">
                الدوري الإنجليزي  الممتاز
              </h1>
            </div>
            <div>
              {Matche.map((item) => (
                <div key={item.id} className=" flex flex-col gap-8 mt-8">
                  <Link
                    className="p-2 flex sm:flex-row flex-col justify-between items-center relative gap-24"
                    href={`/matches/${item.id}`}
                  >
                    <div className="flex sm:gap-2 sm:flex-row gap-4 flex-col  items-center ">
                      <Image
                        unoptimized
                        src={item.teams.theHost.img}
                        alt={item.teams.theHost.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                      <p className="font-medium text-[#4D4D4D] sm:text-sm text-xl">
                        {item.teams.theHost.name}
                      </p>
                    </div>
                    <span
                      className={`${
                        item.isPlayed
                          ? "bg-[#E6E6E6] text-secondary"
                          : item.isPlaying
                          ? "bg-[#FEF3F2] text-[#B42318]"
                          : "bg-[#F9F5FF] text-[#135CB8]"
                      } text-xs py-1 px-4 rounded-2xl h-fit absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
                    >
                      {item.isPlaying ? `${item.Time} | مباشر` : item.Time}
                    </span>
                    <div className="flex items-center sm:gap-2 sm:flex-row gap-4 flex-col relative">
                      <p className="font-medium text-[#4D4D4D] sm:text-sm text-xl">
                        {item.teams.theGuest.name}
                      </p>
                      <Image
                        unoptimized
                        src={item.teams.theGuest.img}
                        alt={item.teams.theHost.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  <div className="lines" />
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-[#FCFCFD] rounded-lg">
            <div className="flex gap-2 items-center mb-8">
              <Image
                unoptimized
                src={leagueimg1}
                alt={"leagueimg"}
                width={32}
                height={32}
                className="object-contain"
              />
              <h1 className="text-primary font-bold text-lg">
                الدوري الإنجليزي  الممتاز
              </h1>
            </div>
            <div>
              {Matche.map((item) => (
                <div key={item.id} className=" flex flex-col gap-8 mt-8">
                  <Link
                    className="p-2 flex sm:flex-row flex-col justify-between items-center relative gap-24"
                    href={`/matches/${item.id}`}
                  >
                    <div className="flex sm:gap-2 sm:flex-row gap-4 flex-col  items-center ">
                      <Image
                        unoptimized
                        src={item.teams.theHost.img}
                        alt={item.teams.theHost.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                      <p className="font-medium text-[#4D4D4D] sm:text-sm text-xl">
                        {item.teams.theHost.name}
                      </p>
                    </div>
                    <span
                      className={`${
                        item.isPlayed
                          ? "bg-[#E6E6E6] text-secondary"
                          : item.isPlaying
                          ? "bg-[#FEF3F2] text-[#B42318]"
                          : "bg-[#F9F5FF] text-[#135CB8]"
                      } text-xs py-1 px-4 rounded-2xl h-fit absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
                    >
                      {item.isPlaying ? `${item.Time} | مباشر` : item.Time}
                    </span>
                    <div className="flex items-center sm:gap-2 sm:flex-row gap-4 flex-col relative">
                      <p className="font-medium text-[#4D4D4D] sm:text-sm text-xl">
                        {item.teams.theGuest.name}
                      </p>
                      <Image
                        unoptimized
                        src={item.teams.theGuest.img}
                        alt={item.teams.theHost.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  <div className="lines" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;
