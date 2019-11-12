import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UpPicture from '@/components/Upload/Wrapper';
import Layout from '@/components/Layout/Base';
import withApollo from '@/lib/apollo';

import Header from '@/components/Layout/Header';
import Card from '@/components/Card';

@withApollo
export default class index extends PureComponent {
  render() {
    return (
      <>
        <Box display="flex" justifyContent="center">
          <Box width="100%" maxWidth={400}>
            <Card title="1111">1111</Card>
            <Box mt={2} />
            <Card title="1111">2222</Card>

            <Box mt={2} />
            <Card>333</Card>
          </Box>
        </Box>
      </>
    );
  }
}
