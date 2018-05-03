import gql from 'graphql-tag';

export const TODAY_IN_HISTORY = gql`
  query todayInHistory($date: String) {
    list: todayInHistory(date: $date) {
      __typename
      title
      year
      month
      display: img
    }
  }
`;
