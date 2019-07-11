import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

function DynamicListItem({ _id, content, user, createdAt, ...props }) {
  const classes = useStyles();
  return (
    <Fragment key={_id}>
      <Link href={`/dynamic/detail?_id=${_id}`}>
        <Card className={classes.card}>
          <CardHeader
            avatar={(<Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>{user.nickname}</Avatar>)}
            action={(
              <IconButton aria-label="Settings">
                <MoreVertIcon />
              </IconButton>
            )}
            title={<Typography variant="h6" className={classes.nickname}>{user.nickname}</Typography>}
            subheader={getTimeAgo(createdAt)}
          />
          <CardContent className={classes.content}>
            <Typography variant="body2">{content}</Typography>
          </CardContent>
        </Card>
      </Link>
      <br />
    </Fragment>
  );
}


export default DynamicListItem;
