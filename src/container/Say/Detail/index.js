import React from 'react';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { SAY_DETAIL } from '@/graphql/schema/say';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import { formatTime, getTimeAgo } from '@/utils/common';
// import useStyles from './styles';

function SayDetail({ router }) {
  const { _id } = router.query;
  const { data, error, loading, refetch } = useQuery(SAY_DETAIL, { _id });

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id: id }); }}>refetch</Button>
      </div>
    );
  }

  const { data: { user, title, cover, html, url, content, showHtml, appCode, appName, photos, createdAt } } = data;

  return (
    <div>
      <Typography variant="h5" style={{ fontWeight: 600 }}>{content}</Typography>
    </div>
  );
}

export default withRouter(SayDetail);
