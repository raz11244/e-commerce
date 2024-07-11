const User = require('../models/user.model');

const userResolvers = {
    Query: {
        getUsers: async () => {
            return await User.find();
        },
    },
    Mutation: {
        createUser: async (_, { name, email }) => {
            const user = new User({ name, email });
            await user.save();
            return user;
        },
    },
};

module.exports = userResolvers;
