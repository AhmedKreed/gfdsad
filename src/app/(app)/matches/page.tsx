import Matches from "@/sections/matches/Matches";
import { Matche } from "@/constants";
const page = () => {
  // The API enpoint for matches was not provided
  return (
    <section className="paddings">
      <Matches Matche={Matche} />
    </section>
  );
};

export default page;
