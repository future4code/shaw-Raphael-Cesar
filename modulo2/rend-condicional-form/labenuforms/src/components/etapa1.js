import React, { useState } from "react";

export default class etapa1 extends React.Component {

  const [nome] = useState('Qual o seu nome?')
  const [idade] = useState('Qual a sua idade?')
  const [email] = useState('Qual o seu Email?')

 return (
    <div>
        <><label> Qual o seu nome?</label><input
            type="text"
            name="fnome"
            value={nome}
            onChange={(e) => setNome(e.target.value)} /><label> Qual a sua idade?</label><input
                type="text"
                name="fidade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)} /><label> Qual o seu Email?</label><input
                type="text"
                name="femail"
                value={email}
                onChange={(e) => setEmail(e.target.value)} /><label>Qual a sua escolariedade?</label></>

      
    </div>
  );
}

