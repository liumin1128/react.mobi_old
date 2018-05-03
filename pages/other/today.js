import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import withRoot from '../../hoc';
import Layout from '../../layout';
import List from '../../components/calender/todayInHistoryWidthImg';

@withRoot
export default class TodayInHistory extends PureComponent {
  // static async getInitialProps({ query }) {
  //   return { query };
  // }
  render() {
    return (
      <Layout>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12}>
            <List />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
