import React from "react";
import { useNavigate } from "react-router-dom";
import {goToListTripsPage, goToLoginPage} from "../../routes/coordinator"

import {Buttons} from "./Styled"


const HomePage = () =>{
   const navigate = useNavigate()
   return (
      <>
         <h1>Labex</h1>
         <Buttons>
            <button onClick={() => goToListTripsPage(navigate)}>Ver viagem</button>
            <button onClick={() => goToLoginPage(navigate)}>Administrativo</button>
         </Buttons>
      </>
   )
}
export default HomePage


    



     