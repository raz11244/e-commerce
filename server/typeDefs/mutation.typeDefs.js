const { gql } = require('apollo-server');

const mutationTypeDefs = gql`
  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

module.exports = mutationTypeDefs;
