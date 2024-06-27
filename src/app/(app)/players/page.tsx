import Players from "@/sections/players/Players";
import { Playersd } from "@/constants";
const page = () => {
  // The API enpoint for Players was not provided
  return (
    <section className="paddings mb-auto">
      <Players Playersd={Playersd} />
    </section>
  );
};

export default page;
