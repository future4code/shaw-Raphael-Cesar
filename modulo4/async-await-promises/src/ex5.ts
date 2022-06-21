import axios from "axios"
import { baseURL } from "./base_URL"


type user = {
	id: string;
	name: string;
	email: string;
}

const mandaNotificacoes = async (users: user[], message: string):Promise<void> => { 
    try{
        for(const user of users){
            await axios.post(`${baseURL}/notifications`, {
                subscribedId: user.id,
                message,
              })
        }
        console.log('Notificações enviadas')
    }catch{
        console.log('Erro inesperado')
    }
  }