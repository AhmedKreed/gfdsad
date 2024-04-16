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
        <div className="flex gap-4 sm:items-center items-start sm:flex-row flex-col">
          <span className="rounded-2xl bg-[#1570EF] text-white py-[2px] px-[10px] text-center font-medium text-sm [word-spacing:1px]">
            {data.club ? data.club.name : ""}
          </span>

          <div className="flex gap-2 items-center">
            <Image unoptimized src={icon} alt={"icon"} />
            <span className="font-medium text-sm text-white">
              {data.createdAt.split(" ")[0]}
            </span>
          </div>
        </div>
        <h1 className="text-white font-bold sm:text-[30px] text-2xl sm:leading-[50px] leading-[40px]">
          {data.subject}
          <br />
          {data.short_description}
        </h1>
      </div>
    </div>
  );
};

export default LatestNews;
