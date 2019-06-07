import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Link from '@/components/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
    marginBottom: 8,
    opacity: 0.8,
  },
});

@withStyles(styles)
export default class index extends PureComponent {
  render() {
    // https://imgs.react.mobi/FuUzX-Uz3L1CO2a9aUDsAv5tY1kH
    // https://imgs.react.mobi/FlbZ2qwJrIvzlzPXW1rCVCx2zKSV
    const { classes } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.media}
            image="https://imgs.react.mobi/FlbZ2qwJrIvzlzPXW1rCVCx2zKSV"
            title="Contemplative Reptile"
          />
        </Grid>
        {
          //   <Grid item xs={12} md={6}>
          //   <CardMedia
          //     className={classes.media}
          //     image="https://imgs.react.mobi/FuUzX-Uz3L1CO2a9aUDsAv5tY1kH"
          //     title="Contemplative Reptile"
          //   />
          //   <Typography variant="body2">
          //     转账加好友
          //   </Typography>
          // </Grid>
        }
      </Grid>
    );
  }
}
