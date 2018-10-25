import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import { COMMENT_LIST } from '@/graphql/schema/comment';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Create from './create';

const styles = theme => ({
  title: {
    fontSize: 16,
    // fontWeight: 'bold',
    padding: '12px 16px',
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
});

@withStyles(styles)
export default class test extends PureComponent {
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
              <Typography className={classes.title} variant="h4" component="h4">
                {`${meta.count} 条评论`}

              </Typography>
              <Divider />
              <CardContent>

                <br />
                <br />
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
                <Create _id={_id} refetch={refetch} />
              </CardContent>
            </Paper>
          );
        }}
      </Query>
    );
  }
}
