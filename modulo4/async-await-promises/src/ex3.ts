// a) não

import axios from "axios"
import { baseURL } from "./base_URL"


type user = {
	id: string;
	name: string;
	email: string;
}

const pegaAssinantes = async ():Promise<user[]>=>{
  const resposta = await axios.get(`${baseURL}/subscribers`)
  return resposta.data.map((res: any)=>{
    return{
      id: res.id,
      name: res.name,
      email: res.email
    }
  })
}