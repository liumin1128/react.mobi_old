import React, { PureComponent } from 'react';
import { withReduxSaga } from '../../store';
import withRoot from '../material-ui/withRoot';
import Modal from '../modal';
import { domRender } from '../../utils/react';

export default function (WrappedComponent) {
  class C extends PureComponent {
    render() {
      return (<Modal {...this.props}>
        <WrappedComponent />
      </Modal>);
    }
  }
  return domRender(withReduxSaga(withRoot(C)));
}
