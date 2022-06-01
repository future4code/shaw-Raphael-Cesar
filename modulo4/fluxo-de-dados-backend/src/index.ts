import express, {Request, Response} from "express"
import { produtos } from "./data"



const app = express()

app.use(express.json())

app.listen(3003, () => console.log('deu'))

app.get('/test', (req:Request, res: Response) => {
    res.status(200).send('deu bom!')
})


app.post('/produto', (req:Request, res:Response)=>{
    try{
    const {name, price} = req.body
        if(!name && !price){
            throw new Error('Campo não preenchido')
        }
        if( typeof name !== 'string'){
            throw new Error('Nome tem que ser uma string')
        }
        if(typeof price !== 'number'){
            throw new Error('Preço tem que ser um number')
        }
        if( price <= 0 ){
            throw new Error('Preço tem que ser maior que 0')
        }
    produtos.push({
        id: Date.now().toString(),
        name,
        price
    })
    res.status(200).send(produtos)
}
    catch(error: any){
        switch(error.message){
            case 'Campo não preenchido':
                res.statusCode = 422
                break
            case 'Nome tem que ser uma string':
                res.status(409)
                break
            case 'Preço tem que ser um number':
                res.status(409)
                break
            case 'Preço tem que ser maior que 0':
                res.status(409)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})




