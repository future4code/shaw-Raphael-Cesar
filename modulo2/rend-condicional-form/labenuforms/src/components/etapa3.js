import React from "react";
i

import styledComponents from "styled-components";

const etapa3 = styled.div`
   display: flex;
    flex-direction: column;
     border: 1px solid black;
    width: 200px;
     margin: 8px;
`



class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
        />
      </div>
    );
  }
}

export default Etapa3;
