
const subscriptionDAL = require('../DAL/SubscriptionFromDB')
require('../Server/config/DB')


const getAllSubs = async () => {
    const subs = await subscriptionDAL.getAllSub();
    return subs;
}


const getSubByid = async (id) => {
    const sub = await subscriptionDAL.getSubByid(id)
    return sub;
}


const addsub = async (obj) => {

    await subscriptionDAL.addSub(obj)
}


const updateSub = async (id, obj) => {

    await subscriptionDAL.updateSub(id, obj)
}

const deleteSub = async (id) => {
    await subscriptionDAL.deleteIdSub(id)
}


const addMovieToSub = async (id, newMovie) => {
    await subscriptionDAL.addMoiveToSub(id, newMovie)
}

const getSubByMemberId = async (memberId) => {

 return   await subscriptionDAL.getSubByMemberId(memberId)
}



const delemoviefromDB = async (movieID) => {

    await subscriptionDAL.deleteMovieFromSub(movieID)
}





module.exports = {
     getSubByid,addsub, deleteSub, updateSub,addMovieToSub,getSubByMemberId, getAllSubs, delemoviefromDB
}













