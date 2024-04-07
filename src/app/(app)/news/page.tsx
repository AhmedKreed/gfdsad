"use client";
import News from "@/components/News";
import { AllNews } from "@/constants";
import { useState } from "react";
const Page = () => {
  const [limit, setLimit] = useState(19);
  return (
    <section className="paddings">
      <News title={"أخبار"} news={AllNews} limit={limit} />
      <div className="flex felx-col">
        <button
          className="font-semibold px-4 py-[10px] text-sm rounded-lg bg-[#F9F5FF] text-[#135CB8] mt-12 mx-auto"
          onClick={() =>
            setLimit((prev) =>
              prev === AllNews.length - 1
                ? prev - AllNews.length / 2
                : prev + AllNews.length / 2
            )
          }
        >
          {limit === 19 ? "عرض المزيد" : "عرض أقل"}
        </button>
      </div>
    </section>
  );
};
export default Page;
