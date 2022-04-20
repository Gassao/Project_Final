import axios from "axios";

const url = "http://localhost:3005/movies";

const GetMovies = async () => await axios.get(url);

const GetByIdMovie = async (id) => {
    return await  axios.get(`${url}/${id}`);

}


const AddMovie = async (obj) => 
{

   return   await axios.post(url,obj )

}
       

const updateMovie = async (id, obj) => {

    return await axios.put(`${url}/${id}`, obj);
}



const deleteMovie = async (id) => {
    
 return    await axios.delete(`${url}/${id}`);

}
export { GetMovies, GetByIdMovie, AddMovie, updateMovie, deleteMovie }











