import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const navigate=useNavigate();

  return <div   style={{ backgroundColor:"rosybrown  "}}>  main


<hr style={ { border:"solid 2px black" ,backgroundColor:"black"}}   />
<h1>  Movies-Subscription Web Site </h1>


<button onClick={ ()=> navigate("/movies") } >Movies   </button>  <button onClick={  ()=> navigate( "/Allmembers")}>Subscriptions   </button> <button  onClick={ ()=>  navigate("/MainEmployees")}> Users Management   </button>  <button onClick={ ()=> navigate( -1)}>   Logout  </button> 

  </div>
}

export default MainPage;
