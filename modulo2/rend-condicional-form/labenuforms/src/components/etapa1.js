import React from "react";

import styledComponents from "styled-components";

const etapa1 = styled.div`
   display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
    margin: 8px;
`
  




class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </div>
    );
  }
}

export default Etapa1;
