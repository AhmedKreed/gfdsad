import Image from "next/image";
import { Matche } from "@/constants";
import TeamPlayers from "@/components/TeamPlayers";
import goal from "@/assets/Vector (3).png";
import yellowcard from "@/assets/image 16.png";

const Match = ({ id }: { id: number }) => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-8">
      <div className="col-span-2 mb-10">
        <div className="p-4 flex flex-col gap-8 rounded-xl bg-[#FCFCFD]">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-2 sm:m-0 mb-4">
              {" "}
              <Image
                unoptimized
                src={Matche[id].img}
                alt={"league"}
                width={32}
                height={32}
                className="object-contain"
              />
              <h3 className="text-lg font-bold sm:flex-auto flex-1 text-primary">
                {Matche[id].league}
              </h3>
            </div>
            <p className="text-secondary font-medium text-sm">
              2024/3/13 <span className="ml-[6px]">19:45</span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center min-h-[112px]">
              <Image
                unoptimized
                src={Matche[id].teams.theHost.img}
                alt={Matche[id].teams.theHost.name}
                width={72}
                height={72}
                className="object-contain mb-4 sm:w-[72px] sm:h-[72px] w-12 h-12"
              />
              <h3 className="text-[#4D4D4D] font-bold">
                {Matche[id].teams.theHost.name}
              </h3>
            </div>
            <p className="text-primary text-bold text-base sm:text-lg">
              {Matche[id].teams.theHost.goal.number}
            </p>
            <span
              className={`${
                Matche[id].isPlayed
                  ? "bg-[#E6E6E6] text-secondary"
                  : Matche[id].isPlaying
                  ? "bg-[#FEF3F2] text-[#B42318]"
                  : "bg-[#F9F5FF] text-[#135CB8]"
              } sm:text-sm text-xs text-center font-medium py-2 px-6 rounded-2xl h-fit`}
            >
              {Matche[id].isPlaying
                ? `${Matche[id].Time} | مباشر`
                : Matche[id].Time}
            </span>
            <p className="text-primary text-bold text-base sm:text-lg ">
              {Matche[id].teams.theGuest.goal.number}
            </p>
            <div className="flex flex-col items-center">
              <Image
                unoptimized
                src={Matche[id].teams.theGuest.img}
                alt={Matche[id].teams.theGuest.name}
                width={72}
                height={72}
                className="object-contain mb-4 sm:w-[72px] sm:h-[72px] w-12 h-12"
              />
              <h3 className="text-[#4D4D4D] font-bold text-left">
                {Matche[id].teams.theGuest.name}
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center text-secondary font-medium text-sm relative gap-[90px]">
            <p className="max-w-[140px]">الحكم/داني ماكيلي</p>
            <p className="h-fit absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              الجولة/16
            </p>
            <p className="max-w-[140px] text-left">
              ملعب/لويس كومبانيس الأولمبي
            </p>
          </div>
        </div>
      </div>
      <nav className="md:col-span-1 col-span-2 p-4 bg-[#FCFCFD] rounded-xl flex flex-col gap-6 h-fit shadow-lg">
        <div className="flex">
          <h2 className="font-bold text-primary w-[50%]">
            {Matche[id].teams.theGuest.name}
          </h2>
          <h2 className="font-bold text-primary w-[50%]">
            {Matche[id].teams.theHost.name}
          </h2>
        </div>
        <div className="h-fit w-[100%] flex gap-3 items-center">
          <Image unoptimized src={goal} alt={"goal"} width={18} height={18} />
          <div>
            <p className="text-secondary font-medium text-sm">
              <span className="ml-2">4</span> جود بيلنجهام
            </p>
          </div>
        </div>
        <div className="h-fit w-[50%] mr-auto flex gap-3 items-center">
          <Image
            unoptimized
            src={yellowcard}
            alt={"yellowcard"}
            width={18}
            height={18}
          />
          <div>
            <p className="text-secondary font-medium text-sm">
              <span className="ml-2">8</span> جود بيلنجهام
            </p>
          </div>
        </div>
        <div className="h-fit w-[100%] flex gap-3 items-center">
          <Image unoptimized src={goal} alt={"goal"} width={18} height={18} />
          <div>
            <p className="text-secondary font-medium text-sm">
              <span className="ml-2">11</span> جود بيلنجهام
            </p>
          </div>
        </div>
        <div className="h-fit w-[50%] mr-auto flex gap-3 items-center">
          <Image
            unoptimized
            src={yellowcard}
            alt={"yellowcard"}
            width={18}
            height={18}
          />
          <div>
            <p className="text-secondary font-medium text-sm">
              <span className="ml-2">59</span> جود بيلنجهام
            </p>
          </div>
        </div>
      </nav>
      <div className="col-span-2 p-4 rounded-lg bg-[#FCFCFD]">
        <h1 className="text-primary text-2xl font-bold mb-10">التشكيلة</h1>
        <div className="flex justify-between mb-8">
          <h3 className="font-bold text-secondary">
            {Matche[id].teams.theGuest.name}
          </h3>
          <h3 className="font-bold text-secondary">
            {Matche[id].teams.theHost.name}
          </h3>
        </div>

        <div className="flex justify-between">
          <div>
            <TeamPlayers id={id} isHost />
          </div>
          <div className="h-[480px] m-auto bg-[#CCCCCC] w-[1px]" />
          <div>
            <TeamPlayers id={id} isHost={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Match;
