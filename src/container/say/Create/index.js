import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { SAY_CREATE, SAY_LIST } from '@/graphql/schema/say';
import { useMutation } from '@/hooks/graphql';
import useStyles from './styles';

function SayCreate({ router }) {
  const params = {
    input: {
      content: '测试文本',
    },
  };

  const createSay = useMutation(SAY_CREATE, params, {
    refetchQueries: [ 'SayList' ],
  });

  return (
    <Fragment>
      SayCreate
      <Button onClick={createSay}>useMutation</Button>
    </Fragment>
  );
}

export default withRouter(SayCreate);


// 乐观更新
// optimisticResponse: { result: { status: 200, message: '创建成功11', __typename: 'Result' } },
// update: (store, { data: { result: { status } } }) => {
//   console.log('status');
//   console.log(status);
//   if (status === 200) {
//     // Read the data from our cache for this query.
//     const data = store.readQuery({ query: SAY_LIST });
//     // Add our comment from the mutation to the end.
//     data.list.push({
//       content: '测试文本22',
//       createdAt: '1560768742714',
//       user: {
//         nickname: '本王今年八岁',
//         avatarUrl: 'https://imgs.react.mobi/Fs0w36NQ9R1szSwKO3c0nIor_8m6',
//         __typename: 'User',
//       },
//       __typename: 'Say',
//       _id: '5d0770e6bd48e7125d2c5971',
//     });
//     // Write our data back to the cache.
//     store.writeQuery({ query: SAY_LIST, data });
//   }
// },
