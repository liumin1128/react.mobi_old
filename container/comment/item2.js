import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    '@media (min-width: 768px)': {
      margin: -12,
    },
  },
  content: {
    paddingLeft: 72,
    paddingTop: 0,
  },
  p: {
    marginBottom: 16,
  },
});


@withStyles(styles)
export default class extends PureComponent {
  render() {
    return (<div />);
  }
}
