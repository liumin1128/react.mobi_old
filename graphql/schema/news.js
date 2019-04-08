import gql from 'graphql-tag';

export const NEWS_DETAIL = gql`
  query NewsDetail($id: String!) {
    news: NewsDetail(id: $id) {
      __typename
      title
      createdAt
      description
      source
      html
      labels
      photos
      cover
      tags
    }
  }
`;

export const NEWS_LIST = gql`
  query NewsList($first: Int, $skip: Int) {
    list: NewsList(first: $first, skip: $skip) {
      __typename
      id
      title
      createdAt
      description
      source
      html
      labels
      photos
      cover
      tags
    }
  }
`;
