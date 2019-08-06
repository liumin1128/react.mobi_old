import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import Loading from '@/components/Loading';
import Loadmore from '@/components/Loading/Loadmore';
import { DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import { useQuery } from '@/hooks/graphql';
import Item from './Item';

function DynamicList({ router }) {
  const { data, error, loading, isLoadingMore, isEnd, loadMore } = useQuery(DYNAMIC_LIST, router.query);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      {list.map(i => <Item key={i._id} {...i} />)}
      <Loadmore
        isEnd={isEnd}
        isLoading={isLoadingMore}
        loadMore={loadMore}
      />
    </Fragment>
  );
}


export default withRouter(DynamicList);
