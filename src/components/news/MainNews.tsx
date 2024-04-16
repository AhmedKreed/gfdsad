"use client";
import Image from "next/image";
import img from "@/assets/image 18.png";
import { useEffect } from "react";

const MainNews = ({ AllNews }: { AllNews: any }) => {
  useEffect(() => {
    (document.getElementById("id") as HTMLElement).innerHTML =
      AllNews.description ? AllNews.description : AllNews.short_description;
  }, [AllNews]);
  let createdAt = AllNews.createdAt.split(" ");
  const hourAt = createdAt[1].split(":").slice(0, 2).join(":");
  const dateAt = AllNews.createdAt.split(" ")[0];
  createdAt = dateAt + " " + hourAt;
  return (
    <>
      <Image
        unoptimized
        src={img}
        alt={"img"}
        className="w-full h-[600px] object-cover rounded-xl mb-3 "
      />
      <p className="mb-4 text-secondary font-medium">
        {AllNews.club ? AllNews.club.name : " "}
        <br className="sm:hidden flex" />
        <span className="mr-4 leading-[30px]">{createdAt}</span>
      </p>
      <h1 className="text-primary font-bold text-xl md:text-2xl mb-4">
        {AllNews.subject}
      </h1>
      <em>
        <strong>
          <div id="id" className="text-secondary text-sm"></div>
        </strong>
      </em>
    </>
  );
};

export default MainNews;
