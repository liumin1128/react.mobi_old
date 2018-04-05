import gql from 'graphql-tag';

export const ARTICLE_DETAIL = gql`
  query ArticleDetail($_id: String!) {
    article: article(_id: $_id) {
      __typename
      _id
      title
      cover
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
  }
`;

export const ARTICLE_LIST = gql`
  query ArticleList($first: Int!, $skip: Int!) {
    list: articles(first: $first, skip: $skip) {
      __typename
      _id
      title
      cover
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
    meta: _articlesMeta {
      count
    }
  }
`;
