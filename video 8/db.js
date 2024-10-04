const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/devopslakshyaraj');
    console.log('Connected to mongodb !!', mongoose.connections[0].host);
}

module.exports = connectDB;