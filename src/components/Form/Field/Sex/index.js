import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SvgIcon from '@material-ui/core/SvgIcon';
import MenSvg from './men.svg';
import WoMenSvg from './women.svg';

const useStyles = makeStyles(theme => ({
  lockLabel: {
    // color: '#789',
  },
  womenLabel: {
    color: '#ff61bc',
  },
  menLabel: {
    color: '#75b9eb',
  },
  defaultLabel: {
    color: '#666',
  },
}));

export default ({ input: { onChange, value }, meta, margin, label, width, max }) => {
  const classes = useStyles();
  const helperText = meta.touched ? meta.error : undefined;
  const error = meta.error && meta.touched;
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
              checked={_value === 1}
              onClick={() => { onChange(1); }}
            />
          )}
          label="男"
          classes={{ label: _value === 1 ? classes.menLabel : classes.defaultLabel }}

        />
        <Box ml={3} />
        <FormControlLabel
          control={(
            <Checkbox
              color="secondary"
              icon={<SvgIcon><WoMenSvg width="100%" height="100%" /></SvgIcon>}
              checkedIcon={<SvgIcon htmlColor="#ff61bc"><WoMenSvg width="100%" height="100%" /></SvgIcon>}
              checked={_value === 2}
              onClick={() => { onChange(2); }}
            />
          )}
          label="女"
          classes={{ label: _value === 2 ? classes.womenLabel : classes.defaultLabel }}


        />
        <Box ml={3} />
        <FormControlLabel
          control={(
            <Checkbox
              icon={<LockOpenIcon style={{ width: 20, height: 20 }} />}
              checkedIcon={<LockIcon style={{ width: 20, height: 20 }} />}
              checked={_value === 0}
              onClick={() => { onChange(0); }}
            />
          )}
          label="保密"
          classes={{ label: _value === 0 ? classes.lockLabel : classes.defaultLabel }}
        />
      </FormGroup>
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};
