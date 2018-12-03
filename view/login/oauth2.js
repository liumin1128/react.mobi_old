import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// https://imgs.react.mobi/FgEWNcoi0IAl_SjRixPwi6_dMoa2
// https://imgs.react.mobi/FnBjvuOrSAfDgsb6lJbRvP6DR9a3
import OauthButton from './components/OauthButton';

const styles = theme => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  orLine: {
    textAlign: 'center',
    position: 'relative',
    color: '#d8d8d8',
    margin: '20px 0',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '43%',
      height: 1,
      top: '50%',
      display: 'block',
      background: '#d8d8d8',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '43%',
      height: 1,
      top: '50%',
      right: 0,
      display: 'block',
      background: '#d8d8d8',
    },
  },
});

@withStyles(styles)
export default class oauth extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <div className={classes.orLine}>
            <div className={classes.line} />
            <div className={classes.or}>Or</div>
          </div>
          <OauthButton
            text="使用Github账号登录"
            color="#24292e"
            icon="https://imgs.react.mobi/FitOmAQE-Ulzbzg3ba2cNRohbhCk"
          />
          <OauthButton
            text="使用微信账号登录"
            color="#02b234"
            icon="https://imgs.react.mobi/FoRb0_NUH0SrLH6-UfD0jXQnzecd"
          />
        </div>
      </Fragment>
    );
  }
}
