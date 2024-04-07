import {
  StadiumInfo,
  StadiumLocation,
  StadiumReserve,
} from "@/components/reservation";

const page = () => {
  return (
    <div className="paddings grid lg:grid-cols-3 grid-cols-1 gap-8">
      <div className="col-span-2">
        <StadiumInfo />
        <StadiumLocation />
      </div>
      <StadiumReserve />
    </div>
  );
};

export default page;
