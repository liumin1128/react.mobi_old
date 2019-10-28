import React from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import { useQuery, useMutation } from '@/hooks/graphql';
import { DYNAMIC_LIST, REMOVE_DYNAMIC } from '@/graphql/schema/dynamic';
import { USERINFO } from '@/graphql/schema/user';
import { ZAN } from '@/graphql/schema/zan';
import { FOLLOW } from '@/graphql/schema/follow';
// import { useOnMount, useOnUnmount } from '@/hooks';
// import useLoop from '@/hooks/loop';
import Loading from '@/components/Loading';
import Loadmore from '@/components/Loading/Loadmore';
import Snackbar from '@/components/Snackbar';

import Item from './Item';

function DynamicList({ router }) {
  const { query } = router;
  const { data, error, loading, isLoadingMore, isEnd, loadMore } = useQuery(DYNAMIC_LIST, query);
  const { data: userInfoData } = useQuery(USERINFO);
  // const [ check ] = useMutation(CHECK_NEW_DYNAMIC);

  const [ zan ] = useMutation(ZAN);
  const [ follow ] = useMutation(FOLLOW);
  const [ deleteDynamic ] = useMutation(REMOVE_DYNAMIC);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const userInfo = userInfoData ? userInfoData.userInfo : undefined;

  const { list } = data;

  function onZan(_id, zanStatus) {
    zan({ _id }, {
      optimisticResponse: { result: { status: zanStatus ? 201 : 200, message: '创建成功', __typename: 'Result' } },
      update: (store, { data: { result: { status: code, message } } }) => {
        if (code === 200 || code === 201) {
          const temp = store.readQuery({ query: DYNAMIC_LIST });
          const num = { 200: 1, 201: -1 };
          const sta = { 200: true, 201: false };
          const idx = temp.list.findIndex((i) => i._id === _id);
          temp.list[idx].zanCount += num[code];
          temp.list[idx].zanStatus = sta[code];
          store.writeQuery({ query: DYNAMIC_LIST, data: temp });
        } else {
          Snackbar.error(message);
        }
      },
    });
  }

  function onFollow(_id, followStatus) {
    follow({ _id }, {
      optimisticResponse: { result: { status: followStatus ? 201 : 200, message: '关注成功', __typename: 'Result' } },
      update: (store, { data: { result: { status: code, message } } }) => {
        if (code === 200 || code === 201) {
        } else {
          Snackbar.error(message);
        }
      },
    });
  }

  function onDelete(_id) {
    deleteDynamic({ _id }, {
      optimisticResponse: { result: { status: 200, message: '删除成功', __typename: 'Result' } },
      update: (store, { data: { result: { status: code, message } } }) => {
        if (code === 200) {
          const temp = store.readQuery({ query: DYNAMIC_LIST });
          const idx = temp.list.findIndex((i) => i._id === _id);
          temp.list.splice(idx, 1);
          store.writeQuery({ query: DYNAMIC_LIST, data: temp });
        } else {
          Snackbar.error(message);
        }
      },
    });
  }

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
    <>

      {/* {hasNewData && (
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
      )} */}

      <Box mt={1.5} />

      {list.map((i) => (
        <Item
          key={i._id}
          zan={onZan}
          del={onDelete}
          follow={onFollow}
          userInfo={userInfo}
          {...i}
        />
      ))}

      <Loadmore
        isEnd={isEnd}
        isLoading={isLoadingMore}
        loadMore={loadMore}
      />
    </>
  );
}


export default withRouter(DynamicList);
