
const express = require('express')
const Subsutils = require('../../Utils/subscription')
const router = express.Router();



router.route('/').get(async (req, res) => {
    try {
        const subscription = await Subsutils.getAllSubs()
        return res.json(subscription);
    }
    catch (error) {
        return res.json(error);
    }
})



router.route('/:id').get(async (req, res) => {
    try {
        const id = req.params.id;
     
        const Subscriptions = await Subsutils.getSubById(id)
        return res.json(Subscriptions)
    } catch (error) {
        return res.json(error);
    }
})

router.route('/').post(async (req, res) => {


    try {

        const newSub = req.body;
        const result = await Subsutils.addSub(newSub )
        return res.json(result)


    } catch (error) {
        return res.json(error);

    }
})
//   --> This function edite( update) by id  from  databases 

router.route('/:id').put(async (req, res) => {
    try {
        const id = req.params.id;
        const updateSubbscription = req.body;
        const result = await Subsutils.updateSub(id, updateSubbscription)
        return res.json(result)

    } catch (error) {
        return res.json(error);
    }
})

//   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Subsutils.deleteSub(id)
        return res.json(result)
    } catch (error) {
        return res.json(error);
    }
});

module.exports = router;