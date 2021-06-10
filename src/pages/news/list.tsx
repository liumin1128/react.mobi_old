// import Head from "next/head";
// import Image from "next/image";
import Button from "@material-ui/core/Button";
import { initializeApollo } from "@/lib/apollo/client";
import NewsList from "@/components/NewsList";
import { NewsListQuery, NewsListResult } from "@/graphql/news";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery<NewsListResult>(NewsListQuery);
  // console.log("data, loading, error");
  // console.log(data, loading, error);
  if (loading) return "loading";
  if (error) return "error";

  return (
    <div>
      <NewsList data={data?.newsList} />
      <Button variant="contained" color="primary">
        1111
      </Button>
    </div>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: NewsListQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
