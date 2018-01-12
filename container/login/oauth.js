import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = {
  root: {
    width: '100%',
  },
  fieldset: {
    textAlign: 'center',
    border: 'none',
    fonsSize: 12,
    borderTop: '1px solid rgba(0,0,0,0.1)',
    marginTop: 16,
  },
  legend: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.3)',
    padding: 10,
  },
  icon: {
    width: 36,
  },
};

@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes } = this.props;
    return (<div>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>社交账号登录</legend>
        <div>
          <a href="https://api.react.mobi/oauth/github">
            <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
              <img className={classes.icon} src="https://imgs.react.mobi/icon/github.svg" alt="" />
            </IconButton>
          </a>
          <a href="https://api.react.mobi/oauth/wechat">
            <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
              <img className={classes.icon} src="https://imgs.react.mobi/icon/wechat.svg" alt="" />
            </IconButton>
          </a>
          <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
            <img className={classes.icon} src="https://imgs.react.mobi/icon/qq.svg" alt="" />
          </IconButton>
          <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
            <img className={classes.icon} src="https://imgs.react.mobi/icon/weibo.svg" alt="" />
          </IconButton>
        </div>
      </fieldset>
    </div>);
  }
}
