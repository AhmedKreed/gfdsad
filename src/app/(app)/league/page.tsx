import { Leagues } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 paddings gap-8 mb-auto">
      {Leagues.map((league) => (
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
    </div>
  );
};

export default page;
