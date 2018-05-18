import React, { PureComponent } from 'react';
import { isServerSide } from '@/utils/common';

export default (WrappedComponent) => {
  return class NossrComponent extends PureComponent {
    state = {
      show: false,
      nouse: false,
    }
    componentDidMount() {
      this.change();
    }
    change = () => {
      if (!this.state.nouse && !isServerSide()) {
        this.setState({ show: true, nouse: true });
      }
    }
    render() {
      const { loading = 'loading', ...other } = this.props;
      if (!this.state.show) {
        return loading;
      }
      return (
        <WrappedComponent {...other} />
      );
    }
  };
};
