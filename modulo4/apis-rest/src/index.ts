//1 a) Método GET
//b) ('/users')

//2 a) Através de Path Variables. Achei mais fácil.
//b) Fiz um if para validar o que o usuário colocou.

//3 a) Path Variables.

//4 a) Nada mudou, o usuário é criado normalmente.
//b) Não. Ele não foi feito para criar algo, a semântica confundiria a terceiros.


import express, {Request, Response} from "express"
import { users } from "./data"

const app = express()

app.use(express.json())

app.listen(3003, () => console.log('deu'))

app.get('/users/:type/type'), (req:Request, res:Response) => {
    const userType = req.params.type

    try{
      if(userType !== 'ADMIN' && userType !== 'admin' && userType !== 'NORMAL' && userType !== 'normal') {
        throw new Error('Valor invalido, só aceito ADMIN OU NORMAL')
      }
      const copia = users.filter((user) => {
        if(user.type === (userType.toUpperCase())) {
          return user
        }
      })
      res.status(200).send({message: 'Lista dos usuarios por tipo', copia})
        }catch(error:any){
          switch(error.message){
            case 'Valor invalido, só aceito ADMIN ou NORMAL':
              res.status(422)
              break
            default:
              res.status(500)
          }
          res.send(error.message)
        }
    }
