import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    result: userLogin(username: $username, password: $password) {
      __typename
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
        __typename
        _id
        nickname
        avatarUrl
    }
  }
`;

export const USER_PHONENUMBER_CODE = gql`
  mutation getPhoneNumberCode($purePhoneNumber: String!, $countryCode: String!) {
    result: getPhoneNumberCode(purePhoneNumber: $purePhoneNumber, countryCode: $countryCode) {
      __typename
      status
      message
    }
  }
`;

export const USER_REGISTER = gql`
  mutation userRegister($input: UserRegisterInput) {
    result: userRegister(input: $input) {
      __typename
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
