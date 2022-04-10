import React from "react";
import "./Kennel.css"
import {NavBar} from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews";
import { useState } from "react";

export const Kennel = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
      }

      return (

        <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        </>
        
      )



}
// import React from 'react';
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Kennel } from './components/Kennel';
// import './index.css';

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Kennel />
//   </StrictMode>
// );
