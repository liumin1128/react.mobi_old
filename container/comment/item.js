import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { CardHeader, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import Typography from 'material-ui/Typography';
import timeago from '../../utils/timeago';

const styles = theme => ({
  root: {
    '@media (min-width: 768px)': {
      margin: -12,
    },
  },
  header: {
    // padding: 8,
  },
  content: {
    paddingLeft: 72,
    paddingTop: 0,
  },
});

@withStyles(styles)
export default class extends PureComponent {
  render() {
    const {
      classes, content, user, createdAt,
    } = this.props;
    console.log('this.props');
    console.log(this.props);
    return (<div className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar
            aria-label="Recipe"
            src={user.avatarUrl}
            className={classes.avatar}
          />
        }
        action={[
          <IconButton>
            <FavoriteIcon />
          </IconButton>,
          <IconButton>
            <ShareIcon />
          </IconButton>,
        ]}
        title={<i>{user.nickname}</i>}
        subheader={timeago(createdAt)}
      />
      <CardContent className={classes.content}>
        <Typography component="p">
          {content}
        </Typography>
      </CardContent>
    </div>);
  }
}
