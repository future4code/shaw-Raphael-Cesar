import React from "react";
import { useNavigate } from "react-router-dom";
import {goToListTripsPage, goToAdminHomePage} from '../routes/coordinator'
import {Main, Container, Botoes}


const HomePage = () =>{
   
   const  navigate = useNavigate () 

    return(
       <Main>
          <Container>
                <div>
                 <Botoes>
                    <button onClick={() => goToListTripsPage(navigate)}>Viajante</button>
                    <button onClick={() => goToAdminHomePage(navigate)}>Administrativo</button>
                 </Botoes>
              </div>
           </Container>
       </Main>
 )
}
export default HomePage

     