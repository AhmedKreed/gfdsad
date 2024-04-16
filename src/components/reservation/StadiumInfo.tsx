import Image from "next/image";
import logo from "@/assets/Icon (1).png";
import stadiums from "@/assets/image20(1).png";

const StadiumInfo = ({
  name,
  governorate,
  about,
  attachments,
}: {
  name: string;
  governorate: string;
  about: string;
  attachments: string;
}) => {
  return (
    <div>
      <h1 className="mb-3 text-primary text-2xl font-bold">{name}</h1>
      <div className="flex items-center gap-3 mb-8">
        <Image
          unoptimized
          src={logo}
          alt={"logo"}
          className="w-auto h-auto object-contain"
        />{" "}
        <span className="text-sm medium text-secondary">
          {governorate || "////"}
        </span>
      </div>
      <Image
        unoptimized
        src={stadiums}
        alt={"stadium"}
        className="object-cover mb-6 w-full h-[360px] rounded-xl"
      />
      <div className="p-4 mb-8">
        <h3 className="text-base font-bold text-primary mb-3">لمحة عامة</h3>
        <p className="font-medium text-secondary">{about}</p>
        <p className="text-sm font-medium text-secondary mt-2">{attachments}</p>
      </div>
    </div>
  );
};

export default StadiumInfo;
