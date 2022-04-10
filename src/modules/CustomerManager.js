const remoteUrl = "http://localhost:8088"

export const getAllCustomers = () =>{
    return fetch(`${remoteUrl}/customers/`)
        .then(response => response.json())
}

export const deleteCustomers = (customerId) =>{
    return fetch(`${remoteUrl}/customers/${customerId}`,{
        method: "DELETE"
    }).then(response => response.json())
}

export const addCustomer = (newCustomer) =>{
    return fetch(`${remoteUrl}/customers`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCustomer)
    }).then(response => response.json())
}

export const getCustomerByPet = (animalId) =>{
    return fetch(`${remoteUrl}/animals/${animalId}?_expand=customer`)
        .then(response => response.json())
}

export const getCustomerById = (customerId) =>{
    return fetch(`${remoteUrl}/customers/${customerId}`)
        .then(response => response.json())
}

export const updateCustomer = (customerId) =>{
    return fetch(`${remoteUrl}/customers/${customerId}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customerId)
    }).then(response => response.json())
}