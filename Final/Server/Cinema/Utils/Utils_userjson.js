const userJson=require('../jsonfile/user.json')
 const DALuserjson=require('../jsonfile/DALuserJson')

const getAll=async()=>
{

 const users=await DALuserjson.getUsersJsonData()
 return users;
        
}

const AddTo_UserJson=async( obj)=>
{

await DALuserjson.WritToUsersData(userJson, obj );
      
}

module.exports={ getAll,AddTo_UserJson }