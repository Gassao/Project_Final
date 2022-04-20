import React, { useEffect, useState } from 'react';
import { getAllEmployee, getByIdEmployee, updateEmployee } from '../Utils/utils';
import { useNavigate } from 'react-router-dom'




export default function Edite(props) {


  const [Fname, setName] = useState('');
  const [Lname, setLame] = useState('');
  const [Username, setUsername] = useState( props.EM.Username);
  const [Createddate, setCreateddate] = useState('');
  const [SessionTimeOut, setSessionTimeOut] = useState('');
  const [permission, SetPermmission] = useState([])
  const [permissionMovies, setPermissionMovies] = useState([])


  const navigate = useNavigate();


  useEffect(() => {

    async function fetch() {
      return await getByIdEmployee(props.id)

    }
    fetch().then(res => {

      setName(res.FirstName)
      setLame(res.LastName)
      setCreateddate(res.Createddate)  
      setSessionTimeOut(res.SessionTimeOut)

      const res2 = res.Permissions.filter(perm => {

        if (perm == "View Subscriptions" ||
          perm == "Create Subscriptions" ||
          perm == "Delete Subscriptions" ||
          perm == "Update Subscriptions"

        ) {

          return perm;
        }

      });

      const res3 = res.Permissions.filter(perm => {

        if (

          perm== "View Movies" ||
          perm == "Create Movies" ||
          perm == "Delete Movies" ||
          perm == "Update Movies"

        ) {
          return perm;

        }
      })

      SetPermmission(res2)
      setPermissionMovies(res3)
    })
  }, [])




  const handleCheckBoxSubs = (e) => {

    const { checked, name } = e.target
    console.log(name);

    if (checked) {


      if (name == 'View Subscriptions') {
        SetPermmission([...permission, name])
      }
      else if (permission.includes('View Subscriptions')) {

        SetPermmission([...permission, name])
      }
      else {

        SetPermmission([...permission, 'View Subscriptions', name])
      }
    }
    else {

      if (name == 'View Subscriptions') {

        SetPermmission([])
      }
      else {

        const j = permission.findIndex(perm => perm == name)
        permission.splice(j, 1)
        SetPermmission([...permission])
      }
    }
  }




  const handleCheckBoxSubs2 = (e) => {

    const { checked, name } = e.target
    console.log("Legnd",name);

    if (checked) {


      if (name == 'View Movies') {
        setPermissionMovies([...permissionMovies, name])
      }
      else if (permission.includes('View Movies')) {

        setPermissionMovies([...permissionMovies, name])
      }
      else {

        setPermissionMovies([...permissionMovies, 'View Movies', name])
      }
    }
    else {

      if (name == 'View Movies') {

        setPermissionMovies([])
      }
      else {

        const j = permissionMovies.findIndex(perm => perm == name)
        permissionMovies.splice(j, 1)
        setPermissionMovies([...permissionMovies])
      }
    }
  }
  const handlefrom =  async(e) => {
    e.preventDefault();

    const usersEmployees = {
      FirstName: Fname,
      LastName: Lname,
      Username: Username,
      Createddate: Createddate,
      SessionTimeOut: SessionTimeOut,
      Permissions: [...permission, ...permissionMovies]
    }
    await updateEmployee(props.id, usersEmployees)
    navigate(0)
  }


  return <div>
    <h6> Edite</h6>
    <h6>{Fname}  {Lname}</h6>

    <form>
      FirstName:<input type="text" onChange={(e) => setName(e.target.value)} value={Fname} /> <br />
      LastName:<input type="text" onChange={(e) => setLame(e.target.value)} value={Lname} /> <br />
      Username:<input type="text" onChange={(e) => setUsername(e.target.value)} value={Username} /> <br />
      {/* Createddate:<input type="date" onChange={(e) => setCreateddate(e.target.value)} value={Createddate} /> <br /> */}

      Createddate:{props.EM.Createddate} <br />
      SessionTimeOut:<input type="number" onChange={(e) => setSessionTimeOut(e.target.value)} value={SessionTimeOut} /> <br />
      Permissions:<br />

      <input type="checkbox" name='View Subscriptions' onChange={e => handleCheckBoxSubs(e)} checked={permission.includes('View Subscriptions')} />
      <label htmlFor='view_subs'>View Subscriptions</label> <br />
      <input type="checkbox" name='Create Subscriptions' onChange={e => handleCheckBoxSubs(e)} checked={permission.includes('Create Subscriptions')} />
      <label htmlFor='create_subs'>Create Subscriptions</label> <br />
      <input type="checkbox" name='Delete Subscriptions' onChange={e => handleCheckBoxSubs(e)} checked={permission.includes('Delete Subscriptions')} />
      <label htmlFor='del_subs'>Delete Subscriptions</label> <br />
      <input type="checkbox" name='Update Subscriptions' onChange={e => handleCheckBoxSubs(e)} checked={permission.includes('Update Subscriptions')} />
      <label htmlFor='update_subs'>Update Subscriptions</label> <br />


      <input type="checkbox" name='View Movies' onChange={e => handleCheckBoxSubs2(e)} checked={permissionMovies.includes('View Movies')} />
      <label htmlFor='view_movies'>View Movies</label> <br />
      <input type="checkbox" name='Create Movies' onChange={e => handleCheckBoxSubs2(e)} checked={permissionMovies.includes('Create Movies')} />
      <label htmlFor='create_movies'>Create Movies</label> <br />
      <input type="checkbox" name='Delete Movies' onChange={e => handleCheckBoxSubs2(e)} checked={permissionMovies.includes('Delete Movies')} />
      <label htmlFor='del_movies'>Delete Movies</label> <br />
      <input type="checkbox" name='Update Movies' onChange={e => handleCheckBoxSubs2(e)} checked={permissionMovies.includes('Update Movies')} />
      <label htmlFor='del_movies'>Update Movies</label> <br />

    </form>

    <input type="submit" value="update" onClick={(e) => handlefrom(e)} />
    <button onClick={() => navigate(0)} > Cancel </button>
  </div>;
}
