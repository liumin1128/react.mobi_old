import React, { Fragment, useState } from 'react';
import { withRouter } from 'next/router';
import { DYNAMIC_LIST, CHECK_NEW_DYNAMIC } from '@/graphql/schema/dynamic';
import { useQuery, useMutation } from '@/hooks/graphql';
import useLoop from '@/hooks/loop';
import Loading from '@/components/Loading';
import Loadmore from '@/components/Loading/Loadmore';
import Item from './Item';

function DynamicList({ router }) {
  const [ hasNewData, setNewData ] = useState(false);
  const { data, error, loading, isLoadingMore, isEnd, loadMore } = useQuery(DYNAMIC_LIST, router.query);

  const [ check ] = useMutation(CHECK_NEW_DYNAMIC);

  useLoop(checkNewDynamic, 10000);

  async function checkNewDynamic() {
    await check({ latest: list[0].createdAt }, {
      update: (_, { data: { result: { status: code, message } } }) => {
        console.log(code, message);
        setNewData(true);
      },
    });
  }

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
