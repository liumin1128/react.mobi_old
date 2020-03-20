import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import useStyles from './styles';

function SearchInput({ onChange }) {
  const classes = useStyles();

  // const [ value, setValue ] = useState();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => {
          if (typeof onChange === 'function') onChange(e);
        }}
      />
    </div>
  );
}

export default SearchInput;
