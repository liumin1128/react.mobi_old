import React from 'react';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';

export default ({
  input: { name, onChange, value, type, ...input },
  meta,
  required,
  classes,
  options,
  label,
  fullWidth,
  ...rest
}) => {
  // console.log('rest');
  // console.log(rest);
  // console.log('value');
  // console.log(value);
  return (
    <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
      <InputLabel shrink>{label}</InputLabel>
      <Switch
        checked={!!value}
        onChange={onChange}
        color="primary"
        required={required}
        {...input}
        {...rest}
      />
    </Box>
  );
};
