import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Loading from '@/components/Loading';
import { SAY_LIST } from '@/graphql/schema/dynamic';
import { useQuery } from '@/hooks/graphql';
import Item from './Item';

function DynamicList({ router }) {
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(SAY_LIST, router.query);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      {list.map(i => <Item key={i._id} {...i} />)}
    </Fragment>
  );
}


export default withRouter(DynamicList);
