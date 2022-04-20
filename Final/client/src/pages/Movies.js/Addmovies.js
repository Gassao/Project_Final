import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddMovie } from '../DAL/DAL_Movies';


export default function Addmovies(props) {


    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [premiered, setPremiered] = useState("");
    const [genres, setGenres] = useState([]);
    const [showerr, setShowerr] = useState(false);
    const [movie, setMovie] = useState({ name: '', img: "", genres: [], premiered: "" })
    const [arr, setArr] = useState("")



    const handleForm = async (e) => {
        e.preventDefault();
        if (name == '' || img == "" || premiered == "") {
            setShowerr(true)
        }
        else {

            setShowerr(false)

            const movieobj = {

                name,
                genres: genres,
                image: img,
                premiered
            }

            await AddMovie(movieobj)

            navigate("/AllMovie")


        }

    }
    const Cancel = () => {

        setMovie({ name: "", genres: [], image: "", premiered: "" })
        setArr('')
    }

    return <div style={{ border: "solid 2px black", backgroundColor: "coral" }} >

        Add Movie
        <hr style={{ border: "solid 2px black", backgroundColor: "black" }} />

        <form    >
            Name: <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Movie Name" /> <br />
            genres: <input type="text" name="email" onChange={(e) => setGenres(e.target.value)} placeholder="Gener1,..." /> <br />
            image: <input type="text" name="image" onChange={(e) => setImg(e.target.value)} placeholder="https://https://example..." /> <br />
            Primered: <input type="date" name="Primered" onChange={(e) => setPremiered(e.target.value)} /> <br />
             {/* option1--> */}
            < input type='button' value="Save" onClick={(e) => handleForm(e)} />      <button onClick={Cancel} >  Cancel   </button>
            {/* option 2--> */}
            {/* <button onClick={() => navigate("/AllMovie")} >  Cancel   </button> */}
            <br />    <br />    <br />
        </form>
     
    </div>
}
