import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import { MEIZITU_DETAIL } from '../../graphql/meizitu';


const styles = theme => ({
  root: {
    '& > img': {
      width: '100%',
      marginBottom: 32,
    },
  },
});
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    const { classes } = this.props;
    return (<Query query={MEIZITU_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { detail = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className={classes.root}>
            {detail.title}
            {detail.pictures.map(i => <img src={i} alt="" />)}
          </div>
        );
      }}
    </Query>);
  }
}

