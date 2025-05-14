import { gql } from "graphql-tag";

export const commonTypeDefs = gql`
  scalar DateTime

  type Query {
    sampleQuery: String!
  }

  type Mutation {
    sampleMutation: String!
  }
`;
