import React, { PureComponent } from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import DraftEditor from '@/components/DraftEditor';
import Layout from '@/components/Layout';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    color: theme.palette.text.secondary,
  },
});

@withStyles(styles)
export default class ArticleCreate extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Layout>
          <Grid container spacing={24}>
            <Grid item md={8} xs={12}>
              <Card className={classes.Card}>
                <NoSsr>
                  <DraftEditor />
                </NoSsr>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card className={classes.Card}>xs=6</Card>
            </Grid>
          </Grid>
        </Layout>
      </div>
    );
  }
}
