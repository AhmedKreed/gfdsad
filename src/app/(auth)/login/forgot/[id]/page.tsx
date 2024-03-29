import Image from "next/image";
import logo from "@/assets/Logo.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className=" h-full flex items-center flex-1 padding-Y w-[312px] m-auto">
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
            تم أرسال لبريد الإلكتروني
          </h1>
          <p className="text-secondary">
            لقد أرسلنا بريد إلكتروني الى {params.id} مع رسالة إلكتروني لإعادة
            تعيين كلمة المرور الخاصة بك
          </p>
        </div>

        <form action="" className="flex flex-col justify-stretch w-[full]">
          <div className="flex flex-col justify-start gap-[6px] mb-[20px] InputOTP">
            <label
              htmlFor="email"
              className="text-[#4D4D4D] text-[14px] font-medium mb-2"
            >
              رمز التحقق
            </label>
            <InputOTP maxLength={6} required className="cursor-pointer">
              <InputOTPGroup className="gap-2">
                <InputOTPSlot
                  index={0}
                  className="rounded-lg border border-button dark:ring-red-500"
                />
                <InputOTPSlot
                  index={1}
                  className="rounded-lg border border-button "
                />
                <InputOTPSlot
                  index={2}
                  className="rounded-lg border border-button "
                />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="gap-2">
                <InputOTPSlot
                  index={3}
                  className="rounded-lg border border-button "
                />
                <InputOTPSlot
                  index={4}
                  className="rounded-lg border border-button "
                />
                <InputOTPSlot
                  index={5}
                  className="rounded-lg border border-button "
                />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button className="rounded-lg text-center bg-button p-[10px] text-white font-semibold mb-8">
            تأكيد
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
