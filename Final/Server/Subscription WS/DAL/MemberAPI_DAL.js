const axios = require('axios');
const userURL="https://jsonplaceholder.typicode.com/users";



const GetMembers=async()=>await axios.get(userURL)
const GetByIdMembers=async(id)=>await axios.get( `${userURL}/${id}`)
const AddMember=async(obj)=>await axios.post(userURL, obj);
const updateMenmber=async(id,obj)=>await axios.put(`${userURL}/${id}`,obj);
const deleteMember=async(id)=>await axios.delete(`${userURL}/${id}`);



module.exports = { GetMembers,GetByIdMembers,AddMember, updateMenmber,deleteMember};

