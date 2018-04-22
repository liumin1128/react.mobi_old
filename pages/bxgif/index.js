import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import styleRoot from '../../hoc/styleRoot';
import apolloRoot from '../../lib/apolloRoot';
import reduxRoot from '../../hoc/reduxRoot';
import List from '../../view/bxgif/list';

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: 32,
  },
  body: {
    maxWidth: 760,
    width: '100%',
    margin: '0 auto',
  },
  container: {
    boxSizing: 'border-box',
    margin: 0,
    // border: '1px red solid',
    width: '100%',
    '@media (max-width: 960px)': {
      margin: 0,
    },
  },
});

@reduxRoot
@apolloRoot
@styleRoot
@withStyles(styles)
export default class News extends PureComponent {
  // static async getInitialProps({ query, store }) {
  //   await store.dispatch({ type: 'test', payload: query });
  //   return query;
  // }
  // componentDidMount() {
  //   console.log('xxx');
  // }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={12} md={12}>
              <div className={classes.body}>
                <List />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
