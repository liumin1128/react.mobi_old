import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { SAY_CREATE } from '@/graphql/schema/say';
import { useMutation } from '@/hooks/graphql';
import useStyles from './styles';

function SayCreate({ router }) {
  const params = {
    input: {
      content: '测试文本',
    },
  };

  const createSay = useMutation(SAY_CREATE, params, {
    refetchQueries: [ 'SayList' ],
  });

  return (
    <Fragment>
      SayCreate
      <Button onClick={createSay}>useMutation</Button>
    </Fragment>
  );
}

export default withRouter(SayCreate);
