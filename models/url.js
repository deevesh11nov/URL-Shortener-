const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: false, // Make this field not required if it's not always available
    },
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
