import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 3,
    background: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '14px 15px',
    width: 'calc(100% - 30px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',

    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes, ...other } = this.props;
    return (<div className={classes.container}>
      <TextField
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
        {...other}
      />
    </div>);
  }
}
