import React, { PureComponent } from 'react';
import Waypoint from 'react-waypoint';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    height: '60px',
    lineHeight: '60px',
    textAlign: 'center',
    color: '#ddd',
    fontSize: 14,
    '@media (max-width: 700px)': {
      fontSize: 12,
    },
  },
  progress: {
    // margin: '0 auto',
    // display: 'block',
    color: '#ddd',
  },
};

@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes, isEnd, onEnter } = this.props;
    if (isEnd) {
      return (<div className={classes.root}>
        ~ 我是有底线的 ~
      </div>);
    }
    return (<Waypoint
      onEnter={onEnter}
    >
      <div className={classes.root}>
        <CircularProgress className={classes.progress} />
      </div>
    </Waypoint>);
  }
}
