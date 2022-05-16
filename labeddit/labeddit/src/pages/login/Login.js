import React from "react";
import {  useNavigate } from "react-router-dom";
import { ContainerLogin, BoxLogin, ButtonSignup  } from "./styled";
import useForm from "../../hooks/UseForm";
import {login} from "../../service/users"
import {goToSignup} from "../../routes/coordinator"
import { TextField, Button} from "@mui/material";


const Login = ({rightButtonText, setRightButtonText}) => {

  const { form, onChange, clear } = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText);
    
  };

  return (
    <ContainerLogin>
      <BoxLogin>
        
      <h2>Login</h2>
      <form onSubmit={onSubmitForm} >
        <TextField
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="e-mail"
          required
        />
        <TextField
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <Button onClick={onSubmitForm} type={"submit"}>ENTRAR</Button>
        <ButtonSignup>
        <Button onClick={() => goToSignup(navigate)}><p>NÃO POSSUI CONTA? CADASTRE-SE</p></Button>
        </ButtonSignup>
      </form>
      </BoxLogin>
    </ContainerLogin>
  );
};
export default Login;
