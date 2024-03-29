"use client";
import Link from "next/link";
import payment from "@/assets/Payment method icon.png";
import payment1 from "@/assets/Payment method icon (1).png";
import { SetStateAction, useState } from "react";

const AddPayment = () => {
  const [img, setImg] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    const values = value
      .split("")
      .filter((letter) => Number(letter))
      .map((letter, index) =>
        index === 4 || index === 8 || index === 12 ? ` ${letter}` : letter
      )
      .join("");
    console.log(values);
    setImg(values);
  };
  return (
    <div className="p-4 bg-white rounded-xl w-[480px]">
      <h3 className="font-semibold text-lg text-primary mb-6">
        اضافة بطاقة جديدة
      </h3>
      <form action="" className="flex mb-4 flex-wrap">
        <div className="flex flex-col sm:w-2/3 w-full gap-[6px] ">
          <label htmlFor="text" className="text-[#4D4D4D] font-medium text-sm">
            اسم البطاقة
          </label>
          <input
            type="text"
            required
            id="text"
            name="text"
            placeholder="اسم البطاقة"
            className=" py-[11px] px-[14px] rounded-lg border border-[#B3B3B3] outline-none h-[50px]"
          />
        </div>
        <div className="flex flex-col sm:w-1/3 w-1/2 gap-[6px] sm:pr-4 sm:pl-0 pl-2 max-sm:order-1 max-sm:mt-3">
          <label htmlFor="month" className="text-[#4D4D4D] font-medium text-sm">
            تاريخ الأنتهاء
          </label>
          <input
            type="month"
            required
            id="month"
            name="month"
            className=" py-[11px] px-[14px] rounded-lg border border-[#B3B3B3] outline-none h-[50px]"
          />
        </div>

        <div className="flex flex-col sm:w-2/3 w-full gap-[6px] mt-3">
          <label
            htmlFor="number"
            className="text-[#4D4D4D] font-medium text-sm"
          >
            رقم البطاقة
          </label>
          <input
            onChange={(e) => handleChange(e)}
            value={img}
            type="text"
            required
            id="number"
            name="number"
            maxLength={19}
            placeholder="ادخل رقم البطاقة"
            className=" py-[11px] px-[14px] payment rounded-lg border border-[#B3B3B3] outline-none h-[50px]"
          />
        </div>
        <div className="flex flex-col sm:w-1/3 w-1/2 gap-[6px] sm:pr-4 pr-2 max-sm:order-1 mt-3">
          <label
            htmlFor="current-password"
            className="text-[#4D4D4D] font-medium text-sm"
          >
            رمز التحقق
          </label>
          <input
            type="password"
            required
            id="current-password"
            name="current-password"
            maxLength={4}
            placeholder="رمز التحقق"
            className=" py-[11px] px-[14px] rounded-lg border border-[#B3B3B3] outline-none h-[50px]"
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </div>

        <div className="flex gap-3 w-full mt-8 order-2 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-1/2 flex">
            <Link
              href={"/payment"}
              className="text-[#4D4D4D] font-semibold text-center w-full border border-[#B3B3B3] rounded-lg py-[11px]"
            >
              إلغاء
            </Link>
          </div>

          <button className="rounded-lg bg-button text-white font-semibold text-center w-full sm:w-1/2 py-[11px]">
            اضافة
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPayment;
