import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { SAY_LIST } from '@/graphql/schema/say';
import { useQuery } from '@/hooks/graphql';
import useStyles from './styles';

function SayList({ router }) {
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(SAY_LIST, router.query);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  console.log('list');
  console.log(list);

  return (
    <Fragment>
      1111
    </Fragment>
  );
}

export default withRouter(SayList);
