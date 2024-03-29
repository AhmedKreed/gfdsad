import icon from "@/assets/Icon (2).png";
import Image from "next/image";
import payment from "@/assets/Payment method icon.png";
import payment1 from "@/assets/Payment method icon (1).png";
import Link from "next/link";

const Payment = () => {
  return (
    <div className="p-4 bg-white rounded-xl w-[480px]">
      <Link href={"/reservation"}>
        <Image
          unoptimized
          src={icon}
          alt={"icon"}
          className="mr-auto mb-7"
          priority
        />
      </Link>
      <h3 className="text-lg text-primary font-bold mb-[20px]">
        أختيار البطاقة
      </h3>
      <form action="">
        <div className="p-4 border border-[#8EC0FF] rounded-lg mb-3">
          <div className="flex items-start mr-1 ">
            <input
              type="radio"
              id="radio"
              name="radio"
              value="1"
              className="w-4 h-4 mt-[6px]"
            />

            <Image
              unoptimized
              src={payment}
              alt={"payment"}
              width={46}
              height={32}
              className="mr-1 object-contain"
            />
            <div className=" text-sm mr-3 flex-1">
              <p className="font-medium text-[#003F8F] text-base">
                1234 1234 **** ****
              </p>
              <p className="text-[#2E7DE1] mb-2">06/2024</p>
              <p className="text-[#135CB8] font-semibold text-left">تعديل</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-[#8EC0FF] rounded-lg mb-8">
          <div className="flex items-start mr-1 ">
            <input
              type="radio"
              id="radio"
              name="radio"
              value="2"
              className="w-4 h-4 mt-[6px]"
            />

            <Image
              unoptimized
              src={payment1}
              alt={"payment"}
              width={46}
              height={32}
              className="mr-1 object-contain"
            />
            <div className=" text-sm mr-3 flex-1">
              <p className="font-medium text-[#003F8F] text-base">
                1234 1234 **** ****
              </p>
              <p className="text-[#2E7DE1] mb-2">06/2024</p>
              <p className="text-[#135CB8] font-semibold text-left">تعديل</p>
            </div>
          </div>
        </div>
        <div className="flex mb-6">
          <Link
            className=" text-[#4D4D4D] py-[10px] rounded-lg border border-[#B3B3B3] w-full font-semibold text-center"
            href={"/payment/addPayment"}
          >
            اضافة بطاقة جديدة
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            className=" text-[#4D4D4D] py-[10px] rounded-lg border border-[#B3B3B3] w-1/2 font-semibold text-center"
            href={"/reservation"}
          >
            إلغاء
          </Link>
          <button className=" text-white bg-[#3877c9] py-[10px] rounded-lg border border-[#B3B3B3] w-1/2 font-semibold text-center">
            تأكيد
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
