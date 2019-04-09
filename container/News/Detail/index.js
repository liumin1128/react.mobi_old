import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import { NEWS_DETAIL } from '@/graphql/schema/news';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';
// import UserInfo from './UserInfo';

// https://imgs.react.mobi/Fr-KDqr9RX0S-uyQhHci7kgW4Bgk
// https://imgs.react.mobi/FhYeU4wkGY4EwFUrpFQIt8ffhO7X
// https://imgs.react.mobi/Fv7dReRsJkHrQhaESz_v2J1klUXX

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

          const { user, title, cover, html, url, content, showHtml, appCode } = data;

          return (
            <div style={{ maxWidth: 700 }}>
              <a href={url} target="_blank">{url}</a>
              <br />
              {appCode}
              <br />
              {showHtml ? 'html' : 'txt'}
              {
                showHtml
                  ? <Html html={html} />
                  : <p>{content}</p>
              }
            </div>
          );
        }}
      </Query>
    );
  }
}
