import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  updateMovie } from '../DAL/DAL_Movies';




export default function Edite(props) {

    const [movie, setMovie] = useState({ name: '', genres: [], image: '', Premiered: ' ' });
    const navigate = useNavigate()



    const up = async () => {

        try {
         
            await updateMovie(props.id, movie)
            navigate(0)

        } catch (error) {
            console.log(error);
        }

    }

    return <div style={{ border: "solid 2px black", backgroundColor: "coral" }}>

        Edit Movie
        <div style={{ width: "160px" }}  >
            Name: <input type="text" name="name" onChange={(e) => setMovie({ ...movie, name: e.target.value })} value={movie.name} placeholder="Enter The Name Movie" />  <br />
            genres: <input type="text" name="genres" onChange={(e) => setMovie({ ...movie, genres: e.target.value })} value={movie.genres} placeholder="Genres1,Genres2,..." /> <br />
            image: <input type="text" name="image" onChange={(e) => setMovie({ ...movie, image: e.target.value })} value={movie.image} placeholder="http//example..." /> <br />
            Primered: <input type="date" name="Premiered" onChange={(e) => setMovie({ ...movie, Premiered: e.target.value })} value={movie.Premiered} />
            <button onClick={up}> update </button> <button onClick={() => navigate(0)}  > Cancel </button>

        </div>

    </div>
}

