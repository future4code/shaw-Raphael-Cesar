import React from "react";
import {goToAdminHomePage} from "../routes/coordinator"
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage"
import useRequestData from "../hooks/useRequestData"
import candidateCard from "../componentes/CandidateCard"



const TripDetailsPage = () => {

    useProtectedPage()
    const navigate = useNavigate()
    const {id} = useParams()
    const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

    const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((c) => {
        return <candidateCard key={c.id} candidate={c} tripId={id} getTripDetails={getTripDetails}/>
    })

    const approvedCandidates =tripDetails && tripDetails.trip && tripDetails.trip.approved.map((c) => {
        return <li key={c.id}>{c.name}</li>
    })

    return(
        <tripScreen>
            {tripDetails && tripDetails.trip && <h1>{}tripDetails.trip.name</h1>}
            {tripDetails && tripDetails.trip && <tripDataContaner> 
                <p><b>Nome:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>data:</b> {tripDetails.trip.date}</p>
                
                </tripDataContaner>}
                < button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>

                <h2>Candidatos Pendentes</h2>
                {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}

                <h2>Candidatos Aprovados</h2>
                {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
        </tripScreen>
    )
}
export default TripDetailsPage