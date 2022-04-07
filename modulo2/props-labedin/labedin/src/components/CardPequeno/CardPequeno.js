import React from 'react';
import './CardPequeno.css'
import styledComponents from 'styled-components';

const SDiv = styledComponents.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 40px 10px;
margin-bottom: 10px;
height: 200px;

img{
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}
h5{
    margin-bottom: 15px;
}
`



function CardPequeno(props) {
    return (
        <SDiv>
            <img src={ props.imagem } />
            <div>
                <h5>{ props.nome }</h5>
                <p>{ props.descricao }</p>
            </div>
        </SDiv>
    )
}

export default CardPequeno;