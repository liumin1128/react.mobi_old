import React from 'react';
import Box from '@material-ui/core/Box';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

export default (props) => {
  const {
    input: { onChange, value = false },
    meta = {},
    label,
    ...other
  } = props;

  const helperText = meta.touched ? meta.error : undefined;
  const error = meta.error && meta.touched;

  // console.log('value');
  // console.log(value);

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <Box ml={-1.5}>
          <Checkbox
            {...other}
            checked={!!value}
            onClick={() => {
              onChange(!value);
            }}
          />
        </Box>
        {/* <Typography variant="caption">{label}</Typography> */}
        <InputLabel shrink>{label}</InputLabel>

      </Box>
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </Box>
  );
};
