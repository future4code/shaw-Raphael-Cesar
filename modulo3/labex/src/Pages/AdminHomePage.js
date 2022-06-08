import React from "react";
import { useNavigate } from "react-router-dom";
import {goToCreateTripPage, goToHomePage} from "../routes/coordinator"
import useProtectedPage from "../hooks/useProtectedPage"
import {logout} from "../service/Service"
import useRequestData from "../hooks/useRequestData"
import AdminTripCard from "../componentes/AdminTripCard"

const AdminHomePage = () => {
    useProtectedPage()

    const navigate = useNavigate()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <AdminTripCard key={t.id} name={t.name} id={t.id} getTrips={getTrips}/>
    })

    return (
        <div>
            <h1> administração</h1>
            <Buttons>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)}> Criar Viagem</button>
                <button onClick={() => logout(navigate)}>Logout</button>
            </Buttons>
            {tripsList && tripsList.length > 0 ? tripsList :<p> carregando ...</p>} 
        </div>
    )
}

export default AdminHomePage