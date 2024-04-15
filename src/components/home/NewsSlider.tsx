"use client";
import { useState } from "react";
import img from "@/assets/image19.png";
import Image from "next/image";
import leftarrow from "@/assets/Left arrow.png";
import rightarrow from "@/assets/Right arrow (1).png";
import Link from "next/link";

const NewsSlider = ({ news, title }: { news: any; title: string }) => {
  const [slider, setSlider] = useState(0);

  const handleLeftArrow = () => {
    setSlider((prev) => (prev ? prev - 1 : news.length - 1));
  };
  const handleRightArrow = () => {
    setSlider((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <div className="flex justify-between mb-12">
        <h1 className="font-bold text-3xl text-primary">{title}</h1>
        <div className="flex gap-3 ">
          <Image
            unoptimized
            src={rightarrow}
            alt={"rightarrow"}
            className="object-contain cursor-pointer"
            onClick={handleRightArrow}
          />
          <Image
            unoptimized
            src={leftarrow}
            alt={"leftarrow"}
            className="object-contain cursor-pointer"
            onClick={handleLeftArrow}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {news[slider].map(
          (item: {
            id: string;
            subject: string;
            short_description: string;
            status: string;
            createdAt: string;
          }) => (
            <Link key={item.id} href={`news/${item.id}`}>
              <Image
                unoptimized
                src={img}
                alt={"img"}
                className="w-full min-h-[177px] object-cover rounded-xl
              mb-3"
              />
              <span className="text-secondary font-medium text-sm">
                {item.createdAt.split(" ")[0]}
              </span>
              <p className="mt-3 text-primary font-bold">{item.subject}</p>
              <p className="mt-2 text-xs text-secondary font-bold">
                {item.short_description}
              </p>
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default NewsSlider;
