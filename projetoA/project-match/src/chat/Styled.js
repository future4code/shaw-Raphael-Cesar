import styled from 'styled-components'

export const ChatSection = styled.div`
    padding: 5px;
    .chats {
        display: flex;
        margin: 10px;
        border-radius: 10px;
        padding: 0 5px;
        cursor: pointer;
    }
    .chats:hover {
        color: white;
        background-color: #c4c4c4;
    }
    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 60px;
    }
    
    h4 {
        padding-left: 10px;
    }
`