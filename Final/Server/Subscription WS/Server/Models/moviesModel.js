const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const MoviesSchema = new Schema({
    name: String,
    image: String,
    Premiered: Date,
    genres: Array
});




module.exports = mongoose.model('movies', MoviesSchema);

