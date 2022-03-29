import React from "react";
import styledComponents from "styled-components";

const final = styled.div`
    display: flex;
     flex-direction: column;
     border: 1px solid black;
     width: 200px;
     margin: 8px;
`

export default function PerguntaAberta(props) {
  return (
    <div>
      <h3>O FORMULÁRIO ACABOU</h3>
      <p>Muito obrigado por participar! Entraremos em contato!</p>
    </div>
  );
}

