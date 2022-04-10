import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employee, handleTermination}) =>(
    <>
    <section className="employee">
        <h3>{employee.name}</h3>
        <button type="button" onClick={()=>handleTermination(employee.id)}>Bye, Felicia</button>
        <div></div>
    </section>
    </>

)