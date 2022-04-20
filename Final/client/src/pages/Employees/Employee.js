import React, { useEffect, useState } from 'react';
import { DeletIdEmployee } from '../Utils/utils';
import Edite from './Edite';

export default function Employee(props) {
        const [openEdite, setOpenEdite] = useState(false)
        const [permS, setPerm] = useState([props.employee.Permissions])
        

    var string = '';
    permS.forEach(per => string += `${per}, `);

        const delet = async () => {
            // id.forEach(currentID => {
            //     DeletIdEmployee(currentID)
            //    
            // })
               DeletIdEmployee( props.employee.id)
             props.change(true)
    }

    return <div style={{ border: "solid 2px red", height: "700px", width: "700px" ,backgroundColor:"gray"}}>

                Name: {props.employee.FirstName}   {props.employee.LastName}<br />
                User Name: {props.employee.Username} <br />
                Session Timeout: {props.employee.SessionTimeOut} <br />
                Create Date: {props.employee.Createddate} <br />
                <span> Permissions: </span> <br /> {string.slice(0, -2)}
                        <br />
                        <br /> 
        <button onClick={() => setOpenEdite(true)} > Edite   </button>   <button onClick={delet}>  Delelte  </button>


        {openEdite && <Edite id={props.employee.id} hide={() => setOpenEdite(false)} EM={props.employee} />}

    </div >
}
