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
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import MenSvg from './men.svg';
import WoMenSvg from './women.svg';

export default ({ input: { onChange, value }, meta, margin, label, width, max }) => {
  const helperText = meta.touched ? meta.error : undefined;
  const error = meta.error && meta.touched;
  console.log('value');
  console.log(value);
  const _value = value || 0;
  return (
    <FormControl margin={margin} style={{ width: '100%' }}>
      <InputLabel shrink>{label}</InputLabel>
      <Box mt={2} />
      <FormGroup row>
        <FormControlLabel
          control={(
            <Checkbox
              icon={<SvgIcon><MenSvg width="100%" height="100%" /></SvgIcon>}
              checkedIcon={<SvgIcon htmlColor="#75b9eb"><MenSvg width="100%" height="100%" /></SvgIcon>}
              value="men"
              checked={_value === 1}
              onClick={() => { onChange(1); }}
            />
          )}
          label="男"
        />
        <Box ml={2} />
        <FormControlLabel
          control={(
            <Checkbox
              color="secondary"
              icon={<SvgIcon><WoMenSvg width="100%" height="100%" /></SvgIcon>}
              checkedIcon={<SvgIcon htmlColor="#ff61bc"><WoMenSvg width="100%" height="100%" /></SvgIcon>}
              value="women"
              checked={_value === 2}
              onClick={() => { onChange(2); }}
            />
          )}
          label="女"
        />
        <Box ml={2} />
        <FormControlLabel
          control={(
            <Checkbox
              color="default"
              icon={<LockOpenIcon style={{ width: 20, height: 20 }} />}
              checkedIcon={<LockIcon style={{ width: 20, height: 20 }} />}
              value="checkedH"
              checked={_value === 0}
              onClick={() => { onChange(0); }}
            />
          )}
          label="保密"
        />
      </FormGroup>
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};
