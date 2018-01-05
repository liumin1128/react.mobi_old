import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import withRoot from '../../components/material-ui/withRoot';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const Login = dynamic(
  import('./index'),
  {
    ssr: false,
    // loading: () => (<div>
    //   <CircularProgress size={20} />
    // </div>),
  },
);


@withRoot
@withStyles(styles)
export default class extends PureComponent {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { destory } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          keepMounted={false}
          transition={Transition}
          onClose={this.handleClose}
          onExited={() => { if (destory) destory(); }}
          aria-labelledby="form-dialog-title"
        >
          <Login />
        </Dialog>
      </div>
    );
  }
}
