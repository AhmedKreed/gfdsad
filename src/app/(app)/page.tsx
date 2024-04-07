import {
  TodaysMatches,
  LatestNews,
  NewsSlider,
  CurrentLeagues,
} from "@/components/home";
import News from "@/components/News";
import ShowMore from "@/components/buttons/ShowMore";
import { SpecialNews, TodaysNews, Leagues, Matche } from "@/constants";

const Home = () => {
  return (
    <section className="paddings">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
        <LatestNews />
        <TodaysMatches matches={Matche} />
        <div className="col-span-2 ">
          <NewsSlider news={TodaysNews} title={"أخبار اليوم"} />
        </div>
        <div className="col-span-2">
          <NewsSlider news={SpecialNews} title="أخبار مميزة" />
        </div>
        <CurrentLeagues leagues={Leagues} />
      </div>
      <div className="mt-8 flex flex-col gap-8 relative">
        <News title={"دوري روشن السعودي"} news={SpecialNews[0]} limit={3} />
        <div className="max-sm:mx-auto mr-auto">
          <ShowMore link={"/news"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
