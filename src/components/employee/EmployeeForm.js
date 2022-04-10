import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {addEmployee} from "../../modules/EmployeeManager"
import { getAllLocations } from "../../modules/LocationManager";

export const EmployeeForm = () =>{

    const [employee, updateEmployee] = useState({
        name: "",
        locationId: 0
    })

    const [location, updateLocation] = useState([])

    const navigate = useNavigate()

    const controlInput = (event) =>{
        const newEmployee = {...employee}
        let selectedTarget = event.target.value

        if(event.target.id.includes("id")){
            selectedTarget = parseInt(selectedTarget)
        }

        newEmployee[event.target.id] = selectedTarget
        updateEmployee(newEmployee)
    }

    useEffect(()=>{
        getAllLocations()
            .then(location =>{
                updateLocation(location)
            })
    }, [])

    const saveEmployee = (event) =>{
        event.preventDefault()

        const locationId = employee.locationId

        if(locationId === 0){
            window.alert("Please select a location")
        }else{
            addEmployee(employee)
                .then(()=>{
                    navigate("/employees")
                })
        }

    }

    return(
        <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Employee name:</label>
                <input type="text" id="name" onChange={controlInput} required autoFocus className="form-control" placeholder="Animal name" value={employee.name} />
            </div>
        </fieldset>
            <fieldset>
            <div>
                <label htmlFor="employee-location">Employee Location:</label>
                <select value={employee.locationId} name="locationId" id="locationId" onChange={controlInput} className="form-control" >
                <option value="0">Select a location</option>
                {location.map(l => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                ))}
                </select>
            </div>
            </fieldset>
                <button type="button" className="employee-save-btn" onClick={saveEmployee}>Save Employee</button>

        </form>

    )




}

