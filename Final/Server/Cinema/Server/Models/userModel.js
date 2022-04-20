
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    Username : String,
    Password : String
});



module.exports = mongoose.model('users',UsersSchema);