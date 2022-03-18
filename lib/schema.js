import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    todos: [String!]!
  }
  type Mutation {
    create_todo(todo: String!): String
  }
`;

export default typeDefs;
