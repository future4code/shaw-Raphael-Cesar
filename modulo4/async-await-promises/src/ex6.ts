
//a) Ele executa todas as funções, ao invés de ser uma de cada vez.
//b) Ganha mais performance.


import axios from "axios"
import { baseURL } from "./base_URL"



type user = {
	id: string;
	name: string;
	email: string;
}

const mandaNotificacoes = async (users: user[], message: string):Promise<void> => { 
    try{
        const promises = users.map(us =>{
            return axios.post(`${baseURL}/notifications`, {
                subscribedId: us.id,
                message,
              })
        })

        await Promise.all(promises)
    }catch{
        console.log('Erro inesperado')
    }
  }