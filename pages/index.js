import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import styleRoot from '../hoc/styleRoot';
import apolloRoot from '../hoc/apolloRoot';
import reduxRoot from '../hoc/reduxRoot';
import getQuery from '../hoc/getQuery';
import SaysList from '../view/says/list';

@reduxRoot
@apolloRoot
@styleRoot
@getQuery
export default class News extends PureComponent {
  render() {
    return (
      <div >
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={8}>
            <SaysList />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
              2
          </Grid>
        </Grid>
      </div>
    );
  }
}
