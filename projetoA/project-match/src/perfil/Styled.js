import styled from 'styled-components'

export const PerfilSection = styled.div`
    grid-row: 2 / span; 
    object-fit: scale-down;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    .foto-perfil {
        display: flex;
        justify-content: center;
    }
    #foto-usuario {
        width: 350px;
        height: 350px;
        object-fit: scale-down;
        background-image: url(${props => (props.url)});
        border-radius: 20px;
    }
    #animacao {
        width: 100px;
        height: 100px;
    }
    .detalhes {
        padding: 0 15px 0 15px;
    }
    .perfil-completo {
        background-color: #e8e8e8;
        border-radius: 20px;
        border: solid 4px #e8e8e8;
    }
    `