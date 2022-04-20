
const express=require('express');
const membersUtils =require('../../Utils/membersUtils')
const router = express.Router()



router.route('/').get(async (req, res) => {
      try
      {
          const membes = await membersUtils.getAllMembers();
          return res.json(membes);
         
      }
      catch(error)
      {
          return res.json(error);
      }
  })

router.route('/:id').get(async (req, res) => {
    try{
        const id = req.params.id;
        const membes = await  membersUtils.getMemberbyId( id);
        return res.json(membes)
    }   catch(error){
        return res.json(error);
    }
})
//-->Add
router.route('/').post(async (req, res) => {

    try{
     
        const newMembers = req.body;
        const result = await  membersUtils.addMember(newMembers )
        return res.json(result)
         
    }   catch(error){
        return res.json(error);
       
    }
})
// //   --> This function edite( update) by id  from  databases 
router.route('/:id').put(async (req, res) => {

    try{
        const id = req.params.id;
        const Newupdatemembers= req.body;
        const result = await membersUtils.updateMember( id,Newupdatemembers)
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
})

//   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try{
        const id = req.params.id;
        const result = await membersUtils.deleteMember( id)
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
});

module.exports = router;