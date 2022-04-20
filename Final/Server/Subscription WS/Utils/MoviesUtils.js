require('../Server/config/DB')
const moviesDAL = require('../DAL/MoviesFromDB');
const movieAPI = require('../DAL/MovieAPI_DAL')


//--> All functions called by Server  when it Activing and fetch API  and put them in to BD
const getAllMo = async () => {
    const movies = await moviesDAL.getAllMovies()
    return movies;
}

const getMoviebyIdd = async (id) => {
    const movie = await moviesDAL.getMovieByid(id)
    console.log(4444)

    return movie;
}
const addNewMovie = async (obj) => {
    await moviesDAL.addMovie(obj)
}

const updateMoviesTT = async (id, obj) => {
    await moviesDAL.updateMovie(id, obj)
}

const deleteidMovieU = async (id) => {
    await moviesDAL.deleteIdMovie(id);
}


// check it if the flag is true , if the flag true then put itemes from data base else put null 
const loadAllMoives = async function () {
    const movies = await (await movieAPI.GetMovies()).data;
    const Movies = movies.slice(0, 10)
    const movieFromDB = await getAllMo();
    movieFromDB == '' ? Movies.forEach(movie => {

        const newAD = {

            name: movie.name,
            image: movie.image.medium,
            Premiered: movie.premiered,
            genres: movie.genres

        }

        moviesDAL.addMovie(newAD)

    }) : null;


}

module.exports = { loadAllMoives, deleteidMovieU, updateMoviesTT, addNewMovie, getMoviebyIdd, getAllMo }

