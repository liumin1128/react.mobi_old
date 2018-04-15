import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import { BXGIF_DETAIL } from '../../graphql/bxgif';


const styles = theme => ({
  item: {
    // border: '1px red solid',
    marginBottom: 32,
    '& > img': {
      width: '100%',
      display: 'block',
      margin: '0 auto',
    },
    '& > p': {
      textAlign: 'center',
      fontSize: 12,
      color: '#333',
    },
  },
});
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    const { classes } = this.props;
    return (<Query query={BXGIF_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { detail = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div className={classes.root}>
            <h3>{detail.title}</h3>
            {detail.list.map(i => (<div className={classes.item}>
              <img src={i.url} alt="" />
              <p>{i.title}</p>
            </div>))}
          </div>
        );
      }}
    </Query>);
  }
}

