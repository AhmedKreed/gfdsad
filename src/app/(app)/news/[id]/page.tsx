import News from "@/components/News";
import MainNews from "@/components/news/MainNews";
import MoreClubNews from "@/components/news/MoreClubNews";
import MoreNews from "@/components/news/MoreNews";
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

const page = async ({ params }: { params: { id: string } }) => {
  const ID = params.id;

  const { data } = await client.query({
    query: gql`
      {
        blog(id: "${ID}") {
          id
          subject
          description
          short_description
          status
          club {
            name
            id
          }
          createdAt
        }
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
  const blogClubId = data.blog.club ? data.blog.club.id : "";
  const blogId = data.blog.id;
  const otherNews = data.allBlogs
    .sort(() => Math.random() - 0.5)
    .filter((item: { id: string }) => item.id !== data.blog.id);
  return (
    <section className="paddings">
      <div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-8 mb-8">
        <div className={`p-4 pb-8 ${blogClubId ? "col-span-2" : "col-span-3"}`}>
          <MainNews AllNews={data.blog} />
        </div>
        {blogClubId && (
          <div>
            <MoreClubNews id={blogClubId} limit={2} col blogId={blogId} />
          </div>
        )}
      </div>
      <div>
        <News title={"أخبار اخرى"} news={otherNews} limit={3} />
      </div>
      {/* <MoreNews limit={2} col subject={data.blog.subject} /> */}
    </section>
  );
};

export default page;
