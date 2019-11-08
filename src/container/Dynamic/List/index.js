import React, { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useQuery, useMutation } from '@/hooks/graphql';
import { DYNAMIC_LIST, REMOVE_DYNAMIC } from '@/graphql/schema/dynamic';
import { USERINFO } from '@/graphql/schema/user';
import { ZAN } from '@/graphql/schema/zan';
import { FOLLOW } from '@/graphql/schema/follow';
import Loading from '@/components/Loading';
import GraphQLErrors from '@/components/StatusPage/GraphQLErrors';
import Snackbar from '@/components/Snackbar';
import Item from './Item';

function DynamicList({ variables }) {
  const { data, error, loading, loadMore } = useQuery(DYNAMIC_LIST, variables);
  const { data: userInfoData } = useQuery(USERINFO, {}, { ssr: false });

  const [ zan ] = useMutation(ZAN);
  const [ follow ] = useMutation(FOLLOW);
  const [ deleteDynamic ] = useMutation(REMOVE_DYNAMIC);

  if (loading) return <Loading />;
  if (error) return <GraphQLErrors error={error} />;

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

  const { list, meta } = data;

  const { userInfo } = userInfoData || {};

  return (
    <>
      {list.map((i) => (
        <Fragment key={i._id}>
          <Item
            {...i}
            userInfo={userInfo}
            onZan={onZan}
            onDelete={onFollow}
            onFollow={onDelete}
          />
        </Fragment>
      ))}

      <Box>
        {list.length < meta.count
          ? (
            <Box>
              <Loading />
              <Waypoint onEnter={loadMore} />
            </Box>
          )
          : <Typography align="center" variant="caption" component="p">~ 这是人家的底线 ~</Typography>}
      </Box>
    </>
  );
}


export default DynamicList;
