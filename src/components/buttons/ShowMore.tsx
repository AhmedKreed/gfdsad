import Link from "next/link";

const ShowMore = ({ link }: { link: string }) => {
  return (
    <Link
      href={link}
      className="font-semibold px-4 py-[10px] text-sm rounded-lg bg-[#F9F5FF] text-[#135CB8] mt-6 mx-auto"
    >
      عرض المزيد
    </Link>
  );
};

export default ShowMore;
