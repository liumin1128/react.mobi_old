import React, { PureComponent } from 'react';
import { domRender } from '@/utils/react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'fixed',
    display: 'block',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.8)',
  },
  card: {
    position: 'fixed',
    background: 'red',
    transition: '0.3s',
  },
});

export default function (e, src) {
  const x = e.target.offsetLeft;
  const y = e.target.offsetTop - document.documentElement.scrollTop;
  const w = e.target.offsetWidth;
  const h = e.target.offsetHeight;

  const dw = document.documentElement.clientWidth;
  const dh = document.documentElement.clientHeight;


  let _x;
  let _y;
  let _w;
  let _h;

  if (w > h) {
    _h = h / w * dw;
    _w = dw;
    _x = 0;
    _y = (dh - _h) * 0.5;
  } else {
    _y = 0;
    _h = dh;
    _w = w / h * dh;
    _x = (dw - _w) * 0.5;
  }

  console.log(x, y, w, h);

  class Index extends PureComponent {
    state = {
      isInit: true,
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isInit: false,
        });
      }, 100);
    }

    close = () => {
      const { destory } = this.props;
      this.setState({
        isInit: true,
      });
      setTimeout(destory, 300);
    }

    render() {
      const { classes } = this.props;
      const { isInit } = this.state;
      return (
        <div className={classes.root} onClick={this.close}>
          <img
            className={classes.card}
            style={isInit ? {
              left: x,
              top: y,
              width: w,
              height: h,
            } : {
              left: _x,
              top: _y,
              width: _w,
              height: _h,
            }}
            src={src}
          />
        </div>
      );
    }
  }
  return domRender(withStyles(styles)(Index));
}
