const apiURL = "http://localhost:8088"

export const getAllLocations = () =>{
    return fetch(`${apiURL}/locations/`)
        .then(response => response.json())
}

export const closeLocations = (locationId) =>{
    return fetch(`${apiURL}/locations/${locationId}`,{
        method: "DELETE"
    }).then(response => response.json())
}

export const getLocationById = (locationId) =>{
    return fetch(`${apiURL}/locations/${locationId}`)
        .then(response => response.json())
}

export const addLocation = (newLocation) =>{
    return fetch(`${apiURL}/locations`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(response => response.json())
}