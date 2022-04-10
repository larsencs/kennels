import React from "react";
import "./Customer.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export const CustomerCard = ({customer, handleDeleteCustomer}) =>{

    const navigate = useNavigate()
    
    return (

    <section className="customer">
        <h3>{customer.name}</h3>
        <div>{customer.address}</div>
        <button type="button" onClick={()=> handleDeleteCustomer(customer.id)}>Delete</button>
        <Link to={`/customers/${customer.id}`}><button>Details</button></Link>
        <Link to={`/customers/${customer.id}/edit`}><button>Edit</button></Link>
    </section>
    )
}