import Clubs from "@/sections/clubs/Clubs";
import { Playersd } from "@/constants";
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
type ClubType = {
  value: string;
  label: string;
}[];
const page = async () => {
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
  let teamss: any[] = [];
  data.allClub.map((item: any) => ({
    ...item.teams.map((team: any) => teamss.push(team)),
  }));

  let clubOption: ClubType = [];
  data.allClub.map((item: any) =>
    clubOption.push({ value: item.name, label: item.name })
  );

  return (
    <section className="paddings mb-auto">
      <Clubs Teams={teamss} clubOption={clubOption} />
    </section>
  );
};

export default page;
