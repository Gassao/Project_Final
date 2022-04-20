const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/usersDB")

    .catch(error => console.log(error));