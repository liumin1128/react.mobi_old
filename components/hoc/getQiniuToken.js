import React, { PureComponent } from 'react';
import { connect } from '../../utils';


export default function (WrappedComponent) {
  return @connect(({ common }) => ({
    qiniuToken: common.qiniuToken,
  }))
  class extends PureComponent {
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'common/getQiniuToken',
      });
    }
    getWrappedInstance = () => {
      if (this.props.widthRef) {
        return this.wrappedInstance;
      }
    }
    setWrappedInstance = (ref) => {
      this.wrappedInstance = ref;
    }
    render() {
      const props = {
        ...this.props,
      };

      if (this.props.withRef) {
        props.ref = this.setWrappedInstance;
      }
      return <WrappedComponent {...props} />;
    }
  };
}

