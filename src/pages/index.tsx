// import Head from "next/head";
// import Image from "next/image";
import Button from "@material-ui/core/Button";
import { initializeApollo } from "@/lib/apollo/client";
import NewsList from "@/components/NewsList";
import { NewsListQuery } from "@/graphql/news";

export default function Home() {
  return (
    <div>
      <NewsList />
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
