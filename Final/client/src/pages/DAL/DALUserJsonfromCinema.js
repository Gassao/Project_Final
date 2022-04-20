import axios from "axios";
const url = "http://localhost:3005/usersJson";


const GetUserN = async () =>
{
   return  await axios.get(url)

}



const GetByIdUsers = async (id) => await axios.get(`${url}/${id}`);


const AddUser = async (obj) => await axios.post(url,obj);


const updateUser = async (id,obj) => await axios.put(`${url}/${id}`,obj);
const deleteuser =async (id) => await axios.delete(`${url}/${id}`);




 export { AddUser, GetUserN, GetByIdUsers, updateUser, deleteuser };