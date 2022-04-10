import React, {useState, useEffect} from "react";
import { deleteAnimal, getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css"
import { useParams, useNavigate } from "react-router-dom";


export const AnimalDetail = () =>{
    const [animal, setAnimal] = useState({name:"", breed:"", location: "", customer: ""})
    const [isLoading, setIsLoading] = useState(true)

    const {animalId} = useParams()
    const navigate = useNavigate()

    const handleDelete = () =>{
        setIsLoading(true);
        deleteAnimal(animalId)
            .then(()=>{
                navigate("/animals")
            })
    }

    useEffect(()=>{
        getAnimalById(animalId)
            .then(animal =>{
                setAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    location: animal.location.name,
                    customer: animal.customer.name
                })
                console.log(animal.location.name)
                setIsLoading(false);
            })
    },[])




    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location}</div>
            <div className="animal__owner">Customer: {animal.customer}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
        </section>
    )
}

