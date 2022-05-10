import axios from 'axios'
import {URL_BASE} from '../constants/Urls'
import {goToFeed} from ''

export const doTheLogin = (forms, clear, navigate) => {
    const body = {
        email: forms.email,
        password: forms.password
    }
    axios.post(`${URL_BASE}/users/login`, body)
         .then((response)  => {
            localStorage.setItem("token, response.data.token")
            clear()
            goToFeed(navigate)
         }).catch((error) => {
             alert(error.response.data)
         })
}


export const CreateUser = (forms, clear, navigate) =>{
    const body = {
        username: forms.username,
        email: forms.email,
        password: forms.password
    }
    axios.post(`${URL_BASE}/users/SingUp`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            alert("Bem vindo!!!. conta cadastrada.")
            goToFeed(navigate)
        }).catch((error)  => {
            alert(error.response.data)
        })
}
 