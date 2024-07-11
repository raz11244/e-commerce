const { gql } = require('apollo-server');

const queryTypeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = queryTypeDefs;
