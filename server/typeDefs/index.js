const { mergeTypeDefs } = require('@graphql-tools/merge');
const queryTypeDefs = require('./query.typeDefs');
const mutationTypeDefs = require('./mutation.typeDefs');
const userTypeDefs = require('./user.typeDefs');

const typeDefs = mergeTypeDefs([queryTypeDefs, mutationTypeDefs, userTypeDefs ]);
module.exports = typeDefs;
