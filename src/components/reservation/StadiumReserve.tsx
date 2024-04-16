"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ToastWithTitle } from "@/components/buttons/Toast";

const StadiumReserve = () => {
  const calender = new Date();
  const [date, setDate] = useState<any>(new Date());

  const [reserveDate, setReserveDate] = useState<any>();

  const [stadium, setStadium] = useState("4V4");

  const [time, setTime] = useState("30 دقيقة");

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <nav className="col-span-2 lg:col-span-1">
      <h1 className="text-primary text-2xl font-bold mb-6">
        اختر التاريخ والوقت
      </h1>
      <h3 className="text-bold text-lg font-bold mb-6">التاريخ</h3>
      <form action="" onSubmit={(e) => handleSubmit(e)} className="relative">
        <Calendar
          fromDate={calender}
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
        <div className="flex flex-col justify-start gap-[6px] mb-[20px]">
          <label htmlFor="email" className="text-[#4D4D4D] text-sm font-medium">
            رقم الهاتف
            <span className="text-xs text-red-600">
              {" "}
              *تأكد من كتابة رقم الهاتف بشكل صحيح
            </span>
          </label>
          <input
            className="rounded-lg border border-[#B3B3B3] py-[10px] px-[14px] outline-none"
            type="text"
            inputMode="numeric"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="number"
            name="number"
            placeholder="ادخل رقم الهاتف"
          />
        </div>

        <ToastWithTitle
          date={date.toLocaleDateString()}
          stadium={"سوكر وورلد"}
          isDisabled={inputValue ? false : true}
        />
      </form>
    </nav>
  );
};

export default StadiumReserve;
