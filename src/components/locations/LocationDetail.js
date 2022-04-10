import React, {useState, useEffect} from "react";
import {getLocationById, closeLocations} from "../../modules/LocationManager"
import { useParams, useNavigate } from "react-router-dom";

export const LocationDetail = () =>{
    const [location, updateLocation] = useState({name: "", address: ""})
    const [isLoading, setIsLoading] = useState(true)

    const handleClose = () =>{
        closeLocations(locationId)
            .then(()=>{
                navigate("/locations/")
            })
    }

    const {locationId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getLocationById(locationId)
            .then(location =>{
                updateLocation(location)
                setIsLoading(false)
            })
    },[locationId])

    return(
    <section className="animal">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <button type="button" disabled={isLoading} onClick={handleClose}>Close</button>
    </section>
    )
}