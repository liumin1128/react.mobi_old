import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Picture from '@/components/Upload/Picture';

export default function PictureField({ input: { onChange, value }, meta, label, width }) {
  const helperText = meta.touched ? meta.error : undefined;
  const error = meta.error && meta.touched;
  return (
    <Box mb={2}>
      <InputLabel shrink>{label}</InputLabel>
      <Box mt={1} />
      <Picture value={value} onChange={onChange} width={width} />
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </Box>
  );
}
