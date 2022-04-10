import React from "react";
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({location, handleCloseLocation}) =>(
    <section className="location">
        <h3>{location.name}</h3>
        <div>{location.address}</div>
        <button type="button" onClick={()=>handleCloseLocation(location.id)}>Close Location</button>
        <Link to={`/locations/${location.id}`}><button>Details</button></Link>
    </section>
)