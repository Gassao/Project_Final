import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {

  const navigate = useNavigate()

const[find,setFindMovie]=useState('')

  return <div style={{ border: "solid 2px black", backgroundColor: "#ffebcd" }}>


    <h3>  Movies Pages </h3>
    <hr style={{ border: "solid 2px black", backgroundColor: "red" }} />
    <button onClick={() => navigate("/AllMovie")} > Movies</button> 
    <button onClick={() => navigate("/Addmovies")}> Add A New Movie </button>
    Find Movie:<input type="text"onChange={e=>setFindMovie(e.target.value)} /> 


     <button onClick={() =>find==''? navigate("/AllMovie"):navigate(`/FindMovie/${find}`)}> Find </button>
  </div>
}
