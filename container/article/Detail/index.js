import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { ARTICLE_DETAIL } from '@/graphql/schema/article';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';
import UserInfo from './UserInfo';

// https://imgs.react.mobi/Fr-KDqr9RX0S-uyQhHci7kgW4Bgk
// https://imgs.react.mobi/FhYeU4wkGY4EwFUrpFQIt8ffhO7X
// https://imgs.react.mobi/Fv7dReRsJkHrQhaESz_v2J1klUXX

export default class ArticleDetail extends PureComponent {
  render() {
    const { _id } = this.props;
    return (
      <Query query={ARTICLE_DETAIL} variables={{ _id }}>
        {({ loading, error, data: { article } }) => {
          if (error) return 'error';
          if (loading) return <Loading />;

          const { user, title, cover } = article;

          return (
            <Card>
              <CardMedia
                image={cover || 'https://imgs.react.mobi/Fr-KDqr9RX0S-uyQhHci7kgW4Bgk'}
                title={title}
                style={{
                  height: 0,
                  paddingBottom: '40%',
                }}
              />
              <UserInfo user={user} />
              <CardContent>
                <Link href={`/article/detail?_id=${_id}`}>
                  <Typography style={{ fontWeight: 700, fontSize: 28 }} variant="h5" component="h5">
                    {title}
                  </Typography>
                </Link>
                <Html html={article.html} />
              </CardContent>
            </Card>
          );
        }}
      </Query>
    );
  }
}
