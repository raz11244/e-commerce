const { gql } = require('apollo-server');

const userTypeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
  }

  extend type Query {
    getUsers: [User]
  }

  extend type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

module.exports = userTypeDefs;
