import axios from 'axios';
const url = "http://localhost:3005/members";
const getAllMembers = async () => await axios.get(url);
const getByIdMember = async (id) => await axios.get(`${url}/${id}`);
const deleletMember = async (id) => await axios.delete(`${url}/${id}`);
const updateMember = async (id, obj) => await axios.put(`${url}/${id}`, obj);
const AddMember = async (obj) => 
{

    return await axios.post(url, obj);
}

export { getAllMembers, getByIdMember, deleletMember, updateMember, AddMember }
