import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import { COMMENT_LIST } from '@/graphql/schema/comment';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Pagination from '@/components/Pagination';
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
    width: 28,
    height: 28,
    borderRadius: 4,
    marginRight: 8,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 14,
  },
  pageBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageBtn: {
    minHeight: 40,
    lineHeight: '40px',
    textAlign: 'center',
    minWidth: 40,
    display: 'inline-block',
  },
});

@withStyles(styles)
export default class test extends PureComponent {
  renderPagination = ({ onChange }) => {
    const { classes, _id } = this.props;
    return (
      <div className="pagination">
        {
        [1, 2, 3, 4].map(i => (
          <ButtonBase
            onClick={() => {
              onChange(i);
            }}
            className={classes.pageBtn}
          >
            {i}
          </ButtonBase>
        ))
      }
      </div>
    );
  }

  render() {
    const { classes, _id } = this.props;
    return (
      <Query query={COMMENT_LIST} variables={{ commentTo: _id }}>
        {({ loading, error, data = {}, refetch }) => {
          // todo 将refetch 传到create中
          const { list = [], meta } = data;
          if (loading) return 'Loading...';
          if (error) return 'error';
          return (
            <Paper className={classes.root}>
              <CardContent className={classes.header}>
                <Typography className={classes.title} variant="h6" component="h6">
                  {meta.count === 0 ? '暂无评论' : `${meta.count} 条评论`}
                </Typography>
                <Typography>时间 | 热度</Typography>
              </CardContent>
              <Divider light />
              <CardContent>
                <Fragment>
                  {list.map(i => (
                    <Fragment key={i._id}>
                      <div className={classes.flex}>
                        <Avatar
                          aria-label="Recipe"
                          className={classes.avatar}
                          src={i.user.avatarUrl}
                          size={24}
                        >
                          {i.user.nickname}
                        </Avatar>
                        <Typography variant="h6" className={classes.nickname}>{i.user.nickname}</Typography>
                      </div>
                      <p>{i.content}</p>
                    </Fragment>
                  ))}
                </Fragment>

                <Pagination
                  page={1}
                  pageSize={5}
                  total={meta.count}
                  onChange={(page) => {
                    refetch({ skip: (page - 1) * 5 });
                  }}
                />

                <Create _id={_id} refetch={refetch} />
              </CardContent>
            </Paper>
          );
        }}
      </Query>
    );
  }
}
