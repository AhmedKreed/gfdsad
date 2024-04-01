import { img3 } from "@/assets";
import img from "@/assets/image1.png";
import { Matche } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { id: string } }) => {
  const header = ["ترتيب", "نادي", "ل", "ف", "ت", "خ", "ج", "ن"];
  let goals = [];
  let goal = {
    name: "محمد صلاح",
  };
  let leagues = [];
  let league = {
    img: img,
    name: "توتنهام",
    scores: ["10", "7", "4", "1", "32", "23"],
  };
  for (let index = 0; index < 12; index++) {
    leagues.push(league);
  }
  for (let index = 0; index < 10; index++) {
    goals.push(goal);
  }

  return (
    <section className="grid md:grid-cols-3 grid-cols-1 md:gap-8 paddings">
      <div className="col-span-2 bg-[#FCFCFD] p-4 rounded-lg md:m-0 mb-8">
        <div className="flex gap-8 mb-8">
          {header.map((item, index) => (
            <p
              key={item}
              className={`${index === 1 ? "flex-1" : ""} ${
                item === "ترتيب" ||
                item === "نادي" ||
                item === "ل" ||
                item === "ن"
                  ? " block"
                  : "max-md:hidden"
              } text-primary font-bold text-sm`}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col">
          {leagues.map((item, index) => (
            <div
              key={index}
              className={`flex py-[6px] pr-1 items-center text-primary font-semibold text-sm ${
                index < 2
                  ? "border-r-[3px] border-[#2E7DE1]"
                  : index === 2
                  ? "border-r-[3px] border-[#DC6803]"
                  : index > 7
                  ? "border-r-[3px] border-[#D92D20]"
                  : "mr-[3px]"
              }`}
            >
              <p className="font-bold">{index + 1}</p>
              <div className="flex items-center gap-2 flex-1">
                <Image
                  className={`${index > 8 ? "mr-2" : "mr-4"}`}
                  src={item.img}
                  alt={"club"}
                  width={24}
                  height={24}
                  unoptimized
                />
                <p className="text-[#4D4D4D]">{item.name}</p>
              </div>
              <div className="flex gap-8 items-center ml-[-6px]">
                {item.scores.map((score, i) => (
                  <p
                    key={i}
                    className={`${
                      score === "10" || score === "23"
                        ? "block"
                        : "max-md:hidden"
                    }`}
                  >
                    {score}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="col-span-1">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-6">
            أخر المباريات
          </h1>
          <div className="p-4 flex flex-col gap-6 bg-[#FCFCFD] rounded-lg shadow-md">
            {Matche.map((item) => (
              <Link
                key={item.id}
                className="flex items-center gap-10 justify-between text-[#4D4D4D] text-sm font-medium relative"
                href={`/matches/${item.id}`}
              >
                <div className="flex flex-col gap-3">
                  <Image
                    unoptimized
                    src={item.teams.theHost.img}
                    width={36}
                    height={36}
                    alt={"club"}
                  />
                  <p>{item.teams.theHost.name}</p>
                </div>
                <p className="py-1 px-3 bg-[#E6E6E6] rounded-2xl absolute left-1/2 -translate-x-1/2 ">
                  {item.teams.theHost.goal.number} :{" "}
                  {item.teams.theGuest.goal.number}
                </p>
                <div className="flex flex-col gap-3 items-end justify-end text-left">
                  <Image
                    unoptimized
                    src={item.teams.theGuest.img}
                    width={36}
                    height={36}
                    alt={"club"}
                  />

                  <p>{item.teams.theGuest.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary mb-6">الهدافين</h1>
          <div className="p-4 flex flex-col gap-6 bg-[#FCFCFD] rounded-lg shadow-md">
            <div className="flex gap-3 text-sm text-primary font-bold">
              <p>الترتيب</p>
              <p className="flex-1">الأسم</p>
              <p>الاهداف</p>
            </div>
            <div className="flex flex-col gap-2">
              {goals.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between font-bold text-sm text-[#4D4D4D]"
                >
                  <p>{index + 1}</p>
                  <div className="flex items-center flex-1">
                    <Image
                      className={`${index > 8 ? "mr-6" : "mr-8"}`}
                      src={img3}
                      alt={"club"}
                      width={24}
                      height={24}
                      unoptimized
                    />
                    <p className="mr-1">محمد صلاح</p>
                  </div>
                  <p>23</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default page;
