import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MutiPictures from '@/components/Upload/MutiPictures';

export default ({ input: { onChange, value }, meta, label, width, max }) => {
  const helperText = meta.touched ? meta.error : undefined;
  const error = meta.error && meta.touched;
  return (
    <Box mb={2}>
      <InputLabel shrink>{label}</InputLabel>
      <Box mt={1} />
      <MutiPictures value={value} onChange={onChange} width={width} max={max} />
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </Box>
  );
};
