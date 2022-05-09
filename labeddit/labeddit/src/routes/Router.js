import React from "react";
import SingUp from "../pages/singUp/SingUp";
import Login from "../pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Router = () => {
   
    return(
      <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path='singUp' element={<SingUp/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default Router