import React from "react";


import styledComponents from "styled-components";
 const etapa2 = styled.div`
     display: flex;
      flex-direction: column;
       border: 1px solid black;
       width: 200px;
       margin: 8px;
 `


class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;
