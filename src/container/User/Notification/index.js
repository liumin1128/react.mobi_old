import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NOTIFACATION_LIST } from '@/graphql/schema/notification';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import { getTimeAgo } from '@/utils/common';
import useStyles from './styles';

function Profile() {
  const classes = useStyles();
  const { data, error, loading, isLoadingMore, isEnd, loadMore } = useQuery(NOTIFACATION_LIST, { ssr: false });
  if (loading) return <Loading />;
  const { list } = data;
  console.log(data);
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box maxWidth={500} width="100%">
          {list.map(({ _id, actionor, user, createdAt, actionShowText, actionorShowText, userShowText }) => {
            return (
              <Box mb={2} key={_id}>
                <Card
                  className={classes.card}
                  // elevation={2}
                >
                  <CardHeader
                    className={classes.header}
                    avatar={(<Avatar src={actionor.avatarUrl}>{actionor.nickname}</Avatar>)}
                    title={<Typography variant="h6" style={{ fontSize: 14 }}>{actionor.nickname}</Typography>}
                    subheader={<Typography variant="caption" style={{ fontSize: 12 }}>{getTimeAgo(createdAt)}</Typography>}
                    action={<Button color="primary" variant="outlined" size="small">关注</Button>}
                  />
                  <Box ml={10} mb={3} mt={1} mr={3}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <span style={{ fontWeight: 'bold' }}>{actionShowText}</span>
                      {actionorShowText ? `： ${actionorShowText}` : ''}
                    </Typography>

                    {userShowText && (
                      <Box p={1} px={2} mt={1} bgcolor="rgba(0, 0, 0, 0.03)">
                        <Typography variant="body2" color="textSecondary" component="p">
                          {`@${user.nickname}: ${userShowText}`}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Profile;
