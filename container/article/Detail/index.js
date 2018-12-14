import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { ARTICLE_DETAIL } from '@/graphql/schema/article';
import Loading from '@/components/Loading';

export default class ArticleDetail extends PureComponent {
  render() {
    const { _id } = this.props;
    return (
      <Query query={ARTICLE_DETAIL} variables={{ _id }}>
        {({ loading, error, data: { article } }) => {
          if (loading) return <Loading />;

          console.log('article');
          console.log(article);

          return (
            <div>
              {article.title}
            </div>
          );
        }}
      </Query>
    );
  }
}
