import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetMovies } from '../DAL/DAL_Movies'
import Movie from './Movie' ;



export default function FindMovie() {


    const [FindMovies, setFindMovie] = useState([])
    const { find } = useParams();

    useEffect(() => {
        async function get() {
            const res = await GetMovies()
            return res;
        }

        get().then(res => {
            let movies = [];
            res.data.map(movie => {
                if (movie.name.toLowerCase().includes(find.toLowerCase())) {
                    movies.push(movie);
                }
            });
    
            setFindMovie(movies);
        })

    }, [find])


    const MovuesRep = FindMovies.map((movie, index) => {



        return (

            <Movie key={index} movie={movie} />
        )
    })
    return (
        <div>


            {MovuesRep}


        </div>
    )


}
