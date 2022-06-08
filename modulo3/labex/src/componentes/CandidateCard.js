import React from "react";
import {decideCandidate} from "../service/Service"


const CandidateCard =(props) => {
    const {id, applicationText, profession, age, name, country} = props.Candidate

    const decide = (decision) => {
        decideCandidate(props.tripId, id, decision, props.getTripDetails)

    }

    return(
        <CardContanier>
            <p><b>Nome</b>{name}</p>
            <p><b>Profissão</b>{profession}</p>
            <p><b>Idade</b>{age}</p>
            <p><b>País</b>{country}</p>
            <p><b>Texto de candidatura</b>{applicationText}</p>
            <Buttons>
                <button onClick={() => decide(true)}>Aprovar</button>
                <button onClick={() => decide(false)}>Reprovar</button>
            </Buttons>
        </CardContanier>
    )
}
export default CandidateCard