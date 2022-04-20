import axios from "axios";

const url = "http://localhost:3005/subscription/";



const GetAllSuub = async () => await axios.get(url)
const GetByIdSub = async (id) => await (await axios.get(`${url}/${id}`)).data;
const AddSub = async (obj) => {
    const res = await axios.post(url, obj);
    return res.data;
}
const updateSub = async (id, obj) => await axios.put(`${url}/${id}`, obj);
const deleteSub = async (obj) => await axios.delete(`${url}/${obj}`);

export { GetAllSuub, GetByIdSub, AddSub, updateSub, deleteSub }