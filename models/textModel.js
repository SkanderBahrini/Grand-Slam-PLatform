const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    name: String,
    textname :String
});

const text = mongoose.model('text', textSchema);

module.exports= text;