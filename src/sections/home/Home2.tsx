import News from "@/components/News";
import ShowMore from "@/components/buttons/ShowMore";
import { SpecialNews } from "@/constants";

const Home2 = () => (
  <div className="mt-8 flex flex-col gap-8 relative">
    <News title={"دوري روشن السعودي"} news={SpecialNews[0]} limit={3} />
    <div className="max-sm:mx-auto mr-auto">
      <ShowMore link={"/news"} />
    </div>
  </div>
);

export default Home2;
