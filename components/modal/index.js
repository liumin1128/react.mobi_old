import React, { PureComponent } from 'react';
import Dialog from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

@withStyles(styles)
export default class extends PureComponent {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { destory, children } = this.props;
    return (
      <Dialog
        open={this.state.open}
        keepMounted={false}
        transition={Transition}
        onClose={this.handleClose}
        onExited={() => { if (destory) destory(); }}
        aria-labelledby="form-dialog-title"
      >
        {children}
      </Dialog>
    );
  }
}
