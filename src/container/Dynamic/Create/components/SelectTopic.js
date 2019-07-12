import React, { Fragment, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles';

function DynamicCreate() {
  //   const createDynamic = useMutation(DYNAMIC_CREATE);
  const classes = useStyles();
  return (
    <Fragment>
      <InputBase
        classes={{
          root: classes.root,
          input: classes.input,
        }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </Fragment>
  );
}

export default DynamicCreate;
