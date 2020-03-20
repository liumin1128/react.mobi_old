import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  media: {
    height: 0,
    paddingTop: '100%',
    marginBottom: 8,
    opacity: 0.6,
  },
  media2: {
    height: 0,
    paddingTop: '100%',
    marginBottom: 8,
    margin: -2,
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

        <Grid item xs={6}>
          <CardMedia
            className={classes.media2}
            image="https://imgs.react.mobi/FlL5SMO_2SIfBkWPWJERNd79GN4D"
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
