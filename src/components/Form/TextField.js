import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({
  input,
  meta,
  ...rest
}) => {
  return (
    <TextField
      {...input}
      {...rest}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
    />
  );
};
