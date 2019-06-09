import React from 'react';
import { withRouter } from 'next/router';
import { useQuery } from 'react-apollo-hooks';
import LazyLoad from 'react-lazyload';
import Button from '@material-ui/core/Button';
import Loading from '@/components/Loading';

import { MZITU_DETAIL } from '@/graphql/schema/mzitu';
import imageView from '@/components/ImageView';

import useStyles from './styles';

function MzituDetail({ router }) {
  const classes = useStyles();
  const { id } = router.query;
  const { data, error, loading, refetch } = useQuery(MZITU_DETAIL, { variables: { _id: id }, suspend: true });

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id: id }); }}>refetch</Button>
      </div>
    );
  }

  const { detail } = data;

  return (
    <div className={classes.root}>
      <h3>{detail.title}</h3>
      {detail.pictures.map(i => (
        <LazyLoad debounce={300} key={i} height={300}>
          <img
            onClick={(e) => { imageView(e, i); }}
            src={i}
            alt=""
          />
        </LazyLoad>
      ))}
    </div>
  );
}

export default withRouter(MzituDetail);
