import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from ’@material-ui/corestyles';
import IconButton from ’@material-ui/coreIconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input, { InputAdornment } from ’@material-ui/coreInput';

const styles = {
  textFieldRoot: {
    background: 'rgba(255,255,255,0.11)',
    paddingLeft: 8,
    width: 180,
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    '& >  input': {
      color: '#fff',
    },
  },
  textFieldFocused: {
    background: 'rgba(0,0,0,0.1)',
    width: 220,
  },
  textFieldInput: {
    color: '#fffff',
  },
  search: {
    fontSize: 16,
    width: 36,
    height: 36,
  },
};

@connect()
@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Input
        id="adornment-password"
        color="contrast"
        // type="search"
        disableUnderline
        classes={{
          root: classes.textFieldRoot,
          input: classes.textFieldInput,
          focused: classes.textFieldFocused,
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton className={classes.search} color="contrast">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    );
  }
}

