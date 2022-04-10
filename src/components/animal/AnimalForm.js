import React, { useEffect } from "react";
import { addAnimal } from "../../modules/AnimalManager";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAllLocations } from "../../modules/LocationManager";
import "./AnimalForm.css"
import { getAllCustomers } from "../../modules/CustomerManager";

export const AnimalForm = () =>{
    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    })

    const [isLoading, setIsLoading] = useState(true)
    const [location, updateLocation] = useState([])
    const [customer, updateCustomer] = useState([])

    const navigate = useNavigate()

    const controlInput = (event) =>{
        const newAnimal = {...animal}
        let selectedTarget = event.target.value

        if(event.target.id.includes("Id")){
            selectedTarget = parseInt(selectedTarget)
        }

        newAnimal[event.target.id] = selectedTarget
        setAnimal(newAnimal)


    }


    useEffect(()=>{
        getAllLocations()
            .then(location =>{
                updateLocation(location)
            })
    }, [])

    useEffect(()=>{
        getAllCustomers()
            .then(customer =>{
                updateCustomer(customer)
            })
    }, [])

    const saveAnimal = (event) =>{
        event.preventDefault()

        const locationId = animal.locationId
        const customerId = animal.customerId

        if(locationId === 0 || customerId === 0){
            window.alert("Please select a location or customer")
        }else{
            addAnimal(animal)
                .then(()=> navigate("/animals"))
        }
    }

    return (
        <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Animal name:</label>
                <input type="text" id="name" onChange={controlInput} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="breed">Animal breed:</label>
                <input type="text" id="breed" onChange={controlInput} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select value={animal.locationId} name="locationId" id="locationId" onChange={controlInput} className="form-control" >
                    <option value="0">Select a location</option>
                    {location.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="customerId">Customer: </label>
                <select value={animal.customerId} name="customer" id="customerId" onChange={controlInput} className="form-control" >
                    <option value="0">Select a customer</option>
                    {customer.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <button type="button" className="btn btn-primary"
            onClick={saveAnimal}>
            Save Animal
      </button>
    </form>
    )


}
