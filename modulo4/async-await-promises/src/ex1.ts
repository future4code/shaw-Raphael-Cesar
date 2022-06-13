/*
1.
a)  get
b)  Através da Promise, colocando um any */

import axios from "axios"
import {baseURL} from "./base_URL"




async function pegaAssinantes():Promise<any[]>{
    const resposta = await axios.get(`${baseURL}/subscribers`)
    return resposta.data
}
   