import React from "react";
import axios from "axios"
import styled from "styled-components";
import userEvent from "@testing-library/user-event";

const CardUsuario =styled.div`
     border: 1px solid black;
     padding: 10px;
     width: 200px;
     display: flex;
     justify-content: space-between;
`
export default class ListaDeUsuario extends React.Component{

    state = {
        usuario: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "Raphael-cesar-shaw"
            }
        }).then((res) => {
            this.setState({usuario: res.data })
        })
        .catch((err)=>{
            alert("Erro,tente novamente!")

        })
    } 
        deletarUsuiario = (id) => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
           axios.delete(url, {
               headers:{
                Authorization: "Raphael-cesar-shaw"
               }
           })  
            .then((res) => {
            alert("Usuario deletado")
            this.pegarUsuarios()
           })
            .catch((err) =>{
            alert("Erro,tente novamente!")
           })
        }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
        
        
}