import Reserve from "@/sections/reservation/Reserve";
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

const page = async () => {
  const { data } = await client.query({
    query: gql`
      {
        allStadiums {
          name
          id
          about
          type
          rent
          attachments
          team {
            club {
              governorate
            }
          }
          images
        }
      }
    `,
  });
  return (
    <section className="paddings">
      <Reserve allStadium={data.allStadiums} />
    </section>
  );
};

export default page;
