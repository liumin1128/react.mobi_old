import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    // width: 24,
    // height: 24,
    padding: 8,
  },
  unactive: {
    color: '#ccc',
  },
  icon: {
    fontSize: 20,
  },
});

@withStyles(styles)
export default class StyleButton extends Component {
  onToggle = (e) => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };
  render() {
    const { icon: Icon, label, active, classes } = this.props;
    return (
      <Button
        color={active ? 'primary' : 'default'}
        aria-label={label}
        onMouseDown={this.onToggle}
        className={classes.button}
        // mini
      >
        {Icon ? <Icon className={`${classes.icon} ${active ? '' : classes.unactive}`} /> : label}
      </Button>
    );
  }
}
