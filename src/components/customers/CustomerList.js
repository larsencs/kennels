import React from "react";
import { useState, useEffect } from "react";
import { CustomerCard } from "./Customer";
import { getAllCustomers, deleteCustomers } from "../../modules/CustomerManager";
import { useNavigate } from "react-router-dom";

export const CustomerList = () =>{

    const navigate = useNavigate()

    const [customers, updateCustomers] = useState([])

    const getCustomers = () =>{
        getAllCustomers()
            .then(customer =>updateCustomers(customer))
    }

    const handleDeleteCustomer = (customerId) =>{
        deleteCustomers(customerId)
            .then(()=>{
                getAllCustomers().then(updateCustomers)
            })
    }

    useEffect(()=>{
        getCustomers()
    },[])


    return (

        <>
        <div className="container-cards">
            {customers.map(customer =><CustomerCard
            key={customer.id}
            customer={customer}
            handleDeleteCustomer={handleDeleteCustomer}/>)}
        </div>
        <button type="button" onClick={() => navigate("/customers/new")}>New Customer</button>
        </>
    )
}