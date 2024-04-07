import Image from "next/image";
import Link from "next/link";

const MatchResult = ({ Matche }: { Matche: any }) => (
  <div className="col-span-2 mb-10">
    <div className="p-4 flex flex-col gap-8 rounded-xl bg-[#FCFCFD]">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2 sm:m-0 mb-4">
          {" "}
          <Image
            unoptimized
            src={Matche.img}
            alt={"league"}
            width={32}
            height={32}
            className="object-contain"
          />
          <h3 className="text-lg font-bold sm:flex-auto flex-1 text-primary">
            {Matche.league}
          </h3>
        </div>
        <p className="text-secondary font-medium text-sm">
          2024/3/13 <span className="ml-[6px]">19:45</span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          className="flex flex-col items-center min-h-[112px]"
          href={`/clubs/${Matche.id}`}
        >
          <Image
            unoptimized
            src={Matche.teams.theHost.img}
            alt={Matche.teams.theHost.name}
            width={72}
            height={72}
            className="object-contain mb-4 sm:w-[72px] sm:h-[72px] w-12 h-12"
          />
          <h3 className="text-[#4D4D4D] font-bold">
            {Matche.teams.theHost.name}
          </h3>
        </Link>
        <p className="text-primary text-bold text-base sm:text-lg">
          {Matche.teams.theHost.goal.number}
        </p>
        <span
          className={`${
            Matche.isPlayed
              ? "bg-[#E6E6E6] text-secondary"
              : Matche.isPlaying
              ? "bg-[#FEF3F2] text-[#B42318]"
              : "bg-[#F9F5FF] text-[#135CB8]"
          } sm:text-sm text-xs text-center font-medium py-2 px-6 rounded-2xl h-fit`}
        >
          {Matche.isPlayed
            ? "لعبت"
            : Matche.isPlaying
            ? `مباشر`
            : "ستلعب : 18:50"}
        </span>
        <p className="text-primary text-bold text-base sm:text-lg ">
          {Matche.teams.theGuest.goal.number}
        </p>
        <Link
          className="flex flex-col items-center"
          href={`/clubs/${Matche.id}`}
        >
          <Image
            unoptimized
            src={Matche.teams.theGuest.img}
            alt={Matche.teams.theGuest.name}
            width={72}
            height={72}
            className="object-contain mb-4 sm:w-[72px] sm:h-[72px] w-12 h-12"
          />
          <h3 className="text-[#4D4D4D] font-bold text-left">
            {Matche.teams.theGuest.name}
          </h3>
        </Link>
      </div>
      <div className="flex justify-between items-center text-secondary font-medium text-sm relative gap-[90px]">
        <p className="max-w-[140px]">الحكم/داني ماكيلي</p>
        <p className="h-fit absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          الجولة/16
        </p>
        <p className="max-w-[140px] text-left">ملعب/لويس كومبانيس الأولمبي</p>
      </div>
    </div>
  </div>
);

export default MatchResult;
