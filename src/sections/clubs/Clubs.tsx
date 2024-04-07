"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import img from "@/assets/image1.png";

const club = [
  { value: "عصبان", label: "عصبان" },
  { value: "براك", label: "براك" },
  { value: "مبكبة", label: "مبكبة" },
  { value: "بوريك", label: "بوريك" },
  { value: "بازين", label: "بازين" },
  { value: "بيتزا", label: "بيتزا" },
];
type ClubType = {
  value: string;
  label: string;
}[];
const Clubs = ({ Playersd }: { Playersd: any }) => {
  const [clubs, setClubs] = useState<ClubType>();
  const [inputValue, setInputValue] = useState<string>("");
  const [submit, setSubmit] = useState<string>();

  const onInputClubsChange = (x: any, { action }: any) => {
    if (action === "select-option") {
      setClubs(x);
      // when adding from the select
    } else if (action === "clear") {
      setClubs(undefined);
      // when clearing from the select
    } else if (action === "remove-value") {
      clubs?.length === 1 ? setClubs(undefined) : setClubs(x);
      // when removing certain value from the select
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(inputValue);
  };

  const clubb = clubs ? clubs.map((x) => x.label) : clubs;

  const playersDate = Playersd.filter(
    (item: any) => !clubb || clubb.includes(item.club)
  )
    .filter((item: any) => !clubb || clubb.includes(item.club))
    .filter(
      (item: any) =>
        !submit ||
        item.team.slice(0, submit.length).toLowerCase() === submit.toLowerCase()
    );

  return (
    <section className="relative">
      <div className="flex md:flex-row items-center flex-col md:gap-0 gap-4 mb-10">
        <form
          className="relative h-fit md:w-2/3 w-full ml-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="text"
            name="text"
            placeholder="الفريق"
            className="bg-transparent p-3 border-2 border-[#CCCCCC] w-full rounded-3xl outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="absolute left-[12px] top-[15px]">
            <FaMagnifyingGlass size={20} className="fill-[#CCCCCC]" />
          </button>
        </form>
        <Select
          placeholder="نادي"
          instanceId={1}
          components={makeAnimated()}
          isMulti
          name="club"
          options={club}
          className="md:w-1/3 w-[90%] md:mr-2 mx-auto"
          classNamePrefix="select"
          onInputChange={onInputClubsChange}
          onChange={onInputClubsChange}
        />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {playersDate.map((item: any) => (
          <Link
            key={`${item.id}`}
            href={`/clubs/${item.id}`}
            className="flex gap-4 items-center"
          >
            <Image unoptimized src={img} alt={"club logo"} />
            <div className=" flex-col gap-6">
              <h3 className="font-semibold text-primary">
                النادي : {item.club}
              </h3>
              <p className="text-secondary">الفريق : {item.team}</p>
            </div>
          </Link>
        ))}
        {playersDate.every((item: any) => item.name === "") ? (
          <div className="col-span-4 m-auto text-3xl font-bold text-primary">
            لا يوجد فرق
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Clubs;
