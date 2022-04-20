
const mongoose = require('mongoose');
const utils = require('../../Utils/membersUtils')
const moviesUtils=require('../../Utils/MoviesUtils')
 mongoose.connect( "mongodb://localhost:27017/SubscriptionDB", () =>
{
    utils.loadMembers();
    moviesUtils.loadAllMoives();

})
 .catch(error=>console.log(error) );

