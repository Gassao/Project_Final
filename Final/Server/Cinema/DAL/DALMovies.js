const  axios = require('axios');

const usersURL = "http://localhost:3089/movies";

const GetMovies=async()=>await axios.get(usersURL);
const GetByIdMovie=async(id)=>await axios.get( `${usersURL}/${id}`);
const AddMovie=async(obj)=>await axios.post(usersURL,obj );
const updateMovie=async(id,obj)=>await axios.put(`${usersURL}/${id}`,obj);
const deleteMovie=async(id)=>await axios.delete(`${usersURL}/${id}`);



module.exports = { GetMovies,GetByIdMovie,AddMovie, updateMovie,deleteMovie};


