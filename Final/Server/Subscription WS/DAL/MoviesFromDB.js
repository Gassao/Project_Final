
const MovieModel=require('../Server/Models/moviesModel')
require('../Server/config/DB')



// -->All Movies
const getAllMovies= () => {

    return new Promise((resolve, reject) => {
        MovieModel.find({ }, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//-->get by iD
const getMovieByid = (id) => {
    console.log("gahs");
    return new Promise((resolve, reject) => {
        MovieModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
 //-->Add Movie
const addMovie = (obj) => {

    return new Promise((resolve, reject) => {
        const newMovie = new MovieModel(obj);

        newMovie.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("Added sucessfully")
                resolve("Added sucessfully")
            }
        });
    });
};
//    the function -- >  updateStudent --> edite  items  from databases  

const updateMovie = (id, obj) => {
    console.log(111111111111)
    console.log( id);
    console.log(obj)
    return new Promise((resolve, reject) => {
        MovieModel.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                resolve("Updated sucessfully")
            }
        });
    });
};
//--->Delete Movies
const deleteIdMovie= (id) => {

    console.log(id)
    return new Promise((resolve, reject) => {
        MovieModel.findByIdAndDelete(id, (err) => {
            if (err) {
           
                reject(err)
            }
            else {
                console.log( "Deleted sucessfully");
                resolve("Deleted sucessfully")
            }
        });
    });
};

module.exports = { deleteIdMovie, updateMovie, addMovie, getMovieByid, getAllMovies }