import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => {
  // 加了restInput，会导致样式异常，无法focus
  // console.log('restInput');
  // console.log(restInput);
  return (
    <TextField
      {...rest}
      name={name}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      // inputProps={restInput}
      onChange={onChange}
      value={value}
    />
  );
};
