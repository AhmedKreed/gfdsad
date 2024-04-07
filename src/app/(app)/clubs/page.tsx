import Clubs from "@/sections/clubs/Clubs";
import { Playersd } from "@/constants";
const page = () => {
  return (
    <section className="paddings">
      <Clubs Playersd={Playersd} />
    </section>
  );
};

export default page;
