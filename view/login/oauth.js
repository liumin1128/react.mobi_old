import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    background: theme.palette.primary.main,
  },
  logo: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 32,
    color: theme.palette.primary.main,
  },
});

@withStyles(styles)
export default class oauth extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <img className={classes.logo} src="https://imgs.react.mobi/Fi6oyHGOpFKKAjNJilB5LSeTRurZ" alt="" />
          {
            // <Typography className={classes.title} component="h2" variant="h1" gutterBottom>
            // 盗火
            // </Typography>
          }
        </div>
      </Fragment>
    );
  }
}
