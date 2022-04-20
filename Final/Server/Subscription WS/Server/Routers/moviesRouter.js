
const express = require('express');
const moviesUtils = require('../../Utils/MoviesUtils');
const router = express.Router()




router.route('/').get(async (req, res) => {
    try {
        const movies = await moviesUtils.getAllMo();
        return res.json(movies);

    }
    catch (error) {
        return res.json(error);
    }
})

router.route('/:id').get(async (req, res) => {
    try {
        const id = req.params.id;
        const getID = await moviesUtils.getMoviebyIdd(id)
        return res.json(getID)
    } catch (error) {
        return res.json(error);
    }
})
//-->post
router.route('/').post(async (req, res) => {

  
    try {
    

        const newMovie = req.body;
        const result = await moviesUtils.addNewMovie(newMovie)

        return res.json(result);
   
    } catch (error) {

    
        console.log(error);
        return res.json(error);

    }
})
// //   --> This function edite( update) by id  from  databases 
router.route('/:id').put(async (req, res) => {
 
    try {
        const id = req.params.id;
        const updateNewMovie = req.body;
        const result = await moviesUtils.updateMoviesTT(id, updateNewMovie)
        return res.json(result)
    } catch (error) {
        return res.json(error);
    }
})

// //   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        const result = await moviesUtils.deleteidMovieU(id);
        return res.json(result)
    } catch (error) {
        return res.json(error);
    }
});

module.exports = router;