import Image, { StaticImageData } from "next/image";
import ShowMore from "@/components/buttons/ShowMore";
import Link from "next/link";

type Leagues = {
  id: number;
  link: string;
  name: string;
  img: StaticImageData;
}[];

const CurrentLeagues = ({ leagues }: { leagues: Leagues }) => {
  return (
    <div className="flex flex-col rows">
      <h1 className="text-primary mb-8 text-2xl font-bold">المسابقات</h1>
      <div className="p-2 bg-[#FCFCFD] flex flex-col gap-10 mr-8 md:m-0">
        <h3 className="text-primary font-bold">المسابقات الجارية</h3>
        <div className="lines" />
        {leagues.map((league) => (
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
  );
};

export default CurrentLeagues;
