const mongoose = require('mongoose');

module.exports = {
    connectDB: async function () {
        await mongoose.connect('mongodb://localhost:27017/iurls-project');
        console.log(`Connected to mongodb !! ${mongoose.connections[0].host}`);
    }
}