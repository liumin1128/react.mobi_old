import React, { PureComponent, createContext } from 'react';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { randomString } from '../utils/common';

export const ModalContext = createContext();

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export function modalProvider(WrappedComponent) {
  return class ModalContextProvider extends PureComponent {
    state = {
      modals: [],
    }
    handleClose = (key) => {
      const { modals = [] } = this.state;
      modals.find(i => i.key === key).open = false;
      this.setState({ modals: [...modals] });
    };
    destory = (key) => {
      const { modals = [] } = this.state;
      modals.splice(modals.findIndex(i => i.key === key), 1);
      this.setState({ modals: [...modals] });
    }
    render() {
      const { modals = [] } = this.state;
      return (<ModalContext.Provider
        value={{
          modal: (C) => {
            this.setState({
              modals: [...modals, {
                key: randomString(),
                open: true,
                C,
              }],
            });
          },
        }}
      >
        <WrappedComponent {...this.props} />
        {modals.map(({ key, C, open }) =>
          (<Dialog
            key={key}
            open={open}
            keepMounted={false}
            transition={Transition}
            onClose={() => this.handleClose(key)}
            onExited={() => this.destory(key)}
            aria-labelledby="form-dialog-title"
          >
            <C close={() => this.handleClose(key)} />
          </Dialog>))}
      </ModalContext.Provider>);
    }
  };
}

export function modalConsumer(WrappedComponent) {
  return class ThemedComponent extends PureComponent {
    render() {
      return (
        <ModalContext.Consumer>
          {(value) => {
            return (<WrappedComponent
              {...this.props}
              {...value}
            />);
          }}
        </ModalContext.Consumer>
      );
    }
  };
}

