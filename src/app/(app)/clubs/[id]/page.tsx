import { ClubInfo } from "@/constants";
import {
  TeamInfo,
  TeamLeagues,
  TeamPlayers,
  TeamStadium,
} from "@/components/club";
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
        allClub {
          name
          teams {
            id
            name
            logo
            club {
              name
            }
          }
        }
      }
    `,
  });
  return (
    <section className="paddings grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
      <TeamInfo ClubInfo={ClubInfo} />
      <TeamPlayers />
      <TeamStadium />
      <TeamLeagues />
    </section>
  );
};

export default page;
