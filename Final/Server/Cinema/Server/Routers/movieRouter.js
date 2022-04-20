
const express = require('express');
const movieUtils = require('../../DAL/DALMovies')
const router = express.Router()






router.route('/').get(async (req, res) => {

    try {
        const movies = await movieUtils.GetMovies();

        return res.json(movies.data);
    }
    catch (error) {
        return res.json(error);
    }
})

router.route('/:id').get(async (req, res) => {
    try {
        const id = req.params.id;
        const getID = await movieUtils.getMoviebyId(id);
        return res.json(getID.data)
    } catch (error) {
        return res.json(error);
    }
})

router.route('/').post(async (req, res) => {

    try {
        const newMovie = req.body;
        const result = await movieUtils.addNewMovie(newMovie)
        return res.json(result)

    } catch (error) {
        return res.json(error);

    }
})
// //   --> This function edite( update) by id  from  databases 
router.route('/:id').put(async (req, res) => {

    try {
        const id = req.params.id;
        const updateNewMovie = req.body;
        const result = await movieUtils.updateMovie(id, updateNewMovie);
        return res.json(result)
    } catch (error) {
        return res.json(error);
    }
})

// //   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        const result = await movieUtils.deleteMovie(id)

        return res.json(result)
    } catch (error) {
        return res.json(error);
    }
});

module.exports = router;