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
      select
      value={value}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      onChange={onChange}
      SelectProps={{
        native: true,
      }}
      {...rest}
    >
      <option value="" />
      <option value="+86">中国</option>
      <option value="+1">美国</option>
    </TextField>
  );
};
