import {
  TodaysMatches,
  LatestNews,
  NewsSlider,
  CurrentLeagues,
} from "@/components/home";
import News from "@/components/News";
import ShowMore from "@/components/buttons/ShowMore";
import { SpecialNews, TodaysNews, Leagues, Matche } from "@/constants";
import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  gql,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const client = new ApolloClient({
  uri: "https://api-dev.omkooora.com/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

const Home = async () => {
  const date = new Date();

  const { data } = await client.query({
    query: gql`
      {
        allBlogs {
          id
          subject
          short_description
          status
          attachment {
            content
          }
          club {
            name
          }
          createdAt
        }
      }
    `,
  });

  const latestNews = [
    data.allBlogs.slice(data.allBlogs.length - 3),
    data.allBlogs.slice(data.allBlogs.length - 6, data.allBlogs.length - 3),
    data.allBlogs.slice(data.allBlogs.length - 9, data.allBlogs.length - 6),
  ];

  const lastNews = data.allBlogs[data.allBlogs.length - 1];

  data.allBlogs.sort(() => Math.random() - 0.5);

  const specialNews = [
    data.allBlogs.slice(data.allBlogs.length - 6),
    data.allBlogs.slice(data.allBlogs.length - 12, data.allBlogs.length - 6),
  ];

  const createdAt = data.allBlogs[1].createdAt.split(" ");
  // console.log(createdAt);
  // const hour = createdAt[1].split(":")[0];
  // const dd = 24 - hour;
  // const hourTime =
  //   date.getHours() > hour ? date.getHours() - hour : date.getHours() + dd;
  // const day = createdAt[0];
  // var start = new Date(day);
  // var end = new Date(date);
  // var diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  // console.log(diff);

  // const diff = useDateDiff(createdAt);
  // console.log(diff);

  return (
    <section className="paddings">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
        <LatestNews data={lastNews} />
        <TodaysMatches matches={Matche} />
        <div className="col-span-2 mb-auto">
          <NewsSlider news={latestNews} title="أخبار اليوم" />
        </div>
        <div className="col-span-2">
          <NewsSlider news={specialNews} title="أخبار مميزة" />
        </div>
        <CurrentLeagues leagues={Leagues} />
      </div>
      <div className="mt-8 flex flex-col gap-8 relative">
        <News title={"دوري روشن السعودي"} news={data.allBlogs} limit={3} />
        <div className="max-sm:mx-auto mr-auto">
          <ShowMore link={"/news"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
