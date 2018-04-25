import React, { PureComponent, createContext } from 'react';
import Dialog from 'material-ui/Dialog';
import Fade from 'material-ui/transitions/Fade';
import { randomString } from '../utils/common';

export const ModalContext = createContext();

function Transition(props) {
  return <Fade direction="up" {...props} />;
}

export function modalProvider(WrappedComponent) {
  return class ModalContextProvider extends PureComponent {
    state = {
      modals: [],
    }
    handleClose = (key) => {
      // console.log('key');
      // console.log(key);
      const { modals = [] } = this.state;
      modals.find(i => i.key === key).open = false;
      this.setState({ modals: [...modals] });
    };
    destory = (key) => {
      const { modals = [] } = this.state;
      const idx = modals.findIndex(i => i.key === key);
      modals.splice(idx, 1);
      this.setState({ modals: [...modals] });
    }
    render() {
      const { modals = [] } = this.state;
      // console.log('modals');
      // console.log(modals);
      return (<ModalContext.Provider
        value={{
          add: (C) => {
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
  return function ThemedComponent(props) {
    return (
      <ModalContext.Consumer>
        {(value) => {
          return <WrappedComponent {...props} {...value} />;
        }}
      </ModalContext.Consumer>
    );
  };
}

