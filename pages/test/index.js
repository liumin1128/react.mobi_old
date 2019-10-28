import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UpPicture from '@/components/Upload/Wrapper';
import Layout from '@/components/Layout/Base';
import modal from '@/hoc/modal';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

@withApollo
@withLayout
export default class index extends PureComponent {
  onUpPictureSuccess = (values) => {
    console.log(values);
    modal(({ close }) => (
      <Card>
        <CardContent>
          <ul>
            {values.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </CardContent>
        <CardActions>
          <Button onClick={() => { close(); }} size="small">ok</Button>
        </CardActions>
      </Card>
    ));
  }

  render() {
    return (
      <Layout>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">
                  图片上传组件，包裹任意元素，即可实现点击上传图片到七牛
                </Typography>
                <br />
                <UpPicture
                  multiple
                  onChange={this.onUpPictureSuccess}
                >
                  <Button>点击上传</Button>
                </UpPicture>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Paper />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
