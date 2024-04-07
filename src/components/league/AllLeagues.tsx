import Link from "next/link";
import Image from "next/image";

const AllLeagues = ({ Leagues }: { Leagues: any }) => {
  return (
    <>
      {Leagues.map((league: any) => (
        <Link
          key={league.id}
          className="flex items-center gap-4"
          href={league.link}
        >
          <Image
            unoptimized
            src={league.img}
            alt={"league"}
            width={44}
            height={44}
            className="object-contain"
          />
          <p className="text-[#4D4D4D] font-semibold text-xl">{league.name}</p>
        </Link>
      ))}
    </>
  );
};

export default AllLeagues;
