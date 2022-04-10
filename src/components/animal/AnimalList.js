import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAnimals, getAnimalById, deleteAnimal } from "../../modules/AnimalManager";
import { AnimalCard } from "./AnimalCard";

export const AnimalList = () => {
    
    const [animals, setAnimals] = useState([])
    const navigate = useNavigate()

    const handleDeleteAnimal = (id) =>{
        deleteAnimal(id)
            .then(()=> getAllAnimals().then(setAnimals))
    }

    const getAnimals = () =>{
        return getAllAnimals()
            .then(animals => {
                setAnimals(animals)
            })
        
    }

    useEffect(()=>{
        getAnimals()
    },[])

    return (
        <>
            <div className="container-cards">
                {animals.map(animal =><AnimalCard 
                key={animal.id}
                animal={animal}
                handleDeleteAnimal={handleDeleteAnimal}/>)}
            </div>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { navigate("/animals/create") }}>
                    Admit Animal
                </button>
            </section>
    
        </>
    )
}




