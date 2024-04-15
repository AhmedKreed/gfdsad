import {
  StadiumInfo,
  StadiumLocation,
  StadiumReserve,
} from "@/components/reservation";
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
        stadium(id: "${ID}") {
          name
          team {
            club {
              governorate
            }
          }
          about
          attachments
          rent
        }
      }
    `,
  });

  return (
    <div className="paddings grid lg:grid-cols-3 grid-cols-1 gap-8">
      <div className="col-span-2">
        <StadiumInfo
          name={data.stadium.name}
          governorate={
            data.stadium.team ? data.stadium.team.club.governorate : ""
          }
          about={data.stadium.about}
          attachments={data.stadium.attachments}
        />
        <StadiumLocation />
      </div>
      <StadiumReserve />
    </div>
  );
};

export default page;
