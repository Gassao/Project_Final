import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Allmembers()
  
{
  const[find,setFind]=useState()
      const navigate=useNavigate();
    return <div    style={ { border:"solid 2px black" ,backgroundColor:"gray" }}>

        <h1> Subscription</h1>
        <hr style={ { border:"solid 2px black" ,backgroundColor:"red"}}  />

           < button  onClick={ ()=>navigate("/members") }>  All Members </button>  
           < button onClick={ ()=> navigate("/Addmember")}> Add Member  </button>
           Find Member:<input type="text" onChange={e=>setFind(e.target.value)}/>
           <button  onClick={ ()=> find==''? navigate("/members"):navigate(`/FindMember/${find}`)}> Find Member  </button>
        
    </div>;
}
