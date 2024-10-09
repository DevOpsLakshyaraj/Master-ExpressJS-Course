const mongoose = require('mongoose');
const short = require('short-uuid');

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortID: {
        type: String,
        default: short.generate()
    }
}, { timestamps: true });

module.exports = {
    Urls: mongoose.model('urls', urlSchema)
}