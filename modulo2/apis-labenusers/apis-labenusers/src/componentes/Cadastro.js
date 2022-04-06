import axios from "axios";
import React from "react";

export default class Cadastro extends React.Component{
    state= {
        nome: "",
        email: ""
    }
      handleNome = (event) => {
         this.setstate({nome: event.target.value})
        }
      handleEmail = (event) => {

    }
       fazerCadastro = () => {
           const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
           const body = {
               name: this.state.nome,
               email: this.state.email
           }
           axios.post(url, body, {               
               Headers: {
                Authorization: "Raphael-cesar-shaw"
               }

             } )
            .then((res)=> {
                alert("Usuario cadastrado com sucesso!") 
                this.setState({nome:"",email:"" })
            })
            .catch((err)=> {
                alert( err.response.data.message)
            })

          console.log(this.state)
       }
    render() {
        return(
            <div>
                <button onClick={this.props.irParaLista}> ir para Lista de Usuarios</button>
                <h2>Cadastro</h2>
                <input placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input placeholder={"Email"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
            
        
    }
}