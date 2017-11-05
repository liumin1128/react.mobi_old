import React, { PureComponent } from 'react';
import Modal from 'react-modal';

export default class extends PureComponent {
  render() {
    // const { visible } = this.state;
    const { children, visible, onClose } = this.props;
    return (<Modal
      isOpen={visible}

      // className={{
      //   base: 'toastify--top-center',
      //   afterOpen: 'toastify-bounceOutDown',
      //   beforeClose: 'toastify__close',
      // }}
      // onAfterOpen={afterOpenFn}
      // onRequestClose={requestCloseFn}
      // closeTimeoutMS={n}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transistion: '1s',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          border: 0,
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0px',
          outline: 'none',
          padding: '0px',

        },
      }}
      contentLabel="Modal"
    >
      <div className="top">
        <button className="close" onClick={onClose}>
          <img
            src="http://img.react.mobi/icon/close.svg"
            alt="close"
          />
        </button>
      </div>
      {children}
      <style jsx>{`
        .close {
          background: none;
          border: 0;
        }
        .close img{
          padding: 10px;
          opacity: 0.5;
          width: 25px;
        }
        .top {
          border-bottom: 1px rgba(0,0,0,0.05) solid;
        }
      `}</style>
    </Modal>);
  }
}

