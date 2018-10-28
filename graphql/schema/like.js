import gql from 'graphql-tag';

export const LIKE = gql`
  mutation like($id: String!, $unlike: Boolean) {
    result: like(id: $id, unlike: $unlike) {
      status
      message
    }
  }
`;
