import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Login from '@/view/login';

const styles = {
  card: {
    maxWidth: 360,
    margin: 16,
    boxShadow: 'none',
  },
  media: {
    height: 0,
    paddingTop: '60%',
  },
};


@withStyles(styles)
export default class LoginPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          hideBackdrop
          open
          // className={classes.card}
          classes={{
            paper: classes.card,
          }}
        >
          <CardMedia
            className={classes.media}
            image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
          />
          <CardContent>
            <Login />
          </CardContent>
        </Dialog>
      </div>
    );
  }
}
