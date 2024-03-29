"use client";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { useState } from "react";
const Page = () => {
  const [email, setEmail] = useState("");
  return (
    <div className=" h-full flex items-center flex-1 padding-Y sm:w-[360px] w-[300px] m-auto">
      <div>
        <Image
          unoptimized
          src={logo}
          alt={"logo"}
          width={48}
          height={48}
          className="object-contain mx-auto mb-6"
        />
        <div className="text-center mb-8">
          <h1 className="text-primary text-3xl font-semibold mb-3">
            نسيت كلمة المرور
          </h1>
          <p className="text-secondary">
            ادخل البريد الإكتروني أدناع لتلقي إعادة تعيين كلمة المرور الخاصة بك
          </p>
        </div>

        <form action="" className="flex flex-col justify-stretch w-[full]">
          <div className="flex flex-col justify-start gap-[6px] mb-[20px]">
            <label
              htmlFor="email"
              className="text-[#4D4D4D] text-[14px] font-medium"
            >
              البريد الإلكتروني
            </label>
            <input
              className="rounded-lg border border-[#B3B3B3] py-[10px] px-[14px] outline-none"
              name="email"
              type="email"
              id="email"
              required
              placeholder="ادخل البريد الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Link
            className="rounded-lg text-center bg-button p-[10px] text-white font-semibold mb-8"
            href={`/login/forgot/${email}`}
          >
            ارسل
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
