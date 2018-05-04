import React, { PureComponent, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import withRoot from '../../hoc';
import List from '../../view/says/list';
import Layout from '../../layout';
import Calender from '../../components/calender';
import Appbar from '../../components/appbar';
import Editor from '../../components/draft-editor';

@withRoot
export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <Layout>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={8}>
              <Editor />
            </Grid>
          </Grid>
        </Layout>
      </Fragment>
    );
  }
}
