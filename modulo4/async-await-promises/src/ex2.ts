// a) a diferença é o async fica antes do parênteses

import axios from "axios"
import {baseURL} from "./base_URL"

const pegaAssinantes = async ():Promise<any[]>=>{
    const resposta = await axios.get(`${baseURL}/subscribers`)
    return resposta.data
}