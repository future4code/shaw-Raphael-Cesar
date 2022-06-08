import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useRequestData from "../hooks/useRequestData"
import { goToListTripsPage } from "../routes/coordinator"
import {countries} from "../Constants/Countries"
import {sendApplication} from "../service/Service"
import useForm from "../hooks/useForm"




const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("")
    const {form, onChange, clear} = useForm({name:"", age:"", applicationText:"", profission:"", country: ""})
    const [allTrips] = useRequestData("/trips", {})
    const navigate = useNavigate()

    const clearFields = () => {
        clear()
        setTripId("")
    }


    const onClickSend = (event) => {
        event.preventDefault()
        sendApplication(form, tripId, clearFields)
    }

    const tripsOptions = allTrips.trips && allTrips.map((t) => {
        return <option key={t.id} value={t.id}>{t.name}</option>
    })

    return(
        <applicationScreen>
            <h1> Inscreva-se para uma viagem</h1>
            <form onSubmit={onClickSend}>
                <select defaultValue="" onChange={onChanceTrip}>
                    <option value="" disable>Escolha uma viagem</option>
                    {tripsOptions}
                </select>
                <input
                   placeholder={"nome"}
                   name={"name"}
                   value={form.name}
                   onChance={onChange}
                   pattern={"^.{3,}$"}
                   title={"o nome deve ter no mínimo 3 caracteres"}
                   required
                   />
                <input
                    placeholder={"idade"}
                    name={"age"}
                    value={form.age}
                    onChance={onChange}
                    type={"number"}
                    min={18}
                    required
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChance={onChange}
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input
                   placeholder={"Profissão"}
                   name={"profission"}
                   value={form.profission}
                   onChance={onChange}
                   pattern={"^.{10,}$"}
                   title={"A profissão de ter no mínimo 10 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChance={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return < option value={country} key={country}>{country}</option>
                    })}
                </select>
                <Buttons>
                    <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
                    <button type={"submit"}>Enviar</button>
                </Buttons>
                   
            </form>
        </applicationScreen>
    )

}

export default ApplicationFormPage