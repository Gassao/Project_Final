
require('../Server/config/DB')
const SubscriptionModel = require('../Server/Models/SubscriptionModel')

//--> Get All Items from DB
const getAllSub = () => {

    return new Promise((resolve, reject) => {
        SubscriptionModel.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//-->get by id from DB
const getSubByid = (id) => {
    return new Promise((resolve, reject) => {
        SubscriptionModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//-->add items from DB
const addSub = (obj) => {

    return new Promise((resolve, reject) => {
        const newSub = new SubscriptionModel(obj);
        newSub.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Subscription added ")
            }
        })

    })
}
//-->update Subscription
const updateSub = (id, obj) => {

    return new Promise((resolve, reject) => {
        SubscriptionModel.findByIdAndUpdate(id, obj, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Subscription sucessfully")
            }
        });
    });
};
//-->delelte subscription
const deleteIdSub = (id) => {

    return new Promise((resolve, reject) => {
        SubscriptionModel.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Subscription Deleted")
            }
        });
    });
};

// Add Movies
const addMoiveToSub = (id, movie) => {

    return new Promise((resolve, reject) => {
        SubscriptionModel.updateOne({ _id: id }, { $push: { movies: movie } }, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Movie added To Subscription ")
            }
        })
    })
}

//    the function -- >  updateStudent --> edite  items  from databases  


const deleteMovieFromSub = (movieId) => {
    return new Promise((resolve, reject) => {
        SubscriptionModel.updateMany({}, { $pull: { movies: { movieId: movieId } } }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Movie Deleted From Subscription")
            }
        });
    });

}

// finds a sub by memebrId
const getSubByMemberId = async (memberId) => {
    /*
     *  if subscriptionModel.find is successful => returns {...}
     *  else, returns '' 
     */
    return await SubscriptionModel.findOne( {memberId:memberId });
}

module.exports = { deleteIdSub, updateSub, addSub, getSubByid, getAllSub, addMoiveToSub, deleteMovieFromSub, getSubByMemberId }//