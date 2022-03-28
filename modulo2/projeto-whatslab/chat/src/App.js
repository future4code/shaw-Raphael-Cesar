import React from "react";
import styled from "styled-components"
import {Chat} from "./Chat";

const AppContainer = styled.div`
  max-width: 600px;
  height: 95vh;
  border: 5px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 25%;
  word-wrap: break-word;
  
`

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-color: rgb(15, 153, 141);
  color:rgb(61, 241, 25) ;
  font-size: 25PX;
  word-wrap: break-word;
  
  
`

const BoldText = styled.span`
  font-weight: bold;
  color: rgb(61, 241, 25);
  font-size: 25px;
  
  
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {
            this.state.messages.map((message, index) => <p key={index}><BoldText>{message.user}</BoldText>{': ' + message.text}</p>)
          }
        </MessagesContainer>
        <Chat addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;
