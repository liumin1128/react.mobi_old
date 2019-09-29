import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import { useRouter, withRouter } from 'next/router';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import { FANS_LIST } from '@/graphql/schema/follow';


function Fans({ query }) {
  const { data, error, loading, isLoadingMore, isEnd, loadMore } = useQuery(FANS_LIST, query, { ssr: false });

  if (loading) return <Loading />;
  const { list = [], meta } = data;
  console.log('list');
  console.log(list);
  return (
    <>

      <Paper>
        <List subheader={<ListSubheader>ta的粉丝</ListSubheader>}>

          {list.length > 0 && (
          <>
            {list.map(({ user = {}, _id }) => {
              return (
                <Fragment key={_id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={user.avatarUrl} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.nickname}
                      secondary={user.sign || '这家伙什么都没说~'}
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained" color="primary" size="small">关注</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />

                </Fragment>
              );
            })}

            {list.length < meta.count ? (
              <Button
                fullWidth
                onClick={() => loadMore()}
                disabled={isLoadingMore}
              >
                {`查看更多 - 剩余${meta.count - list.length}条`}
              </Button>
            ) : <Box p={2} display="flex" justifyContent="center"><Typography variant="caption" align="center">~ 这是人家的底线 ~</Typography></Box>}
          </>
          )}
        </List>

      </Paper>


    </>
  );
}

export default withRouter(Fans);
