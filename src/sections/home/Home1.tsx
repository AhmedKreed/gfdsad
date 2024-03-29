import { Leagues, Matche, SpecialNews, TodaysNews } from "@/constants";
import Image from "next/image";
import BG from "@/assets/BG.png";
import icon from "@/assets/Icon.png";
import NewsSlider from "@/components/NewsSlider";
import ShowMore from "@/components/buttons/ShowMore";
import Link from "next/link";
const Home1 = () => (
  <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
    {/* LATEST NEWS */}
    <div className="col-span-2">
      <div
        className=" w-full h-[535px] bg-no-repeat rounded-lg p-6 flex flex-col justify-end gap-2 bg-cover"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      >
        <div className="flex gap-3 items-center">
          <span className="rounded-2xl bg-[#1570EF] text-white py-[2px] px-[10px] text-center font-medium text-sm [word-spacing:1px]">
            فابريزيو رومانو
          </span>
          <Image unoptimized src={icon} alt={"icon"} />
          <span className="font-medium text-sm text-white">ساعتين</span>
        </div>
        <h1 className="text-white font-bold text-[30px] leading-[38px]">
          مبابي سيحصل على مكافأة توقيع تبلغ قيمتها أكثر من 100 مليون يورو مع
          ريال مدريد
        </h1>
      </div>
    </div>
    {/* MATCHE */}
    <nav className="row-span-2 flex flex-col mr-8 md:mr-0">
      <h1 className=" font-bold text-2xl text-primary">المباريات اليوم</h1>
      <div className="bg-[#FCFCFD]  rounded-lg ">
        {Matche.map((item) => (
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
                  {item.isPlaying ? `${item.Time} | مباشر` : item.Time}
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
    {/* TODAYS NEWS */}
    <div className="col-span-2 ">
      <NewsSlider news={TodaysNews} title={"أخبار اليوم"} />
    </div>
    <div className="col-span-2">
      <NewsSlider news={SpecialNews} title="أخبار مميزة" />
    </div>
    <div className="flex flex-col rows">
      <h1 className="text-primary mb-8 text-2xl font-bold">الدوريات</h1>
      <div className="p-2 bg-[#FCFCFD] flex flex-col gap-10 mr-8 md:m-0">
        <h3 className="text-primary font-bold">الدوريات العالمية</h3>
        <div className="lines" />
        {Leagues.map((league) => (
          <Link
            key={league.id}
            className="flex items-center gap-2"
            href={league.link}
          >
            <Image
              unoptimized
              src={league.img}
              alt={"league"}
              width={24}
              height={24}
              className="object-contain"
            />
            <p className="text-[#4D4D4D] font-semibold">{league.name}</p>
          </Link>
        ))}
        <div className="lines" />
      </div>
      <ShowMore link={"/leagues"} />
    </div>
  </div>
);

export default Home1;
