import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import { COMMENT_LIST } from '@/graphql/schema/comment';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Pagination from '@/components/Pagination';
import { formatTime } from '@/utils/common';
import Create from './create';

const styles = theme => ({
  root: {
    border: '1px #eee solid',
    boxShadow: 'none',
    // boxShadow: '0 0px 8px 0px rgba(0,0,0,0.1), 0 6px 10px -4px rgba(0,0,0,0.2)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#666',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing.unit * 0.5,
    marginRight: theme.spacing.unit * 1.5,
  },
  commentItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  commentHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 14,
    flexGrow: 1,
    color: '#666',
  },
  content: {
    paddingLeft: 36,
  },
});

@withStyles(styles)
export default class test extends PureComponent {
  state = {
    page: 1,
  }

  renderHeader = ({ count, loading }) => {
    const { classes } = this.props;
    return (
      <CardContent className={classes.header}>
        <Typography className={classes.title} variant="h6" component="h6">
          {loading ? 'loading' : (count === 0 ? '暂无评论' : `${count} 条评论`)}
        </Typography>
      </CardContent>
    );
  }

  renderList = ({ list, loading }) => {
    const { classes } = this.props;
    if (loading) {
      return (
        <div style={{ padding: 16, minHeight: 100 }}>
          <CircularProgress
            size={20}
            style={{ margin: 'auto', display: 'block' }}
          />
        </div>
      );
    }
    return (
      <Fragment>
        {list.map((i, index) => (
          <div className={classes.commentItem} key={i._id}>
            <div className={classes.commentHeader}>
              <Avatar
                aria-label="Recipe"
                className={classes.avatar}
                src={i.user.avatarUrl}
                size={24}
              >
                {i.user.nickname}
              </Avatar>
              <Typography variant="h6" className={classes.nickname}>{i.user.nickname}</Typography>
              <Typography variant="caption">
                {formatTime(i.createdAt, 'MM月DD日')}
              </Typography>
            </div>
            <Typography className={classes.content}><p>{i.content}</p></Typography>
            {index !== list.length - 1 && <Divider inset light style={{ marginLeft: 36 }} />}
          </div>
        ))}
      </Fragment>
    );
  }

  renderPagination = ({ count, refetch }) => {
    const { page } = this.state;
    return (
      <Pagination
        page={page}
        pageSize={5}
        total={count}
        onChange={(val) => {
          this.setState({ page: val }, () => {
            refetch({ skip: (val - 1) * 5 });
          });
        }}
      />
    );
  }

  render() {
    const { classes, _id } = this.props;
    const { page } = this.state;

    return (
      <Query query={COMMENT_LIST} variables={{ commentTo: _id, skip: (page - 1) * 5 }}>
        {({ loading, error, data = {}, refetch }) => {
          // todo 将refetch 传到create中
          const { list = [], meta = { } } = data;
          // if (loading) return 'Loading...';
          if (error) return 'error';
          return (
            <Paper className={classes.root}>
              {this.renderHeader({ count: meta.count, loading })}
              <Divider light />
              <CardContent>
                {this.renderList({ list, loading })}
                {this.renderPagination({ count: meta.count, refetch })}
              </CardContent>
              <Divider light />
              <CardContent>
                <Create _id={_id} refetch={refetch} />
              </CardContent>
            </Paper>
          );
        }}
      </Query>
    );
  }
}
