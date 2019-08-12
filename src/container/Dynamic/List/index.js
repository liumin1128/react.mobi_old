import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { DYNAMIC_LIST, CHECK_NEW_DYNAMIC } from '@/graphql/schema/dynamic';
import { useQuery, useMutation } from '@/hooks/graphql';
// import { useOnMount, useOnUnmount } from '@/hooks';
// import useLoop from '@/hooks/loop';
import Loading from '@/components/Loading';
import Loadmore from '@/components/Loading/Loadmore';
import Item from './Item';

function DynamicList({ router }) {
  const [ hasNewData, setNewData ] = useState(true);
  const { data, error, loading, isLoadingMore, isEnd, loadMore, refetch } = useQuery(DYNAMIC_LIST, router.query);

  // const [ check ] = useMutation(CHECK_NEW_DYNAMIC);


  if (loading) return <Loading />;

  if (error) return <div>{error.message}</div>;

  const { list } = data;

  // function checkNewDynamic(latest) {
  //   return async function () {
  //     console.log(list[0].content, new Date(parseInt(latest, 0)));
  //     // alert(list[0].content, new Date(parseInt(list[0].createdAt, 0)));
  //     await check({ latest }, {
  //       update: (_, { data: { result: { status: code, message } } }) => {
  //         console.log(code, message);
  //         if (code === 200) {
  //           setNewData(true);
  //         }
  //       },
  //     });
  //   };
  // }

  // const [ loop ] = useLoop();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(list[0].content);

  //     check({ latest: list[0].createdAt }, {
  //       update: (_, { data: { result: { status: code, message } } }) => {
  //         console.log(code, message);
  //         if (code === 200) {
  //           setNewData(true);
  //           clearTimeout(timer);
  //         }
  //       },
  //     });
  //   }, 5000);


  //   return function cleanup() {
  //     clearTimeout(timer);
  //   };
  // });


  return (
    <Fragment>

      {hasNewData && (
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => {
            // alert(list[0].content, new Date(parseInt(list[0].createdAt, 0)));
            // loop(checkNewDynamic(list[0].createdAt), 10000);
            setNewData(false);
            refetch();
          }}
        >
          有新动态，点击查看
        </Button>
      )}

      <Box mt={1.5} />

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
