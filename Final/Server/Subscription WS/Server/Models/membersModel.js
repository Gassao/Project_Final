
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MembersSchema = new Schema({
    name: String,
    email: String,
    city: String
});
module.exports = mongoose.model('members',MembersSchema);