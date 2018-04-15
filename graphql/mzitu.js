import gql from 'graphql-tag';

export const MZITU_DETAIL = gql`
  query mzituPictures($_id: String!) {
    detail: mzituPictures(_id: $_id) {
      __typename
      _id
      title
      pictures
    }
  }
`;

export const MZITU_LIST = gql`
  query mzituList($page: Int!) {
    list: mzituList(page: $page) {
      __typename
      _id
      title
      cover {
        width
        height
        src
      }
      url
    }
  }
`;
