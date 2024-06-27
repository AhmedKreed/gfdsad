import AllLeagues from "@/components/league/AllLeagues";
import { Leagues } from "@/constants";

const page = () => {
  // no API enpoint for leagues was provided
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 paddings gap-8 mb-auto">
      <AllLeagues Leagues={Leagues} />
    </div>
  );
};

export default page;
