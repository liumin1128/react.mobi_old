import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';

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
      onClick, disabled, sleep, ...other
    } = this.props;
    return (<Button
      {...other}
      disabled={disabled || timer !== 0}
      type="default"
      onClick={() => {
        this.sleep(sleep || 60);
        onClick();
      }}
    >
      {timer ? `重新获取（${timer}）` : '获取验证码'}
    </Button>);
  }
}

export default SleepButton;
