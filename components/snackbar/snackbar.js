import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => ({
  root: {
    // background: 'red',
    // height: 36,
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

@withStyles(styles)
export default class MySnackbar extends PureComponent {
  state = {
    open: true,
  };

  componentWillUnmount() {
    // setTimeout(() => {
    //   this.props.removeChild();
    // }, 2000);
  }

  handleExited = () => {
    this.props.removeChild();
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
    // setTimeout(() => {
    //   this.props.removeChild();
    // }, 2000);
  };

  render() {
    const {
      classes,
      message = 'OK',
      actionText = 'OK',
    } = this.props;

    const action = [<Button
      key="undo"
      color="inherit"
      dense="true"
      onClick={this.handleClose}
    >
      {actionText}
    </Button>];

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={2000}
        onClose={this.handleClose}
        onExited={this.handleExited}
        // SnackbarContentProps={{
        //   className: classes.root,
        //   'aria-describedby': 'message-id',
        // }}
        snackbarcontentprops={{
          className: classes.root,
          'aria-describedby': 'message-id',
        }}
        message={message}
        action={action}
      />
    );
  }
}
