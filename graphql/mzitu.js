import gql from 'graphql-tag';

export const MZITU_LIST = gql`
  query mzituList($page: Int, $search: String, $tag: String ) {
    list: mzituList(page: $page, search: $search, tag: $tag) {
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

