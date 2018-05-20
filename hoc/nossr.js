import React, { PureComponent } from 'react';
import { isServerSide } from '@/utils/common';

export default (WrappedComponent) => {
  return class NossrComponent extends PureComponent {
    state = {
      show: false,
      skip: false,
    }
    componentDidMount() {
      this.change();
    }
    change = () => {
      if (!this.state.skip && !isServerSide()) {
        this.setState({ show: true, skip: true });
      }
    }
    render() {
      const { ...other } = this.props;
      if (!this.state.show) {
        return '';
      }
      return (
        <WrappedComponent {...other} />
      );
    }
  };
};
