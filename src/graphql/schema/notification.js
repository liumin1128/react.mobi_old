import gql from 'graphql-tag';

export const NOTIFACATION_LIST = gql`
  query NotificationList($first: Int, $skip: Int) {
    list: notifications(first: $first, skip: $skip) {
      __typename
      createdAt
      _id


      user {
        _id
        nickname
        avatarUrl
      }

      actionor {
        _id
        nickname
        avatarUrl
      }
      
      actionShowText
      userShowText
      actionorShowText
    }
    meta: _notificationsMeta {
      count
    }
  }
`;
