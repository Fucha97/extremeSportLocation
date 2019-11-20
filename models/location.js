const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    img: String,
    link: String,
    foto: String,
    seasonFirst: String,
    seasonEnd: String,
    name: String,
    adress: String,
    video: String,
    sport: String,
    coordinates: String,
    opisanie: String
});

module.exports = mongoose.model('Location', locationSchema);
