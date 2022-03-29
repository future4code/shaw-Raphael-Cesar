import React from "react";
import ReactDOM from "react-dom";

import etapa1 from "./components/etapa1";
import etapa2 from "./components/etapa2";
import etapa3 from "./components/etapa3";
import final from "./components/final";
import styledComponents from "styled-components";

const Button = styled.button`
  border: 1px solid black;
  font-size: 16px;
  padding: 15px 32px;
  text-align: center;
  `



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <etapa1 />;
      case 2:
        return <etapa2 />;
      case 3:
        return <etapa3 />;
      case 4:
        return <final />;
      default:
        return <final />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

export default App;
