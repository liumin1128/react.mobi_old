import React from 'react';
import { withRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { DYNAMIC_LIST, REMOVE_DYNAMIC } from '@/graphql/schema/dynamic';
import PageError from '@/components/StatusPage/error';
import Link from '@/components/Link';
import Page404 from '@/components/StatusPage/404';

function DynamicList({ router }) {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    DYNAMIC_LIST,
    {
      // variables: allPostsQueryVars,
      notifyOnNetworkStatusChange: true,
      ssr: true,
    },
  );

  // console.log('data');
  // console.log(data);

  if (loading) return 'loading...';
  if (error) return <PageError />;

  const { list } = data;

  return (
    <>
      {list.map((i) => (
        <div key={i._id}>
          <Link href={`/dynamic/detail?_id=${i._id}`}>
            {i.content}
          </Link>
        </div>
      ))}
    </>
  );
}


export default withRouter(DynamicList);
