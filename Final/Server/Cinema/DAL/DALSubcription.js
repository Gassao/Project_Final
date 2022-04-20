const  axios = require('axios');
const subURL = "http://localhost:3089/Subscription/";




const GetALSub=async()=>await axios.get(subURL)

const GetByIdSub=async(id)=>await axios.get( `${subURL}/${id}`)

const Addsub=async(obj)=>await axios.post(subURL,obj);

const updateSUB=async(id,obj)=>await axios.put(`${subURL}/${id}`,obj);

const deleteSub=async(id)=>await axios.delete(`${subURL}/${id}`)



module.exports = { GetALSub,GetByIdSub,Addsub,updateSUB,deleteSub};
