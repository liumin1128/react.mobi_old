import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { CardHeader, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import FavoriteIcon from 'material-ui-icons/Favorite';
import MessageIcon from 'material-ui-icons/Message';
import Typography from 'material-ui/Typography';
import timeago from '../../utils/timeago';
import Create from './create';

const styles = theme => ({
  root: {
    '@media (min-width: 768px)': {
      margin: -12,
    },
  },
  content: {
    paddingLeft: 72,
    paddingTop: 0,
  },
  p: {
    marginBottom: 16,
  },
});

@withStyles(styles)
export default class extends PureComponent {
  state = {
    open: false,
  }
  render() {
    const {
      classes, content, user, createdAt, _id, id, replies, replyList,
    } = this.props;
    const { open } = this.state;

    const Test = Create({
      key: _id,
      autoFocus: true,
      payload: { id, replyTo: _id },
      placeholder: `回复：${user.nickname}`,
    });

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
            <FavoriteIcon style={{ fontSize: 18 }} />
          </IconButton>,
          <IconButton onClick={() => {
            this.setState({ open: !open });
          }}
          >
            <MessageIcon style={{ fontSize: 18 }} /> {replies}
          </IconButton>,
        ]}
        title={<i>{user.nickname}</i>}
        subheader={timeago(createdAt)}
      />

      <CardContent className={classes.content}>
        <Typography className={classes.p} component="p">
          {content}
        </Typography>
        {replyList && replyList.map(reply => (
          <div>
            <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                  aria-label="Recipe"
                  src={reply.user.avatarUrl}
                  className={classes.avatar}
                />
              }
              action={[
                <IconButton>
                  <FavoriteIcon style={{ fontSize: 18 }} />
                </IconButton>,
                <IconButton onClick={() => {
                  this.setState({ open: !open });
                }}
                >
                  <MessageIcon style={{ fontSize: 18 }} /> {replies}
                </IconButton>,
              ]}
              title={<i>{reply.user.nickname}</i>}
              subheader={timeago(createdAt)}
            />
            <Typography component="p">
              {reply.content}
            </Typography>
          </div>
        ))}
        {open && <Test />}
      </CardContent>
    </div>);
  }
}
