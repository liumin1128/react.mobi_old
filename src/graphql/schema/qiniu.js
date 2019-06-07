import gql from 'graphql-tag';

export const QINIU_TOKEN = gql`
  query qiniuToken {
    qiniuToken: qiniuToken {
      token
      expires
    }
  }
`;
