"use client";
import { useState } from "react";
import Image from "next/image";
import leftarrow from "@/assets/Left arrow.png";
import rightarrow from "@/assets/Right arrow (1).png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {news[slider].map(
          (item: {
            id: number;
            img: string | StaticImport;
            time: number;
            title: string;
            link: string;
          }) => (
            <Link key={item.id} href={item.link}>
              <Image
                unoptimized
                src={item.img}
                alt={"img"}
                className="w-full min-h-[177px] object-cover rounded-xl
              mb-3"
              />
              <span className="text-secondary font-medium text-xs">{`قبل ${item.time} دقائق`}</span>
              <p className="mt-4 text-sm text-primary font-bold">
                {item.title}
              </p>
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default NewsSlider;
