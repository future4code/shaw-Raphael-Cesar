import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToSingUp } from "../../routes/Coordinates"



const Login = () => {

const navigate = useNavigate()




    return(
        <>
          <div>
              <h1>Labeddit</h1>
          </div>
          <menu>
              <h2>Login</h2>
              <form>
                  <input 
                  type={"email"} 
                  placeholder={'Email'}
                  name={"email"}>
                  
                  </input>
                  <input
                  type={'password'}
                  placeholder={'senha'}>

                  </input>
                  <button>Entrar</button>
                  <button onClick={() => goToSingUp(navigate)}>Cadastre-se</button>
              </form>
          </menu>
        </>

    )

}
export default Login