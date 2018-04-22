import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import styleRoot from '../../hoc/styleRoot';
import apolloRoot from '../../hoc/apolloRoot';
import reduxRoot from '../../hoc/reduxRoot';
import Detail from '../../view/wechat/detail';

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
  render() {
    const { classes, url } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={12} md={12}>
              <div className={classes.body}>
                <Detail query={url.query} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
