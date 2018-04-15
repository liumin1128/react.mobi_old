import gql from 'graphql-tag';

// export const MZITU_DETAIL = gql`
//   query mzituPictures($_id: String!) {
//     detail: mzituPictures(_id: $_id) {
//       __typename
//       _id
//       title
//       pictures
//     }
//   }
// `;

export const WECHAT_LIST = gql`
  query wechat($name: String) {
    list: wechat(name: $name) {
      __typename
      title
      cover
    }
  }
`;
