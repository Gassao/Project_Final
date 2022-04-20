import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { AddEmployees } from '../Utils/utils';


export default function AddEmployee() {

        const [FirstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [Username, setUseruame] = useState('')
        const [Createddate, setCreateddate] = useState('')
        const [SessionTimeOut, setSessionTimeOut] = useState('')
        const [perSub, setPerSub] = useState([])
        const [perMovie, setPerMovie] = useState([])

const navigate=useNavigate()




const handleForm=async(e)=>
{
e.preventDefault();

   
const  obj={

        FirstName:FirstName,
        LastName:lastName,
        Username:Username,
        Createddate:Createddate,
        SessionTimeOut:SessionTimeOut,
        Permissions:[...perSub, ...perMovie]
          
}
    const x=      await AddEmployees(obj)
console.log( x);
          
          navigate("/Employees")
}

const FlagCheckBoxSubs = (e) => {
          const {checked, name} = e.target;
          if (checked)
          {
            name == 'View Subscriptions'?
            setPerSub([...perSub,name]) :
            setPerSub([...perSub,'View Subscriptions',name]);
          }
          else
          {
            if (name == 'View Subscriptions')
            {
              setPerSub([]);
            }
            else
            {
              const index = perSub.findIndex(perm => name == perm);
              perSub.splice(index,1);
              setPerSub([...perSub]);
            }
          }
}
const FlagCheckBoxMovies = (e) => {
          const {checked, name} = e.target;
          if (checked)
          {
            name == 'View Movies'?
            setPerMovie([...perMovie,name]) :
            setPerMovie([...perMovie,'View Movies',name]);
          }
          else
          {
            if (name == 'View Movies')
            {
              setPerMovie([]);
            }
            else
            {
              const index = perMovie.findIndex(perm => name == perm);
              perMovie.splice(index,1);
              setPerMovie([...perMovie]);
            }
          }
}



  return <div   style={{ backgroundColor:"gray"}}>
    <h6> Add</h6>
    <hr style={{ border: "solid 3px black", backgroundColor: "black" }} />


 <form>  
<div> 
            FirstName: <input type='text' onChange={(e) => setFirstName(e.target.value)} style={{ width:"90px"}}/> <br />
            LastName: <input type='text' onChange={(e) => setLastName(e.target.value)} /> <br />
            UserName: <input type='text' onChange={(e) => setUseruame(e.target.value)} /> <br />
            CreateDate: <input type='date' onChange={(e) => setCreateddate(e.target.value)} /> <br />
            SessionTimeout: <input type='number' onChange={(e) => setSessionTimeOut(e.target.value)} /> <br />
</div> 
  <div style={{ textAlign:"center"}} >  
    Permissions: <br />
          <input type='checkbox'  name='View Subscriptions' onChange={(e)=>FlagCheckBoxSubs(e)} checked={perSub.includes('View Subscriptions')} /> 
            <span>View Subscriptions</span> <br/>
            <input type='checkbox'  name='Create Subscriptions' onChange={(e)=>FlagCheckBoxSubs(e)} checked={perSub.includes('Create Subscriptions')} /> 
            <span>Create Subscriptions</span> <br/>
            <input type='checkbox' name='Delete Subscriptions' onChange={(e)=>FlagCheckBoxSubs(e)} checked={perSub.includes('Delete Subscriptions')} /> 
            <span >Delete Subscriptions</span> <br/>
            <input type='checkbox'  name='Update Subscriptions' onChange={(e)=>FlagCheckBoxSubs(e)} checked={perSub.includes('Update Subscriptions')} /> 
            <span >Update Subscriptions</span> <br/>
            {/*   //////////////////////////////////////////////// */}

            <input type='checkbox'  name='View Movies' onChange={(e)=>FlagCheckBoxMovies(e)} checked={perMovie.includes('View Movies')} /> 
            <span>View Movies</span> <br/>
            <input type='checkbox'  name='Create Movies' onChange={(e)=>FlagCheckBoxMovies(e)} checked={perMovie.includes('Create Movies')} /> 
            <span >Create Movies</span> <br/>
            <input type='checkbox' id='del_movies' name='Delete Movies' onChange={(e)=>FlagCheckBoxMovies(e)} checked={perMovie.includes('Delete Movies')} /> 
            <span >Delete Movies</span> <br/>
            <input type='checkbox' name='Update Movies' onChange={(e)=>FlagCheckBoxMovies(e)} checked={perMovie.includes('Update Movies')} /> 
            <span >Update Movies</span> <br/>
  </div>

 </form>





    <input type='submit' value='Add' onClick={(e)=> handleForm(e)}/>
      <button onClick={() => navigate( "/Employees")}>Cancel</button>
  </div>
}
