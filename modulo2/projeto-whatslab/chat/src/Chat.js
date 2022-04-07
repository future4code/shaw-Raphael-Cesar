import React from "react";
import styled from "styled-components"

const ChatContainer = styled.div`
  display: flex;
  color:rgb(61, 241, 25);
  padding: 1rem;
  background-color:rgb(7, 87, 80);
  
`

const UserInput = styled.input`
  width: 90px;
  height:40px;
  
`

const TextInput = styled.input`
  flex: 1;
  
  
 
`


export class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userValue: "",
      textValue: ""
    }
  }

  onChangeUser = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({textValue: event.target.value})
  }

  onSendMessage = () => {
    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ""})
  }

  render() {
    return (
      
      <ChatContainer>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.userValue}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textValue}/>
        <button onClick={this.onSendMessage}>Enviar</button>
      </ChatContainer>
    );
  }
}



        

    

