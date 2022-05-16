import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import useForm from "../../hooks/UseForm";
import { signup } from "../../service/users";
import {ContainerSignup, BoxSignup, ButtonSignup} from "./styled"
import { TextField , Button} from "@mui/material";

const Signup = () => {

  const { form, onChange, clear } = useForm({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    onSubmitForm()
  })

  const navigate = useNavigate();

  const onSubmitForm = () => {

    console.log("FORM", form)
    signup(form, clear, navigate);
  };

  return (
    <ContainerSignup>
      <BoxSignup>
      <h2>Cadastre-se</h2>
      <form onSubmit={onSubmitForm}>
        <TextField
          name="username"
          type="username"
          value={form.username}
          onChange={onChange}
          placeholder="Nome de usuário"
          required
        />
        <TextField
         name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
        />
        <TextField
        name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title={"A senha deve ter no mínimo oito caracteres, pelo menos uma letra e um número!"}
          placeholder="Senha"
          required
        />
        <ButtonSignup>
        <Button onClick={onSubmitForm}>CADASTRAR</Button>
        </ButtonSignup>
      </form>
      </BoxSignup>
    </ContainerSignup>
  );
};
export default Signup;
