import React, { useState } from "react";
import axios from "axios";
import { navigate, useNavigate } from "react-router-dom";
import labex from "./img/"
import { Button } from "@mui/material";





const loginpage = () => {
 
    useUnprotectedPage()
    
    const navigate = useNavigate();

    const { form, onChange} = useForm({
        email: "",
        password: ""
    })

    const onClickLogin = (event) => {
        event.preventDefault();
        const body = form;
        axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("email", form.email)
            navigate.push("/admin/trips/list")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    return(
        <Main>
            <Container>
                
                <Form onSubmit={onclickLogin}>
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
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    
                </Form>
                <Botoes>
                    <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                    <Button type={"submit"}>Entrar</Button>
                </Botoes>
            </Container>

        </Main>
    )
}
export default loginpage