import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useRouter, withRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ARTICLE_LIST } from '@/graphql/schema/article';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Link from '@/components/Link';
import { getTimeAgo } from '@/utils/common';
import Avatar from '@/components/Avatar';
import Item from './ListItem';
import useStyles from './styles';


const navList = [
  { label: '未读', value: 'unread' },
  { label: '全部', value: 'all' },
  { label: '系统消息', value: 'system' },
];


function Profile({ router }) {
  const classes = useStyles();
  const { query } = router;
  const { type = 'all' } = query;

  const { data, loading, isLoadingMore, isEnd, loadMore } = useQuery(ARTICLE_LIST, {}, { ssr: false });


  if (loading) return <Loading />;
  const { list = [], meta } = data;

  return (
    <>
      <Paper>
        {list && list.length > 0 && list.map((i) => {
          return (
            <Box key={i._id}>
              <Item
                {...i}
                onLike={() => {
                  console.log('onLike');
                }}
                onDislike={() => {
                  console.log('onDislike');
                }}
                onToogleComment={() => {
                  console.log('onToogleComment');
                }}
                onShare={() => {
                  console.log('onShare');
                }}
              />
              <Divider />
            </Box>
          );
        })}
      </Paper>

      {list.length < meta.count ? (
        <Button
          fullWidth
          onClick={() => loadMore()}
          disabled={isLoadingMore}
        >
          {`查看更多 - 剩余${meta.count - list.length}条`}
        </Button>
      ) : <Typography align="center">~ 这是人家的底线 ~</Typography>}
    </>
  );
}

export default withRouter(Profile);
