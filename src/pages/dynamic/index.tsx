import DynamicList from "@/container/Dynamic/List";
import CreateDynamic from "@/container/Dynamic/Create";

export default function Home() {
  return (
    <div>
      <CreateDynamic />
      <DynamicList />
    </div>
  );
}

// export async function getServerSideProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: NewsListQuery,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
