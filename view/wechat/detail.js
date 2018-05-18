import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import { WECHAT_DETAIL } from '@/graphql/wechat';


const styles = theme => ({
  root: {
    '& > img': {
      width: '100%',
      marginBottom: theme.spacing.unit * 3,
    },
  },
});
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    const { classes } = this.props;
    return (<Query query={WECHAT_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { detail = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className={classes.root}>
            <div dangerouslySetInnerHTML={{ __html: detail.content }} />
          </div>
        );
      }}
    </Query>);
  }
}

