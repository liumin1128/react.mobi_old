import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    result: userLogin(username: $username, password: $password) {
      status
      message
      token
      userInfo {
        _id
        nickname
        avatarUrl
      }
    }
  }
`;

export const USERINFO = gql`
  query userInfo {
    userInfo: userInfo {
        _id
        nickname
        avatarUrl
    }
  }
`;
