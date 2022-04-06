import React from "react";
import axios from "axios"
import styled from "styled-components";

const cardUsuario =styled.div`

`
export default class ListaDeUsuario extends React.Component{

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "Raphael-cesar-shaw"
            }
        }).then( () => {
            this.setState({usuario: res.data })
        })
        .catch(()=>{
            alert("Erro,tente novamente!")

        })
    } 
        deletarUsuiario = (id) => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
           axios.delete(url, {
               headers:{
                Authorization: "Raphael-cesar-shaw"
               }
           }).then( () => {
            alert("Usuario deletado")
            this.pegarUsuarios()
        })
        .catch(()=>{
            alert("Erro,tente novamente!")
        })
    render() 
        const ListaDeUsuario = this.state.usuario.map(() =>{
            return
            (
            <cardUsuario key={user.id}>
                {user.nome}
                <button onClick={() => this.deletarUsuiario(user.id)}>x</button>
            </cardUsuario>
            )
        })
        return(
            <divi>
                <button onClick={this.props.irParaCadastro}> ir para Lista de Usuarios</button>
                <h2> Lista de Usuarios</h2>
                {ListaDeUsuario}
            </divi>
        )
            
        
    }
}