import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import MessageIcon from 'material-ui-icons/Message';
import timeago from '../../utils/timeago';
import Create from './create';

const styles = () => ({
  root: {
    '@media (max-width: 768px)': {
      margin: 16,
    },
  },
  comment: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '8px 0',
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  left: {
    width: '100%',
  },
  nickname: {
    padding: 0,
    margin: 0,
    fontSize: 16,
    lineHeight: 1.375,
    marginBottom: 8,
    color: '#9b9b9b',
    '&>a': {
      color: '#4a4a4a',
      fontWeight: 700,
    },
  },
  content: {
    padding: 0,
    margin: 0,
    fontSize: 14,
    color: '#4a4a4a',
    lineHeight: 1.42857143,
  },
  foot: {
    padding: 0,
    margin: 0,
    fontSize: 12,
    color: '#9b9b9b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    fontSize: 12,
    color: '#9b9b9b',
  },
  icon: {
    marginRight: 4,
  },
  text: {
    minWidth: 12,
    textAlign: 'left',
  },
  replys: {
    borderLeft: '4px solid #f0f0f1',
    paddingLeft: 16,
    marginBottom: 16,
  },
});

@withStyles(styles)
export default class extends PureComponent {
  state = {
    open: false,
    replyUser: {},
  }
  reply = ({ replyUser }) => {
    const { open, replyUser: _replyUser } = this.state;
    if (replyUser._id !== _replyUser._id) {
      this.setState({
        replyUser,
      });
    } else {
      this.setState({
        open: !open,
        replyUser,
      });
    }
  }
  render() {
    const {
      classes, content, user, createdAt, _id, id, replies, replyList,
    } = this.props;

    const { open, replyUser } = this.state;

    const Test = Create({
      key: _id,
      autoFocus: true,
      payload: { id, replyTo: _id, replyUser: replyUser._id },
      placeholder: `回复：${replyUser.nickname}`,
    });

    return (<div className={classes.root}>
      <div className={classes.comment}>
        <Avatar className={classes.avatar} src={user.avatarUrl} />
        <section className={classes.left}>
          <h5 className={classes.nickname}><a>{user.nickname}</a></h5>
          <p className={classes.content}>{content}</p>
          <div className={classes.foot}>
            <span>{timeago(createdAt)}</span>
            <span>
              <IconButton
                onClick={() => {
                  this.reply({ replyUser: { nickname: user.nickname } });
                }}
                className={classes.button}
              >
                <MessageIcon className={classes.icon} />
                <span className={classes.text}>{replies}</span>
              </IconButton>
              <IconButton className={classes.button}>
                <FavoriteIcon className={classes.icon} />
                <span className={classes.text}>0</span>
              </IconButton>
            </span>
          </div>
          <div className={classes.replys}>
            {
              replyList && replyList.map(reply =>
                (
                  <div key={reply._id} className={classes.comment}>
                    <Avatar className={classes.avatar} src={reply.user.avatarUrl} />
                    <section className={classes.left}>
                      <h5 className={classes.nickname}>
                        <a>{reply.user.nickname}</a>
                        {reply.replyUser && <div><span> 回复 </span><a>{reply.replyUser.nickname}</a></div>}
                      </h5>
                      <p className={classes.content}>{reply.content}</p>
                      <div className={classes.foot}>
                        <span>{timeago(reply.createdAt)}</span>
                        <span>
                          <IconButton
                            onClick={() => { this.reply({ replyUser: reply.user }); }}
                            className={classes.button}
                          >
                            <MessageIcon className={classes.icon} />
                            <span className={classes.text}>{reply.replies}</span>
                          </IconButton>
                          <IconButton className={classes.button}>
                            <FavoriteIcon className={classes.icon} />
                            <span className={classes.text}>0</span>
                          </IconButton>
                        </span>
                      </div>
                    </section>
                  </div>
                ))
            }
          </div>
          {open && <Test />}
        </section>
      </div>
    </div>);
  }
}
