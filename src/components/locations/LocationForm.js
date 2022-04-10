import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addLocation } from "../../modules/LocationManager";
import { getAllCustomers } from "../../modules/CustomerManager";

export const LocationForm = () =>{
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const controlInput = (event) =>{
        const newLocation = {...location}
        let selectedTarget = event.target.value

        if(event.target.id.includes("Id")){
            selectedTarget = parseInt(selectedTarget)
        }

        newLocation[event.target.id] = selectedTarget
        setLocation(newLocation)


    }

    const saveLocation = (event) =>{
        event.preventDefault()

            addLocation(location)
                .then(()=> navigate("/locations"))
    }

    return (
        <form className="animalForm">
        <h2 className="animalForm__title">New Location</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Location name:</label>
                <input type="text" id="name" onChange={controlInput} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="breed">Adress:</label>
                <input type="text" id="address" onChange={controlInput} required autoFocus className="form-control" placeholder="Address" value={location.address} />
            </div>
        </fieldset>
        <button type="button" className="btn btn-primary"
            onClick={saveLocation}>
            Save Location
      </button>
    </form>
    )


}
