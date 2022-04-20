import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, Register } from './DAL/DAL_user';
import { regis } from './Utils/utils';


export default function CreateAcount() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [serverError, setServerError] = useState('no error');
    const [showError, setShowError] = useState(true);


    const navigate = useNavigate();


    const checkName = async () => 
    {
        if (userName == ' ' || password == '') {

            alert(" please fill both fields ")
        }
        else {

            const result = await regis({ Username: userName, Password:password})
            if (typeof result == 'string') {
            setServerError(result);
            setShowError(true);
        }
        else {
            setShowError(false);
            navigate('/');
        }
    
        }
    }

   



return <div>

    <h1> Create Acount</h1>

    UserName:<input type="text" onChange={(e) => setUserName(e.target.value)} /> <br />
    Password:<input type="password" onChange={(e) => setPassword(e.target.value)} /> <br />
    <button onClick={checkName} >  Create </button>

</div>
}
