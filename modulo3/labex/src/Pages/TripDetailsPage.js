import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {BASE_URL} from "./Url"



export default function TripDetails(){
    UseProtectedPage();
    const navigate = useNavigate();

    const params = useParams();

    const trip = useRequestData(
        {}, `/trip/${params.id}`,
        { auth: localStorage.getItem("token") }
    )

    
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        const body = {
            approve: decision
        }
        axios
            .put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, header)
            .then(() => {
                decision ? alert("Candidato aprovado!") : alert("Candidato excluído.")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <div>

        </div>
    )



}