import logo from './logo.svg';
import './App.css';
import React from 'react';
import styledComponents from 'styled-components';
import { render } from '@testing-library/react';


export default class App extends React.Component {

  state={
    pagina: 1
  }
  irParaProximaEtapa = () => {
    this.setState({pagina :this.state.pagina +1})
  }
  render()

    let paginaAtual;
    switch (this.state.pagina) {
      case 1:
        paginaAtual = <etapa1 />;
        break;
      case 2:
          paginaAtual = <etapa1 />;
          break;
      case 2:
          paginaAtual = <etapa1 />;
          break;
    default:
      paginaAtual = <final/>;
    }

  return {
    
    {this.paginaAtual}
      <BotaoMain>
        <button onClick={this.irParaProximaEtapa}>proxima etapa</button>
      </BotaoMain>
      
   
  }

export default App;
