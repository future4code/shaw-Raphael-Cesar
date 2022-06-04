import  express {Request, Response } from "express";
import { usuario } from "./data";
import { AddressInfo } from "net";


const app = express()

app.use(express.json())
app.listen(3003, ()=> console.log('deu bom!'))


app.get('/usarios', (req:Request, res:Response) =>{

  try{
    res.status(200).send({message: ' Lista de usuaios', usuario})
  }
  catch(error:any){
    
  }
})