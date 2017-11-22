import React, { PureComponent } from 'react';
import Modal from 'react-modal';

export default class extends PureComponent {
  render() {
    const { children, visible } = this.props;
    return (<Modal
      isOpen={visible}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transistion: '1s',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        content: {
          position: 'absolute',
          width: '80%',
          height: '50%',
          margin: 'auto',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          border: 0,
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '5px',
          outline: 'none',
          padding: '0px',
          boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
        },
      }}
      contentLabel="Modal"
    >
      {children}
    </Modal>);
  }
}

