import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default ({ input: { onChange, value }, meta, margin, label, width, max }) => {
  const helperText = meta.touched ? meta.error : undefined;
  const error = meta.error && meta.touched;
  return (
    <FormControl margin={margin} style={{ width: '100%' }}>
      <InputLabel shrink>{label}</InputLabel>
      <Box mt={2} />
      <FormGroup row>
        <FormControlLabel
          control={(
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checkedH"
            />
          )}
          label="男"
        />
        <Box ml={2} />
        <FormControlLabel
          control={(
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checkedH"
            />
          )}
          label="女"
        />
        <Box ml={2} />
        <FormControlLabel
          control={(
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checkedH"
            />
          )}
          label="保密"
        />
      </FormGroup>
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};
