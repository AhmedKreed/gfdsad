"use client";
import Image from "next/image";
import img from "@/assets/image4.png";
import { Key, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const TeamInfo = ({ ClubInfo }: { ClubInfo: any }) => {
  const [btn, setBtn] = useState(0);
  const x = ["", "", "", "", "", "", "", "", "", "", ""];
  return (
    <div className="p-4 col-span-2">
      <div className="flex sm:flex-row flex-col items-center gap-3 py-4 border-b border-b-[#CCCCCC]">
        <Image
          unoptimized
          src={img}
          alt={"club"}
          width={64}
          height={64}
          className="object-contain"
        />
        <h1 className="font-bold text-[30px] text-primary">ريال مدريد</h1>
      </div>
      <div className="mt-6 mb-8 flex border border-[#B3B3B3] rounded-lg text-sm text-primary font-semibold">
        <button
          className={`flex-1 h-[40px] ${
            btn === 0 ? "bg-[#F2F2F2] rounded-r-lg" : ""
          }`}
          onClick={() => setBtn(0)}
        >
          معلومات
        </button>
        <div className="w-[1px] bg-[#4D4D4D]" />
        <button
          className={`flex-1 h-[40px] ${btn === 1 ? "bg-[#F2F2F2]" : ""}`}
          onClick={() => setBtn(1)}
        >
          أخبار
        </button>
        <div className="w-[1px] bg-[#4D4D4D]" />
        <button
          className={`flex-1 h-[40px] ${btn === 2 ? "bg-[#F2F2F2]" : ""}`}
          onClick={() => setBtn(2)}
        >
          مباريات
        </button>
        <div className="w-[1px] bg-[#4D4D4D]" />
        <button
          className={`flex-1 h-[40px] ${
            btn === 3 ? "bg-[#F2F2F2] rounded-l-lg" : ""
          }`}
          onClick={() => setBtn(3)}
        >
          انتقالات
        </button>
      </div>
      <div className="p-4 mb-8 flex flex-col">
        <div className="flex text-sm text-primary font-medium bg-[#FCFCFD] rounded-lg">
          <p className="flex-1 py-[26px] px-4 border-b border-[#CCCCCC]">
            المحافظة : ------
          </p>
          <p className="flex-1 py-[26px] px-4 border-b border-[#CCCCCC]">
            النادي : ------
          </p>
        </div>

        {btn === 0 ? (
          <div>
            <Accordion type="single" collapsible>
              {ClubInfo[btn].infos.map(
                (item: any, index: Key | null | undefined) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="py-[10px] px-4 text-sm text-primary font-semibold border-b border-[#CCCCCC]"
                  >
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    {item.info.map((item: any, i: number) => (
                      <AccordionContent
                        key={i}
                        className="text-sm text-secondary font-medium"
                      >
                        {item}
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                )
              )}
            </Accordion>
            <div className="flex">
              <Link
                href={""}
                className="py-[26px] w-full px-4 text-sm text-primary font-semibold border-b border-[#CCCCCC]"
              >
                لاعبين
              </Link>
            </div>
          </div>
        ) : (
          ClubInfo[btn].infos.map(
            (item: any, index: Key | null | undefined) => (
              <p
                key={index}
                className={`py-[26px] px-4 text-sm text-primary font-medium ${
                  ClubInfo[btn].infos.length - 1 === index
                    ? ""
                    : "border-b border-[#CCCCCC]"
                }`}
              >
                {item}
              </p>
            )
          )
        )}
      </div>
    </div>
  );
};

export default TeamInfo;
