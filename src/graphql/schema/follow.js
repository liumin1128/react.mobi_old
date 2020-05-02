import gql from 'graphql-tag'

export const FOLLOW = gql`
  mutation follow($_id: String!) {
    result: follow(_id: $_id) {
      status
      message
    }
  }
`

export const FOLLOW_LIST = gql`
  query follows($first: Int, $skip: Int, $user: String!) {
    list: follows(first: $first, skip: $skip, user: $user) {
      _id
      __typename
      createdAt
      follow {
        _id
        nickname
        avatarUrl
        followStatus
      }
    }
    meta: _followsMeta(user: $user) {
      count
    }
  }
`

export const FANS_LIST = gql`
  query fans($first: Int, $skip: Int, $user: String!) {
    list: fans(first: $first, skip: $skip, user: $user) {
      _id
      __typename
      createdAt
      user {
        _id
        nickname
        avatarUrl
        followStatus
      }
    }
    meta: _fansMeta(user: $user) {
      count
    }
  }
`
