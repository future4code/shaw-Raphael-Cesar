import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData"
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator";
import TripCard from "../componentes/TripCard"



const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips, {}")
    const navigate = useNavigate()

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <TripCard key={t.id} trip={t}/>
    })

    return(
        <ListScreen>
            <Buttons>
                <button onClick={ () => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </Buttons>
            <h1>Lista de Viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
        </ListScreen>
    )
}

export default ListTripsPage