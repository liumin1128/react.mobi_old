import gql from 'graphql-tag'

export const LIKE = gql`
  mutation like($id: String!, $status: Int) {
    result: like(id: $id, status: $status) {
      status
      message
    }
  }
`
