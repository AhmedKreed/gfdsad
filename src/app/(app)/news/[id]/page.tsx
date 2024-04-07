import { AllNews } from "@/constants";
import News from "@/components/News";
import MainNews from "@/components/news/MainNews";

const page = ({ params }: { params: { id: string } }) => {
  const ID = Number(params.id);
  return (
    <section className="paddings">
      <div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-8 mb-8">
        <MainNews AllNews={AllNews[ID]} />
        <div>
          <News title={"اخبار لتامر أبو سيدو"} news={AllNews} limit={2} col />
        </div>
      </div>
      <div>
        <News title={"أخبار اخرى"} news={AllNews} limit={3} />
      </div>
    </section>
  );
};

export default page;
