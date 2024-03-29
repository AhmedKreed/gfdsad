"use client";
import Image from "next/image";
import logo from "@/assets/Icon (1).png";
import stadiums from "@/assets/image20(1).png";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Link from "next/link";

const Reservation = () => {
  const [date, setDate] = useState<any>();
  const [stadium, setStadium] = useState("6V6");
  const [time, setTime] = useState("90 دقيقة");
  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 gap-8">
      <div className="col-span-2">
        <h1 className="mb-3 text-primary text-2xl font-bold">سوكر وورلد</h1>
        <div className="flex items-center gap-3 mb-8">
          <Image
            unoptimized
            src={logo}
            alt={"logo"}
            className="w-auto h-auto"
          />{" "}
          <span className="text-sm medium text-secondary">الرياض</span>
        </div>
        <Image
          unoptimized
          src={stadiums}
          alt={"stadium"}
          className="w-full h-auto object-cover mb-6"
        />
        <div className="p-4 mb-8">
          <h3 className="text-base font-bold text-primary mb-3">لمحة عامة</h3>
          <p className="text-xs font-medium text-secondary">
            جرافيتي هو ملعب كرة قدم يقع في البحرين. تتميز بإضاءة ممتازة وأفضل
            رعاية للعملاء. جرافيتي هو ملعب خارجي في الزلاق. إنه يوفر مكانًا
            مثاليًا لكرة القدم
          </p>
        </div>

        <h1 className="text-2xl text-primary font-bold mb-8">موقع الملعب</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237685.10574182984!2d40.011356168989145!3d21.43593476511423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2z2YXZg9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2sly!4v1711506137515!5m2!1sar!2sly"
          width="600"
          height="450"
          className="border-0 w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <nav className="col-span-2 lg:col-span-1">
        <h1 className="text-primary text-2xl font-bold mb-6">
          اختر التاريخ والوقت
        </h1>
        <h3 className="text-bold text-lg font-bold mb-6">التاريخ</h3>
        <form action="">
          <Calendar
            required
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md calender mb-8 p-0"
          />
          <h3 className="text-bold text-lg font-bold mb-6">مقاسات الملعب</h3>
          <div className="mt-[5px] flex flex-1 border border-[#B3B3B3] rounded-lg text-[#4D4D4D] sm:text-sm text-xs font-semibold cursor-pointer mb-8 ">
            <div
              className={`py-[10px] flex-1 text-center ${
                stadium === "4V4" ? "bg-button text-white rounded-r-lg" : ""
              }`}
              onClick={() => setStadium("4V4")}
            >
              4V4
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-[10px] flex-1 text-center ${
                stadium === "6V6" ? "bg-button text-white " : ""
              }`}
              onClick={() => setStadium("6V6")}
            >
              6V6
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-[10px] flex-1 text-center ${
                stadium === "8V8" ? "bg-button text-white " : ""
              }`}
              onClick={() => setStadium("8V8")}
            >
              8V8
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-[10px] flex-1 text-center ${
                stadium === "12V12" ? "bg-button text-white rounded-l-lg" : ""
              }`}
              onClick={() => setStadium("12V12")}
            >
              12V12
            </div>
          </div>
          <h3 className="text-bold text-lg font-bold mb-6">مدة المباراة</h3>
          <div className="mb-8 flex justify-evenly border border-[#B3B3B3] rounded-lg text-[#4D4D4D] sm:text-sm text-xs font-semibold cursor-pointer ">
            <div
              className={`py-[10px] flex-1 text-center ${
                time === "30 دقيقة" ? "bg-button text-white rounded-r-lg" : ""
              }`}
              onClick={() => setTime("30 دقيقة")}
            >
              30 دقيقة
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-[10px] flex-1 text-center ${
                time === "60 دقيقة" ? "bg-button text-white " : ""
              }`}
              onClick={() => setTime("60 دقيقة")}
            >
              60 دقيقة
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-[10px] flex-1 text-center ${
                time === "90 دقيقة" ? "bg-button text-white " : ""
              }`}
              onClick={() => setTime("90 دقيقة")}
            >
              90 دقيقة
            </div>
            <div className="w-[1px] bg-[#4D4D4D]" />
            <div
              className={`py-[10px] flex-1 text-center ${
                time === "120 دقيقة" ? "bg-button text-white rounded-l-lg" : ""
              }`}
              onClick={() => setTime("120 دقيقة")}
            >
              120 دقيقة
            </div>
          </div>
          <div className="bg-button text-white rounded-lg flex justify-center w-full py-[10px]">
            <Link href={"/payment"} className="w-full text-center">
              أكمل الدفع
            </Link>
          </div>
        </form>
      </nav>
    </section>
  );
};

export default Reservation;
