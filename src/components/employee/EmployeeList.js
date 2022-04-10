import React from "react";
import { useState, useEffect } from "react";
import { getAllEmployees, getEmployeeById, terminateEmployee } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./Employee";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () =>{

    const navigate = useNavigate()

    const[employees, updateEmployee] = useState([])

    const getEmployees = () =>{
        getAllEmployees()
            .then(employee => updateEmployee(employee))
    }

    const handleTermination = (id) =>{
        terminateEmployee(id).then(()=>{
            getAllEmployees().then(updateEmployee)
        })
    }

    useEffect(()=>{
        getEmployees()
    },[])

    return (
        <>
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard
                key={employee.id}
                employee={employee}
                handleTermination={handleTermination} />)}
        </div>
        <button type="button" id="add-employee-btn" onClick={() => navigate("/employees/create")}>Add Employee</button>
        
        </>
        

    )

}

