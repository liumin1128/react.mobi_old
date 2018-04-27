import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    result: userLogin(username: $username, password: $password) {
      status
      message
      userInfo {
        _id
        nickname
        avatarUrl
      }
    }
  }
`;
