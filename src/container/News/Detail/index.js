import React from 'react';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NEWS_DETAIL } from '@/graphql/schema/news';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import { formatTime, getTimeAgo } from '@/utils/common';
// import useStyles from './styles';

const appLogo = {
  '3dmgame.com': 'https://imgs.react.mobi/FhyQn2l-CNmlB-Oxi9pXvm0vZqSJ',
  'toutiao.com': 'https://imgs.react.mobi/Fk0vSrOldS7bHybywpj3pKXTMWEZ',
  'eastday.com': 'https://imgs.react.mobi/FvCrL3RB16fjHafbjXhrrg3zOmGA',
  'qq.com': 'https://imgs.react.mobi/FkIgsT1b8qL52F8fKidNimDhKUJB',
};

function NewsDetail({ router }) {
  const { _id } = router.query;
  const { data, error, loading, refetch } = useQuery(NEWS_DETAIL, { _id });

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
      <Typography variant="h5" style={{ fontWeight: 600 }}>{title}</Typography>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, color: '#666', opacity: 0.8 }}>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ margin: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Avatar aria-label="Recipe" src={appLogo[appCode]} style={{ maxWidth: 18, maxHeight: 18, fontSize: 10, marginRight: 8 }}>
            {appName[0]}
          </Avatar>
          <p style={{ margin: 0, color: '#666', marginRight: 8 }}>
            {appName}
          </p>
        </a>
        <p style={{ margin: 0 }}>{formatTime(createdAt, 'YYYY-MM-DD HH:mm:ss')}</p>
      </div>
      <br />
      <Html html={html} />
    </div>
  );
}

export default withRouter(NewsDetail);
