import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Detail from '@/container/article/Detail';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Side from '@/container/side';
@withRouter
export default class index extends PureComponent {
  render() {
    const { router } = this.props;
    const { _id } = router.query;
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={8}>
            <Detail _id={_id} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Hidden implementation="css" only={[ 'sm', 'xs' ]}>
              <Side />
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}
