import React, { PureComponent } from 'react';
import Button from './button';

class SleepButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    this.looper = () => {
      const { timer } = this.state;
      if (timer !== 0) {
        this.setState({
          timer: timer - 1,
        }, () => {
          setTimeout(this.looper, 1000);
        });
      }
    };
    this.sleep = (timer) => {
      this.setState({
        timer,
      }, () => {
        this.looper();
      });
    };
  }
  render() {
    const { timer } = this.state;
    const {
      sleep, onClick, children, style,
    } = this.props;
    return (<Button
      disabled={timer !== 0}
      sleep={sleep}
      onClick={onClick}
      style={style}
      type="default"
    >
      {children}{timer ? `（${timer}）` : ''}
    </Button>);
  }
}

export default SleepButton;
