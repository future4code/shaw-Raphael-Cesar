import React from 'react';
import './CardGrande.css'
import styledComponents from 'styled-components';

const DivBC = styledComponents.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;

h4{
    margin-bottom: 15px;
}

img{
    width: 70px;
    margin-right: 10px;
    border-radius: 50%; 
}
`


function CardGrande(props) {
    return (
        <DivBC>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </DivBC>
    )
}

export default CardGrande;