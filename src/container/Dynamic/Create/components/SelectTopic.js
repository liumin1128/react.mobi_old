import React, { Fragment, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { DYNAMIC_TOPIC_LIST } from '@/graphql/schema/dynamic';
import { useMutation } from '@/hooks/graphql';
import useStyles from './styles';

function Topics() {
  const getTopics = useMutation(DYNAMIC_TOPIC_LIST);
  const classes = useStyles();
  return (
    <Fragment>
      <InputBase
        classes={{
          root: classes.root,
          input: classes.input,
        }}
        onChange={(e) => {
          getTopics({ title: e.target.value }, {
            update: (_, { data }) => {
              console.log('data');
              console.log(data);
            },
          });
        }}
      />
    </Fragment>
  );
}

export default Topics;
