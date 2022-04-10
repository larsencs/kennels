import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { getCustomerById } from "../../modules/CustomerManager";

export const CustomerEditForm = () =>{

    const [customer, setCustomer] = useState({})

    const {customerId} = useParams()
    const navigate = useNavigate()

    const handleChange = (event) =>{
        const state = {...customer}

        state[event.target.id] = event.target.value
        setCustomer(state)

    }

    const updateCustomer = (event) =>{
        event.preventDefault()

        const editedCustomer = {

        }

        updateCustomer(editedCustomer)
        .then(()=>navigate("/customers"))
    }

    useEffect(()=>{
        getCustomerById(customerId)
            .then(customer =>{
                setCustomer(customer)
            })

    }, [])

    return ("")











}