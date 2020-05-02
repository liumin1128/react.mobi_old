import gql from 'graphql-tag'

export const MEIZITU_DETAIL = gql`
  query meizituPictures($_id: String!) {
    detail: meizituPictures(_id: $_id) {
      __typename
      _id
      title
      pictures
    }
  }
`

export const MEIZITU_LIST = gql`
  query meizituList($page: Int!) {
    list: meizituList(page: $page) {
      __typename
      _id
      title
      cover
      url
    }
  }
`
