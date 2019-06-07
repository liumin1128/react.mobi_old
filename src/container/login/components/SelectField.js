import React from 'react';
import TextField from '@material-ui/core/TextField';
import countries from '@/static/countries.json';

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
      {countries.map(i => <option key={i.code + i.abbr} value={i.code}>{i.name}</option>)}
    </TextField>
  );
};
