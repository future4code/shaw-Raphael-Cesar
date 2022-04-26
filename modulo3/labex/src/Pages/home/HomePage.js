import React from "react";
import { useNavigate } from "react-router-dom";
import {goToListTripsPage, goToAdminHomePage} from '../routes/coordinator'
import {Main, Logo, Container, Botoes}
import labex from "../img/logolabex.png"

export default function HomePage () {
    const navigate = useNavigate () 

    return(
        <Main>
            <Container>
                <div>
                    <Logo src={labex} alt="logomarca"></Logo>
                </div>
                    <Botoes>
                       <button onClick={() => goToListTripsPage(navigate)}>Viajante</button>
                       <button onClick={() => goToAdminHomePage(navigate)}>Administrativo</button>
                    </Botoes>
            </Container>
        </Main>
    )
}