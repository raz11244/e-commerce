const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nakii:Nj12345678@cluster0.svlmhrf.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
module.exports = mongoose;
