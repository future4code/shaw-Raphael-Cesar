//a)put. Porque está postando;

import axios from "axios"
import { baseURL } from "./base_URL"




const createNews = async (title: string, content: string, date: number):Promise<void> => { 
  const resposta = await axios.put(`${baseURL}/news`, {
    title: title,
    content: content,
    date: date
  })

}