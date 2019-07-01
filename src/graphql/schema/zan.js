import gql from 'graphql-tag';

export const ZAN = gql`
  mutation zan($_id: String!) {
    result: zan(_id: $_id) {
      status
      message
    }
  }
`;
