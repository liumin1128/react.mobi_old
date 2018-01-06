import React, { PureComponent } from 'react';
import Dialog from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import { withReduxSaga } from '../../store';
import withRoot from '../material-ui/withRoot';
import Modal from '../modal';
import { domRender } from '../../utils/react';

export default function (WrappedComponent) {
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  const styles = () => ({
    root: {
      flexGrow: 1,
    },
  });

  class C extends PureComponent {
    state = {
      open: true,
    };
    handleClose = () => {
      this.setState({ open: false });
    };
    render() {
      const { destory } = this.props;
      return (
        <Dialog
          open={this.state.open}
          keepMounted={false}
          transition={Transition}
          onClose={this.handleClose}
          onExited={() => { if (destory) destory(); }}
          aria-labelledby="form-dialog-title"
        >
          <WrappedComponent close={this.handleClose} />
        </Dialog>
      );
    }
  }
  return domRender(withReduxSaga(withRoot(withStyles(styles)(C))));
}
