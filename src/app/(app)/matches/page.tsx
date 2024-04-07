import Matches from "@/sections/matches/Matches";
import { Matche } from "@/constants";
const page = () => {
  return (
    <section className="paddings">
      <Matches Matche={Matche} />
    </section>
  );
};

export default page;
