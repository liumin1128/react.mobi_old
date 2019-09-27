import gql from 'graphql-tag';

export const FOLLOW = gql`
  mutation follow($_id: String!) {
    result: follow(_id: $_id) {
      status
      message
    }
  }
`;
