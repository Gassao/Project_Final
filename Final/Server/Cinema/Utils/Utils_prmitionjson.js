const DALpermition=require('../jsonfile/DALPermisionJson')
const permitionJson=require('../jsonfile/permision.json')
const getAllPermition=async()=>

{

const permition=await DALpermition.getpermistionJsonData()
return permition;

      
}

const AddPremition=async(obj)=>
{

      await DALpermition.StetpermistionFile( permitionJson,obj )
}

module.exports={ getAllPermition,AddPremition  }

