import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Tags from '@/view/mzitu/tags';
import SearchBar from '@/view/mzitu/searchBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
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


@withStyles(styles)
export default class News extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={12} md={12}>
              <div className={classes.body}>
                <SearchBar />
                <Tags />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
