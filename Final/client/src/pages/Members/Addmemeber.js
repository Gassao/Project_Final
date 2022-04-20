import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddMember } from '../DAL/DALMembers';



export default function Addmemeber() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [arr, setArr] = useState('')
  const [showERR, setShowERR] = useState(false)
  const navigate = useNavigate()



  const handleForm = async (e) => {
    e.preventDefault();

    if (name == '' || email == '' || city == '') {

      setShowERR(true)

    }
    else {
      setShowERR(false)

      const newMeber =
      {

        name: name,
        email:email,
        city:city

      }

  const res=  await AddMember(newMeber);
  console.log( res.data);
      navigate("/members")
    }

  }

  return <div style={{ border: "solid 2px black", backgroundColor: "gray" }} >

    Addmember
    <hr style={{ border: "solid 2px black", backgroundColor: "black" }} />


    <form>
      Name: <input type="text" name="name" onChange={(e) => setName( e.target.value )} placeholder="Enter The Name..." /> <br />
      Email: <input type="email" name="email" onChange={(e) => setEmail( e.target.value )}  placeholder="Enter The Email..."/> <br />
      City: <input type="text" name="city" onChange={(e) => setCity( e.target.value )} placeholder="Enter The City..."/> <br />
      < input type="button" value='Save ' onClick={e => handleForm(e)} />     <button onClick={() => navigate("/members")} >  Cancel</button>
    </form>
  </div>
}
