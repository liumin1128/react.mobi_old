import { gql } from "@apollo/client";

export interface NewsListResult {
  newsList: News[];
}

export interface NewsResult {
  news: News;
}

export interface News {
  _id: string;
  title: string;
  cover: string;
  html: string;
}

export const NewsListQuery = gql`
  query NewsList {
    newsList {
      __typename
      _id
      title
      html
    }
  }
`;

export const NewsQuery = gql`
  query News($_id: ID!) {
    news(_id: $_id) {
      __typename
      _id
      title
      html
    }
  }
`;
