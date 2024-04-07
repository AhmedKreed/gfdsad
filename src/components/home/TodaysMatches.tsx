import Image from "next/image";
import ShowMore from "@/components/buttons/ShowMore";
import Link from "next/link";

const TodaysMatches = ({ matches }: { matches: any }) => (
  <nav className="row-span-2 flex flex-col mr-8 md:mr-0">
    <h1 className=" font-bold text-2xl text-primary">المباريات اليوم</h1>
    <div className="bg-[#FCFCFD]  rounded-lg ">
      {matches.map((item: any) => (
        <div key={item.id} className=" flex flex-col gap-8 mt-8">
          <Link
            className="p-2 flex flex-col gap-6"
            href={`/matches/${item.id}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 flex">
                <Image
                  unoptimized
                  src={item.img}
                  alt={"league"}
                  width={24}
                  height={24}
                  className="object-contain w-auto h-auto"
                />
                <h3 className="text-primary mr-2 font-bold lg:text-base md:text-sm ">
                  {item.league}
                </h3>
              </div>
              <span
                className={`${
                  item.isPlayed
                    ? "bg-[#E6E6E6] text-secondary"
                    : item.isPlaying
                    ? "bg-[#FEF3F2] text-[#B42318]"
                    : "bg-[#F9F5FF] text-[#135CB8]"
                } text-xs py-[2px] px-2 rounded-2xl`}
              >
                {item.isPlayed
                  ? item.Time
                  : item.isPlaying
                  ? `مباشر`
                  : item.Time}
              </span>
            </div>
            <div className="flex justify-between px-2 relative">
              <div className="flex items-start gap-2">
                <Image
                  unoptimized
                  src={item.teams.theHost.img}
                  alt={"club"}
                  width={22}
                  height={24}
                  className="object-contain w-auto h-auto"
                />
                <p className="text-[#4D4D4D] font-semibold">
                  {item.teams.theHost.name}
                </p>
              </div>
              <div>
                <p className="text-primary font-bold">
                  {item.teams.theHost.goal.number}
                </p>
                <span className="text-secondary text-xs absolute top-[22px] left-2">
                  {item.teams.theHost.goal.names}
                </span>
              </div>
            </div>
            <div className="flex justify-between px-2 relative">
              <div className="flex items-start gap-2">
                <Image
                  unoptimized
                  src={item.teams.theGuest.img}
                  alt={"club"}
                  width={22}
                  height={24}
                  className="object-contain"
                />
                <p className="text-[#4D4D4D] font-semibold">
                  {item.teams.theGuest.name}
                </p>
              </div>
              <div>
                <p className="text-primary font-bold">
                  {item.teams.theGuest.goal.number}
                </p>
                <span className="text-secondary text-xs absolute bottom-[-15px] left-2">
                  {item.teams.theGuest.goal.names}
                </span>
              </div>
            </div>
          </Link>
          <div className="lines" />
        </div>
      ))}
    </div>
    <ShowMore link={"/matches"} />
  </nav>
);

export default TodaysMatches;
