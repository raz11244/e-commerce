const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;