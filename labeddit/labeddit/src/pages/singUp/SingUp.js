import React from "react";
import { goToLogin } from "../../routes/Coordinates";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
    const navigate = useNavigate()


    return(
        <container>
            <input
              placeholder={"Nome de usuario"}
              type={"text"}
              name={"username"}>

            </input>
            <input
              placeholder={"Email"}
              type={"email"}
              name={"email"}>
                  
            </input>
            <input
              placeholder={"Senha"}
              type={"passaword"}
              name={"passaword"}>
                  
            </input>
            <button>Cadastrar</button>
            <button onClick={() => goToLogin(navigate)}>Voltar</button>


        </container>
    )
}
export default SingUp