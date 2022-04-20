const  axios = require('axios');
const usersURL = "http://localhost:3089/members";



const GetUsers=async()=>await (await axios.get(usersURL)).data;
const GetByIdUsers=async(id)=>await (await axios.get( `${usersURL}/${id}`)).data;
const AddUser=async(obj)=>await axios.post(usersURL,obj);
const updateUser=async(id,obj)=>await axios.put(`${usersURL}/${id}`,obj);
const deleteUser=async(id)=>await axios.delete(`${usersURL}/${id}`);





module.exports = { GetUsers,GetByIdUsers,AddUser, updateUser,deleteUser};

