
const express = require('express');
const memberRouter=require('../../DAL/membersDAL')
const router = express.Router()





router.route('/').get(async (req, res) => {
    try
    {
        const members = await memberRouter.GetUsers();
    
        return res.json(members);
     
    }
    catch(error)
    {
        return res.json(error);
    }
})

router.route('/:id').get(async (req, res) => {
    try{
        const id = req.params.id;
        const getID = await memberRouter.GetByIdUsers(id);
        return res.json(getID)
    }   catch(error){
        return res.json(error);
    }
})

router.route('/').post(async (req, res) => {

    try{
        const newmember = req.body;
        const result = await memberRouter.AddUser( newmember)
        return res.json(result)
         
    }   catch(error){
        return res.json(error);
       
    }
})
// //   --> This function edite( update) by id  from  databases 
router.route('/:id').put(async (req, res) => {

    console.log( 9999);
    try{
        const id = req.params.id;
        const updatemember= req.body;
        const result = await  memberRouter.updateUser(id,updatemember)
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
})

// //   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try{
        const id = req.params.id;
        const result = await memberRouter.deleteUser(id)
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
});

module.exports = router;