import gql from 'graphql-tag';

export const COMMENT_LIST = gql`
  query CommentList($first: Int, $skip: Int, $id: String) {
    list: comments(first: $first, skip: $skip, id: $id) {
      __typename
      _id
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
    meta: _commentsMeta {
      count
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $commentTo: String!) {
    result: createComment(content: $content, commentTo: $commentTo) {
      status
      message
    }
  }
`;
