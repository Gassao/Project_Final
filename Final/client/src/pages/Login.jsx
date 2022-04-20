import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../pages/DAL/DAL_user';
const Login = () => {

    const [userName, setUserName] = useState('')


    const [password, setPassword] = useState('');


    let navigate = useNavigate();

    const getUser_password_ame = async () => {


        const res=await login( userName,password)
        if(res.data.login)
        {
            navigate("/main")

        }
        else{
              navigate("/CreateAcount")
        }

    }
    return (
        <div     style={{ backgroundColor:"darksalmon"}}>
                <h1>Login </h1>

            UserName:<input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} /> <br />
            Password:<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /> <br />

               Login<button onClick={ getUser_password_ame  }>go to</button>

          

        </div>
    )
}

export default Login;
