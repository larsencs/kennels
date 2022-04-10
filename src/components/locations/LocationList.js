import React from "react";
import { useState, useEffect } from "react";
import { LocationCard } from "./Location";
import { getAllLocations, closeLocations } from "../../modules/LocationManager";
import { useNavigate } from "react-router-dom";

export const LocationList = () =>{

    const navigate = useNavigate()

    const [locations, updateLocations] = useState([])

    const getLocations = () =>{
        return getAllLocations()
            .then(location => updateLocations(location))
    }

    const handleCloseLocation = (locationId) =>{
        closeLocations(locationId).then(()=>{
            getAllLocations().then(updateLocations)
        })
    }

    useEffect(()=>{
        getLocations()
    },[])


    return (

        <>
        <div className="container-cards">
            {locations.map(location => <LocationCard
                key={location.id}
                location={location}
                handleCloseLocation={handleCloseLocation} />)}
        </div>
        <button type="button" onClick={()=> navigate("/locations/new")}>Add Location</button>
        </>
    )
}