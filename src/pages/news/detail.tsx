import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { initializeApollo } from "@/lib/apollo/client";
import { NewsQuery, NewsResult } from "@/graphql/news";
import { useQuery } from "@apollo/client";

export default function Home() {
  const router = useRouter();
  const { _id } = router.query;

  const { data, loading, error } = useQuery<NewsResult>(NewsQuery, {
    variables: { _id },
  });

  //   console.log("data, loading, error");
  //   console.log(data, loading, error);

  if (loading) return "loading";
  if (error) return "error";

  return <div>{data?.news.html}</div>;
}

export async function getServerSideProps({ query }: NextPageContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: NewsQuery,
    variables: { _id: query?._id },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
