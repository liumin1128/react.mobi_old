import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from './Snackbar';
import withStyle from '../../hoc/material-ui/withRoot';

@withStyle
class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.closeModals = this.closeModals.bind(this);
    this.state = {
      visible: true,
    };
  }

  onExited() {
    this.props.removeChild();
  }

  closeModals() {
    this.modal.onCancel();
  }

  render() {
    // console.log(this.props);
    return <Snackbar {...this.props} />;
  }
}


export default (config) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  function removeChild() {
    // 从 DOM 中移除已经挂载的 React 组件，清除相应的事件处理器和 state。
    // 如果在 container 内没有组件挂载，这个函数将什么都不做。
    // 如果组件成功移除，则返回 true；如果没有组件被移除，则返回 false。
    const unmountResult = ReactDOM.findDOMNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  ReactDOM.render(<Container
    removeChild={() => removeChild()}
    {...config}
  />, div);
};
