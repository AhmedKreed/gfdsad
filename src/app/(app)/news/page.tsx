import News from "@/components/News";
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

const Page = async () => {
  const { data } = await client.query({
    query: gql`
      {
        allBlogs {
          id
          subject
          short_description
          status
          createdAt
        }
      }
    `,
  });

  return (
    <section className="paddings">
      <News title={"أخبار"} news={data.allBlogs} limit={data.allBlogs.length} />
    </section>
  );
};
export default Page;
