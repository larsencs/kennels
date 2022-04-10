import React, {useState, useEffect} from "react";
import {getCustomerByPet, getCustomerById} from "../../modules/CustomerManager"
import { getAnimalById } from "../../modules/AnimalManager";
import { useParams, useNavigate } from "react-router-dom";

export const CustomerDetail = () =>{

    const [customer, setCustomer] = useState({
        name: "",
        address: ""
    })

    const [animal, setAnimal] = useState({
        pets: ""
    })

    const [isLoading, setIsLoading] = useState(true)

    const {customerId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getCustomerById(customerId)
            .then(customer =>{
                setCustomer({
                    name: customer.name,
                    address: customer.address
                })
                console.log(customer.name)
                setIsLoading(false)
            })
    }, [])

    useEffect(()=>{
        let petString = ""
        getAnimalById(customerId)
            .then(animal =>{
                console.log(animal)
            })
    })
    

    


    return(
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">Address: {customer.address}</div>
            <div className="animal__location">Pets: {customer.pets}</div>
            {/* <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button> */}
        </section>




    )







}