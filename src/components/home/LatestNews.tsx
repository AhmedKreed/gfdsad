import Image from "next/image";
import BG from "@/assets/BG.png";
import icon from "@/assets/Icon.png";

const LatestNews = ({ data }: { data: any }) => {
  return (
    <div className="col-span-2">
      <div
        className=" w-full h-[535px] bg-no-repeat rounded-lg p-6 flex flex-col justify-end gap-2 bg-cover"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      >
        <div className="flex gap-3 items-center">
          <span className="rounded-2xl bg-[#1570EF] text-white py-[2px] px-[10px] text-center font-medium text-sm [word-spacing:1px]">
            {data.club ? data.club.name : ""}
          </span>
          <Image unoptimized src={icon} alt={"icon"} />
          <span className="font-medium text-sm text-white">
            {data.createdAt.split(" ")[0]}
          </span>
        </div>
        <h1 className="text-white font-bold text-[30px] leading-[50px]">
          {data.subject}
          <br />
          {data.short_description}
        </h1>
      </div>
    </div>
  );
};

export default LatestNews;
