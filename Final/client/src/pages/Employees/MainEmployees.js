import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainEmployees() {

  const navigate = useNavigate();
  return <div style={{ border: "solid 2px black", backgroundColor: "peru " }}  >
    <h3>  Employees </h3>
    <hr style={{ border: "solid 2px black", backgroundColor: "red" }} />
    <button onClick={() => navigate("/Employees")} > Employees</button>      <button onClick={() => navigate("/AddEmployee")}> Add A New Employee </button>

  </div>
}
