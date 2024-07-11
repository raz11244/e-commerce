const { mergeResolvers } = require('@graphql-tools/merge');
const userResolvers = require('./user.resolvers');
const queryResolvers = require('./query.resolvers');
const mutationResolvers = require('./mutation.resolvers');

const resolvers = mergeResolvers([queryResolvers, userResolvers, mutationResolvers]);

module.exports = resolvers;
