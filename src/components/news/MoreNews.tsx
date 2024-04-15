import img from "@/assets/image19.png";
import Image from "next/image";
import Link from "next/link";
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

const MoreNews = async ({
  limit,
  col,
  subject,
}: {
  limit: number;
  col?: boolean;
  subject: string;
}) => {
  const { data } = await client.query({
    query: gql`
      {
        allBlogs {
          id
          subject
          short_description
          status
          club {
            name
            id
          }
          createdAt
        }
      }
    `,
  });
  const datas = data.allBlogs.filter(
    (item: {
      subject: string;
      club: null | undefined | { name: string; id: string };
    }) => !item.club && subject !== item.subject
  );
  return (
    <>
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-3xl text-primary">{`أخبار اخرى`}</h1>
      </div>
      <div
        className={`grid gap-8 ${
          col
            ? "lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pr-4"
            : "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 "
        }`}
      >
        {datas.map(
          (
            item: {
              id: string;
              subject: string;
              short_description: string;
              status: string;
              createdAt: string;
            },
            index: number
          ) => (
            <Link
              key={item.id}
              className={`${index <= limit ? "block" : "hidden"} `}
              href={`/news/${item.id}`}
            >
              <Image
                unoptimized
                src={img}
                alt={"img"}
                className={`w-full object-cover rounded-xl
              mb-3 ${col ? "lg:h-[193px] min-h-[177px]" : "min-h-[177px]"}`}
              />
              <span className="text-secondary font-medium text-xs">
                {item.createdAt.split(" ")[0]}
              </span>
              <p className="mt-3 text-primary font-bold">{item.subject}</p>
              <p className="mt-2 text-sm text-secondary font-bold">
                {item.short_description}
              </p>
            </Link>
          )
        )}
      </div>
    </>
  );
};
export default MoreNews;
