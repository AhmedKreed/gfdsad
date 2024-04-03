"use client";
import Image from "next/image";
import img from "@/assets/image4.png";
import { useState } from "react";
import { ClubInfo } from "@/constants";
import img1 from "@/assets/image 18.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Club = ({ id }: { id: number }) => {
  const [btn, setBtn] = useState(0);
  const x = ["", "", "", "", "", "", "", "", "", "", ""];
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
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
                {ClubInfo[btn].infos.map((item: any, index) => (
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
                ))}
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
            ClubInfo[btn].infos.map((item: any, index) => (
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
            ))
          )}
        </div>
      </div>
      <div className="md:col-span-1 col-span-2">
        <h1 className="text-2xl text-primary font-bold">التشكيلة</h1>
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

export default Club;
