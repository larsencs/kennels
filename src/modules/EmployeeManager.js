const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) =>{
    return fetch(`${remoteURL}/employees/?id=${employeeId}`)
        .then(response => response.json())
}

export const getEmployeeByLocation = () =>{
    return fetch(`${remoteURL}`)
        .then(response => response.json())
}

export const getAllEmployees = () =>{
    return fetch(`${remoteURL}/employees/`)
        .then(response => response.json())
}

export const terminateEmployee = (id) =>{
    return fetch(`${remoteURL}/employees/${id}`,{
        method: "DELETE"
    }).then(response => response.json())
    
}

export const addEmployee = (newEmployee) =>{
    return fetch(`${remoteURL}/employees/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    })
    .then(response => response.json())
}