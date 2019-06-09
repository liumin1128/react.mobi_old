import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import { NEWS_DETAIL } from '@/graphql/schema/news';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';
import { formatTime, getTimeAgo } from '@/utils/common';

// import UserInfo from './UserInfo';

// https://imgs.react.mobi/Fr-KDqr9RX0S-uyQhHci7kgW4Bgk
// https://imgs.react.mobi/FhYeU4wkGY4EwFUrpFQIt8ffhO7X
// https://imgs.react.mobi/Fv7dReRsJkHrQhaESz_v2J1klUXX

const appLogo = {
  '3dmgame.com': 'https://imgs.react.mobi/FhyQn2l-CNmlB-Oxi9pXvm0vZqSJ',
  'toutiao.com': 'https://imgs.react.mobi/Fk0vSrOldS7bHybywpj3pKXTMWEZ',
  'eastday.com': 'https://imgs.react.mobi/FvCrL3RB16fjHafbjXhrrg3zOmGA',
  'qq.com': 'https://imgs.react.mobi/FkIgsT1b8qL52F8fKidNimDhKUJB',
};

@withRouter
export default class NewsDetail extends PureComponent {
  render() {
    const { router } = this.props;
    const { _id } = router.query;
    return (
      <Query query={NEWS_DETAIL} variables={{ _id }}>
        {({ loading, error, data: { data } }) => {
          if (error) return 'error';
          if (loading) return <Loading />;

          const { user, title, cover, html, url, content, showHtml, appCode, appName, photos, createdAt } = data;

          return (
            <div>
              <Typography variant="h4" style={{ fontWeight: 600 }}>{title}</Typography>
              <br />
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, color: '#666', opacity: 0.8 }}>
                <a href={url} target="_blank" style={{ margin: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Avatar aria-label="Recipe" src={appLogo[appCode]} style={{ maxWidth: 18, maxHeight: 18, fontSize: 10, marginRight: 8 }}>
                    {appName[0]}
                  </Avatar>
                  <p style={{ margin: 0, color: '#666', marginRight: 8 }}>
                    {appName}
                    {'  '}
                  </p>
                </a>
                <p style={{ margin: 0 }}>{formatTime(createdAt, 'YYYY-MM-DD HH:mm:ss')}</p>
              </div>
              <br />
              <Html html={html} />
            </div>
          );
        }}
      </Query>
    );
  }
}
