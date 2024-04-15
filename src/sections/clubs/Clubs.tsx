"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import img from "@/assets/6198fbcb-ac86-41ab-9122-8443f444aec6 (1).png";

type ClubType = {
  value: string;
  label: string;
}[];

const Clubs = ({ Teams, clubOption }: { Teams: any; clubOption: ClubType }) => {
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

  const Teamsate = Teams.filter(
    (item: { club: { name: string } }) =>
      !clubb || clubb.includes(item.club.name)
  ).filter((item: { name: string }) => !submit || item.name.includes(submit));

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
            placeholder="ادخل اسم الفريق"
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
          options={clubOption}
          className="md:w-1/3 w-[90%] md:mr-2 mx-auto"
          classNamePrefix="select"
          onInputChange={onInputClubsChange}
          onChange={onInputClubsChange}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {clubb || submit
          ? Teamsate.map((item: any) => (
              <Link
                key={`${item.id}`}
                href={`/clubs/${item.id}`}
                className="flex gap-4 items-center"
              >
                <div className="h-[40px] w-[40px] relative">
                  <Image
                    unoptimized
                    loading="lazy"
                    src={item.logo ? item.logo : img}
                    alt={"club logo"}
                    fill
                    className="object-contain absolute"
                  />
                </div>
                <div className=" flex-col gap-6">
                  <h3 className="font-semibold text-primary">{item.name}</h3>
                  <p className="text-secondary">{item.club.name}</p>
                </div>
              </Link>
            ))
          : null}
      </div>
    </section>
  );
};

export default Clubs;
