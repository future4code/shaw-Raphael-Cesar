import React from "react";
import { useNavigate } from "react-router-dom";
import {goToTripDetailsPage} from "../routes/coordinator"
import { deleteTrip } from "../service/Service";
import { DeleteButton, CardContainer } from "./StyledATC";



const AdminTripCard =(props) => {
    const {id,name ,getTrips} = props
    const navigate =useNavigate()

    const onClickDelete = (event) => {
        event.StopPropagation()
        if(window.confirm(`tem certeza que deseja deletar a viagem ${name}?`)){
            deleteTrip(id, getTrips)
        }

    }

    return (
        <CardContainer onClick={() => goToTripDetailsPage(navigate, id)}>
            <p>{name}</p>
            <DeleteButton variant="outlined" startIcon={<DeleteIcon />} onClinck={onClickDelete}/>
        </CardContainer>
    )
    
}
export default AdminTripCard