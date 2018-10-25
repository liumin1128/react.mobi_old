import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import { COMMENT_LIST } from '@/graphql/schema/comment';

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing.unit * 3,
    margin: '0 auto',
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
          const { list = [] } = data;
          if (loading) return 'Loading...';
          if (error) return 'error';
          return (
            <Fragment>
              {list.map(i => (
                <p>{i.content}</p>
              ))}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
