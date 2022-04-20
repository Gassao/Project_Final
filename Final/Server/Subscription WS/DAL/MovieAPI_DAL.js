const  axios = require('axios');
const moviesURL = "https://api.tvmaze.com/shows";

//-->fetch
const GetMovies=async()=>await axios.get(moviesURL)
const GetByIdMovies=async(id)=>await axios.get( `${moviesURL}/${id}`)
const AddMovie=async(obj)=>await axios.post(moviesURL,obj );
const updateMovie=async(id,obj)=>await axios.put(`${moviesURL}/${id}`,obj);
const deleteMovie=async(id)=>await axios.delete(`${moviesURL}/${id}`);




module.exports = { GetMovies,GetByIdMovies,AddMovie, updateMovie,deleteMovie};



