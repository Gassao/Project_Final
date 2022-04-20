
const express = require('express')
const router = express.Router();
const SubscriptionFromDB = require('../../Utils/Subscriptions_utils')




router.route('/').get(async (req, res) => {
    try {

        const Sub = await SubscriptionFromDB.getAllSubs()
    
        return res.json(Sub);
    }
    catch (error) {
        console.log(error);
        return res.json(error);
    }
})

router.route('/:id').get(async (req, res) => {
    try {
        const id = req.params.id;
        const Subscriptions = await SubscriptionFromDB.getSubByid(id)
        return res.json(Subscriptions)
    } catch (error) {
        return res.json(error);
    }
})

router.route('/').post(async (req, res) => {


    try {

        const newSub = req.body;
        const result = await SubscriptionFromDB.getSubByMemberId(newSub.memberId)


        if (result != null   ) {

            const resu = await SubscriptionFromDB.addMovieToSub(result._id, newSub.movies)
            return res.json(resu)

        }
        else {

            const result = await SubscriptionFromDB.addsub(newSub)

            return res.json(result)
        }


    } catch (error) {
        console.log(error);
        return res.json(error);

    }
})
//   --> This function edite( update) by id  from  databases 

router.route('/:id').put(async (req, res) => {
    try {
        const id = req.params.id;
        const updateSub = req.body;
        const result = await SubscriptionFromDB.updateSub(id, updateSub)
        return res.json(result)
    } catch (error) {
        return res.json(error);
    }
})

//   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        const sub = await SubscriptionFromDB.getSubByMemberId(id)
        if (sub != null) {

            const ID = sub._id;
            const result = await SubscriptionFromDB.deleteSub(ID);
            return res.json(result)
        }
        else {

            await SubscriptionFromDB.delemoviefromDB(id)
        }

    } catch (error) {
        return res.json(error);
    }
});

module.exports = router;