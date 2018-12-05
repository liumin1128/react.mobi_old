import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// https://imgs.react.mobi/FgEWNcoi0IAl_SjRixPwi6_dMoa2
// https://imgs.react.mobi/FnBjvuOrSAfDgsb6lJbRvP6DR9a3

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  btn: {
    width: 40,
    height: 40,
    padding: 0,
  },
  icon: {
    width: 32,
    height: 32,
    opacity: 0.6,
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
          <a href="https://api.react.mobi/oauth/github">
            <IconButton className={classes.btn}>
              <img className={classes.icon} src="https://imgs.react.mobi/FgEWNcoi0IAl_SjRixPwi6_dMoa2" alt="" />
            </IconButton>
          </a>
          <a href="https://api.react.mobi/oauth/wechat">
            <IconButton className={classes.btn}>
              <img className={classes.icon} src="https://imgs.react.mobi/FnBjvuOrSAfDgsb6lJbRvP6DR9a3" alt="" />
            </IconButton>
          </a>
        </div>

        {
          // <img className={classes.logo} src="https://imgs.react.mobi/Fi6oyHGOpFKKAjNJilB5LSeTRurZ" alt="" />
          // <Typography className={classes.title} component="h2" variant="h1" gutterBottom>
          // 盗火
          // </Typography>
        }
      </Fragment>
    );
  }
}
