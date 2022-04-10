import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAllLocations } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";
import { addCustomer } from "../../modules/CustomerManager";

export const CustomerForm = () =>{
    const [customer, updateCustomer] = useState({
        name: "",
        locationId: 0,
        customerId: 0
    })

    const [isLoading, setIsLoading] = useState(true)
    const [location, updateLocation] = useState([])

    const navigate = useNavigate()

    const controlInput = (event) =>{
        const newCustomer = {...customer}
        let selectedTarget = event.target.value

        if(event.target.id.includes("Id")){
            selectedTarget = parseInt(selectedTarget)
        }

        newCustomer[event.target.id] = selectedTarget
        updateCustomer(newCustomer)


    }


    useEffect(()=>{
        getAllLocations()
            .then(location =>{
                updateLocation(location)
            })
    }, [])



    const saveCustomer = (event) =>{
        event.preventDefault()

        const locationId = customer.locationId

        if(locationId === 0){
            window.alert("Please select a location")
        }else{
            addCustomer(customer)
                .then(()=> navigate("/customers"))
        }
    }

    return (
        <form className="customerForm">
        <h2 className="customerForm__title">New Customer</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Customer name:</label>
                <input type="text" id="name" onChange={controlInput} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select value={customer.locationId} name="locationId" id="locationId" onChange={controlInput} className="form-control" >
                    <option value="0">Select a location</option>
                    {location.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <button type="button" className="btn btn-primary"
            onClick={saveCustomer}>
            Save Customer
      </button>
    </form>
    )


}