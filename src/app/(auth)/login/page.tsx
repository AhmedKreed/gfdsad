import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-1 padding-Y">
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
            تسجيل دخول لحسابك
          </h1>
          <p className="text-secondary">اهلا بك! يرجى ادخال البيانات التالية</p>
        </div>

        <form
          action=""
          className="flex flex-col justify-stretch sm:w-[360px] w-[300px]"
        >
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
              placeholder="ادخل البريد الالكتروني"
              required
            />
          </div>

          <div className="flex flex-col justify-start gap-[6px] mb-6">
            <label
              htmlFor="password"
              className="text-[#4D4D4D] text-[14px] font-medium"
            >
              كلمة المرور
            </label>
            <input
              className="rounded-lg border border-[#B3B3B3] py-[10px] px-[14px] sm:w-[360px] w-[300px] outline-none"
              name="password1"
              id="password1"
              type="password"
              placeholder="أدخل كلمة المرور"
              required
            />
          </div>

          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="1"
                className="w-4 h-4"
              />
              <label htmlFor="checkbox" className="text-sm">
                {" "}
                تذكرني
              </label>
            </div>
            <Link
              href={"/login/forgot"}
              className="text-[#135CB8] text-sm font-medium "
            >
              نسيت كلمة المرور
            </Link>
          </div>

          <button className="rounded-lg text-center bg-button p-[10px] text-white font-semibold mb-8">
            تسجيل دخول
          </button>

          <p className="text-center text-primary text-sm">
            ليس لديك حساب مسبقاً{" "}
            <Link className=" text-[#135CB8]" href={"/signup"}>
              إنشاء حساب
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
