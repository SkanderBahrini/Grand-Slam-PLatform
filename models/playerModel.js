const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    date: String,
    age: Number,
    url: String
});

const player = mongoose.model('player', playerSchema);

module.exports= player;