import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { ARTICLE_DETAIL } from '../../graphql/article';

export default class ArticleDetail extends PureComponent {
  render() {
    const _id = this.props.query.id;
    return (<Query query={ARTICLE_DETAIL} variables={{ _id }}>
      {({ loading, error, data = {} }) => {
        const { article = {} } = data;
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div>{article.content}</div>
        );
      }}
    </Query>);
  }
}

