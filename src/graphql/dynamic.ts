import { gql } from "@apollo/client";

export interface DynamicsResult {
  dynamics: Dynamic[];
}

export interface DynamicResult {
  dynamic: Dynamic;
}

export interface Dynamic {
  _id: string;
  title: string;
  content: string;
}

export const DynamicFragment = gql`
  fragment comparisonFields on Dynamic {
    _id
    content
  }
`;

export const DynamicsQuery = gql`
  ${DynamicFragment}
  query Dynamics {
    dynamics {
      ...comparisonFields
    }
  }
`;

export const DynamicQuery = gql`
  ${DynamicFragment}
  query Dynamic($_id: ID!) {
    dynamic(_id: $_id) {
      ...comparisonFields
    }
  }
`;

export const CreateDynamic = gql`
  ${DynamicFragment}
  mutation CreateDynamic($content: String!) {
    createDynamic(input: { content: $content }) {
      ...comparisonFields
    }
  }
`;
