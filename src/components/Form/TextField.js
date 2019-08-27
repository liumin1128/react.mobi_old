import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({
  input,
  meta,
  helperText,
  ...rest
}) => {
  return (
    <TextField
      {...input}
      {...rest}
      helperText={meta.touched ? meta.error : helperText}
      error={meta.error && meta.touched}
    />
  );
};
