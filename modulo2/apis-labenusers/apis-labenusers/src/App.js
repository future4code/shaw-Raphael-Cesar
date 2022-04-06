import React from "react";
import Cadastro from "./componentes/Cadastro";
import ListaDeUsuario  from "./componentes/ListaDeUsuario";


 export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
    
  };
  tela = () => {
    switch(this.state.telaAtual){
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "Lista":
        return <ListaDeUsuario irParaCadastro={this.irParaCadastro}/>
      default:
         return <div>Erro! Pagina não encontrada</div>
      
    }
  }

  irParaCadastro = () => {
    this,this.setState({telaAtual: "cadastro"})
  }
  
  irParaLista = () => {
    this.setState({telaAtual: "Lista"})
  }

  render (){
    return (
      <div>
        {this.tela()}
      </div>
    )
  }

 } 