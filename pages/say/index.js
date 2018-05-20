import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import List from '@/view/says/list';
import Layout from '@/components/layout';
import Calender from '@/components/calender';
import Appbar from '@/components/appbar';

export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <Appbar />
        <Layout>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={8}>
              <Card>
                <Link href="/say/create"><Button>发布</Button></Link>
              </Card>
              <List />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Calender />
            </Grid>
          </Grid>
        </Layout>
      </Fragment>
    );
  }
}
