import express, {resquest, response} from 'express'
import cors from 'cors'
import { moveSyntheticComments } from 'typescript'

const app  = express()

app.use(express.json())
app.use(cors())

app.get('/', (req:resquest, res:Response) =>{
    res.send("hello from Express")
})

type User= {
    id: number,
    name: string,
    phone:string,
    email:string,
    website:string
}

const  user:User[] = [

    id: 1,
    name: 'Capitão America',
    phone: 66  1945 2011,
    email: roger_steve@shield.com,
    website: instituteCarter.com

    id: 2,
    name: 'Capitã Marvel',
    phone: 28 1995 2019,
    email: danvers-carol@shield.com,
    website:saveofSkrulls.com

    id: 3,
    name: 'Homem de Ferro',
    phone: 55  2008 2019,
    email: thebestavenger@shield.com,
    website:instituteStark.com

    id: 4,
    name: 'Thor',
    phone: 1505  2011 2022,
    email: thor_maromba@shield.com,
    website:argard.com

    


]