import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import Link from '@/components/Link';

const styles = theme => ({
  btn: {
    width: 60,
    height: 60,
    flexDirection: 'column',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 12,
    fontWeight: 500,
  },
});

@withStyles(styles)
export default class Edite extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Link href="/article/create" passHref scroll={false}>
                <ButtonBase className={classes.btn}>
                  <CreateIcon />
                  <Typography className={classes.btnText}>写文章</Typography>
                </ButtonBase>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <ButtonBase className={classes.btn}>
                <StarIcon />
                <Typography className={classes.btnText}>写文章</Typography>
              </ButtonBase>
            </Grid>
            <Grid item xs={4}>
              <ButtonBase className={classes.btn}>
                <StarIcon />
                <Typography className={classes.btnText}>写文章</Typography>
              </ButtonBase>
            </Grid>
          </Grid>
          <br />
          <Divider />

        </CardContent>
      </Card>
    );
  }
}
