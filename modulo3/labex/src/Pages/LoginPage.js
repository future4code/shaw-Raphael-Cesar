import React from "react";
import useForm from "../hooks/useForm"
import {useNavigate} from "react-router-dom";
import {goToHomePage} from "../routes/coordinator"
import {login} from "../service/Service"
import useUnProtectedPage from "../hooks/useunProtectedPage"




const loginpage = () => {
 
    useUnProtectedPage()
    
    const navigate = useNavigate();

    const { form, onChange} = useForm({
        email: "",
        password: ""
    })

    const onClickLogin = (event) => {
        event.preventDefault();
        login(form, navigate)
        
    }
    return(
        <div>
            <h1> login</h1>
            <Form onSubmit={onClickLogin}>
                    <input
                        placeholder="E-mail"
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <input
                        placeholder="Senha"
                        type={"password"}
                        name={"Password"}
                        value={form.password}
                        onChange={onChange}
                        required
                    />
                    
                
                <Botoes>
                    <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>
                </Botoes>
            </Form>
        </div>
                
                
  

        
    )
}
export default loginpage