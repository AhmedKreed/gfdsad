import Image from "next/image";
import logo from "@/assets/Logo.png";

const page = () => {
  return (
    <section className="w-full h-full flex justify-center items-center flex-1 padding-Y pb-0">
      <div className="h-fit">
        <Image
          unoptimized
          src={logo}
          alt={"logo"}
          width={48}
          height={48}
          className="object-contain mx-auto mb-6"
        />
        <div className="text-center mb-8">
          <h1 className="text-primary text-3xl font-semibold mb-3">طلبات</h1>
          <p className="text-secondary"> اهلا بك!</p>
        </div>

        <form
          action=""
          className="flex flex-col justify-stretch sm:w-[360px] w-[300px]"
        >
          <div className="flex flex-col justify-start gap-[6px] mb-6">
            <label
              htmlFor="textarea2"
              className="text-[#4D4D4D] text-[14px] font-medium"
            >
              المقترح | الشكوى | الطلب
            </label>
            <textarea
              className="rounded-lg min-h-[200px] border border-[#B3B3B3] py-[10px] px-[14px] sm:w-[360px] w-[300px] outline-none"
              name="textarea2"
              id="textarea2"
              autoComplete="off"
              placeholder="ادخل مقترحك\شكواك\طلب"
            />
          </div>

          {/* <div className="flex flex-col justify-start gap-[6px] mb-6">
            <label
              htmlFor="textarea1"
              className="text-[#4D4D4D] text-[14px] font-medium"
            >
              الشكوى
            </label>
            <textarea
              className="rounded-lg min-h-[200px] border border-[#B3B3B3] py-[10px] px-[14px] sm:w-[360px] w-[300px] outline-none"
              name="textarea1"
              id="textarea1"
              autoComplete="off"
              placeholder="اكتب شكواك"
            />
          </div>

          <div className="flex flex-col justify-start gap-[6px] mb-6">
            <label
              htmlFor="textarea"
              className="text-[#4D4D4D] text-[14px] font-medium"
            >
              الطلب
            </label>
            <textarea
              className="rounded-lg min-h-[200px] border border-[#B3B3B3] py-[10px] px-[14px] sm:w-[360px] w-[300px] outline-none"
              name="textarea"
              id="textarea"
              autoComplete="off"
              placeholder="اكتب طلبك"
            />
          </div> */}

          <button className="rounded-lg text-center bg-button p-[10px] text-white font-semibold mb-8">
            ارسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
