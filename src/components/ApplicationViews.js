import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../Home";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./locations/LocationList";
import { CustomerList } from "./customers/CustomerList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./locations/LocationDetail";
import { EmployeeForm } from "./employee/EmployeeForm";
import {AnimalForm} from "./animal/AnimalForm"
import { CustomerForm } from "./customers/CustomerForm";
import { LocationForm } from "./locations/LocationForm";
import { CustomerDetail } from "./customers/CustomerDetail";
import { Login } from "./auth/Login";
import {Register} from "./auth/Register"
import { AnimalEditForm } from '../components/animal/AnimalEditForm'

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {


    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (

<>
    <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route exact path="/register" element={<Register />} />

        <Route path="/customers" element={<PrivateRoute><CustomerList/></PrivateRoute>}/>
        <Route path="/customers/new" element={<PrivateRoute><CustomerForm/></PrivateRoute>}/>
        <Route path="/customers/:customerId" element={<PrivateRoute><CustomerDetail/></PrivateRoute>}/>
        <Route path="/employees" element={<PrivateRoute><EmployeeList/></PrivateRoute>}/>
        <Route exact path="/employees/create" element={<PrivateRoute><EmployeeForm/></PrivateRoute>}/>
        <Route exact path="/locations" element={<PrivateRoute><LocationList/></PrivateRoute>}/>
        <Route path="/locations/new" element={<PrivateRoute><LocationForm/></PrivateRoute>}/>
        <Route exact path="/locations/:locationId" element={<PrivateRoute><LocationDetail/></PrivateRoute>}/>
        <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
        <Route exact path="/animals/:animalId" element={<PrivateRoute><AnimalDetail/></PrivateRoute>}/>
        <Route exact path="/animals/create" element={<PrivateRoute><AnimalForm/></PrivateRoute>}/>
        <Route path="/animals/:animalId/edit" element={<PrivateRoute><AnimalEditForm /></PrivateRoute>} />
        <Route exact path="/animals/:animalId" element={<PrivateRoute><AnimalDetail /></PrivateRoute>} />
    </Routes>
</>


    )
}