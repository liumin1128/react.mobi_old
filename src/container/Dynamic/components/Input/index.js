
import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

function Input({ onChange, value }) {
  const [ _value, setValue ] = useState(value);
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="center">
        <InputBase
          placeholder="请填写视频网站iframe代码"
          fullWidth
          defaultValue={value}
          classes={{
            root: classes.root,
            input: classes.input,
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Box ml={2} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onChange(_value);
          }}
        >
          确定
        </Button>
      </Box>
    </>
  );
}

export default Input;
