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
  query ArticleList($first: Int, $skip: Int) {
    list: articles(first: $first, skip: $skip) {
      __typename
      _id
      createdAt

      title
      cover
      html
      commentCount
      likeCount
      likeStatus
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

export const CREATE_ARTICLE = gql`
  mutation createArticle($input: ArticleInput) {
    result: createArticle(input: $input) {
      status
      message
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: String) {
    result: deleteArticle(id: $id) {
      status
      message
    }
  }
`;

export const ARTICLE_CONTENT = gql`
  query ArticleDetail($_id: String!) {
    article: article(_id: $_id) {
      __typename
      _id
      title
      cover
      html
      json
      description
      createdAt
    }
  }
`;
