import React, { Fragment } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { getTimeAgo } from '@/utils/common';
import useStyles from './styles';

function SayListItem({ _id, content, user, createdAt, loading, ...props }) {
  const classes = useStyles();
  if (loading) return <Loading />;


  return (
    <Fragment key={_id}>
      <Card>
        <CardHeader
          avatar={(<Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>{user.nickname}</Avatar>)}
          action={(
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
            )}
          title={user.nickname}
          subheader={getTimeAgo(createdAt)}
        />
        <CardContent>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
      </Card>
      <br />
    </Fragment>
  );
}


export default SayListItem;
