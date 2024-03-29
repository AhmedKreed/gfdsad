"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
const News = ({
  title,
  news,
  limit,
  col,
}: {
  title: string;
  news: any[];
  limit: number;
  col?: boolean;
}) => (
  <>
    <div className="flex justify-between mb-8">
      <h1 className="font-bold text-3xl text-primary">{title}</h1>
    </div>
    <div
      className={`grid gap-8 ${
        col
          ? "lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pr-4"
          : "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 "
      }`}
    >
      {news.map(
        (
          item: {
            id: number;
            img: string | StaticImport;
            time: number;
            title: string;
            link: string;
          },
          index: number
        ) => (
          <Link
            key={item.id}
            className={`${index <= limit ? "block" : "hidden"} `}
            href={item.link}
          >
            <Image
              unoptimized
              src={item.img}
              alt={"img"}
              className={`w-full object-cover rounded-xl
              mb-3 ${col ? "lg:h-[193px] min-h-[177px]" : "min-h-[177px]"}`}
            />
            <span className="text-secondary font-medium text-xs">{`قبل ${item.time} دقائق`}</span>
            <p className="mt-4 text-sm text-primary font-bold">{item.title}</p>
          </Link>
        )
      )}
    </div>
  </>
);
export default News;
