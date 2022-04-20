import React, { useEffect, useState } from 'react';
import { getAllEmployee} from '../Utils/utils'
import Employee from './Employee';

export default function Employees() {

  const [Employees, setEmployees] = useState([]);
  const [hasChanged, setHasChanged] = useState(false)


  useEffect(() => {
    GetAllEmployees();
    setHasChanged(false)
  }, [hasChanged ])


  const GetAllEmployees = async () => {

    const res = await getAllEmployee()
    setEmployees(res)
  }

  const EmployeeRep = Employees.map((employee, index) => {

    return (
      <Employee key={index} employee={employee} change={setHasChanged } />
    )

  })

  return <div style={{ backgroundColor: "dimgrey", height: "700px", width: "700px" }} >

    <h1> Employees</h1>
    <br/>

    <hr />
    <div>
      {EmployeeRep}
    </div>
  </div>
}
