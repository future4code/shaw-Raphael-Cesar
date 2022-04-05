import React from "react";
import axios from "axios";

 class App extends React.Component {
  state = {
    user: [],
    inputNome: "" ,
    inputEmail: ""

  };

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.Target.value})
  }

  createUser = () => {
    const body = {
      nome: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,{
      headers:{
        Authorization: "Raphael-cesar-shaw"
      }
    }
    ).then((resposta) =>{
      console.log(resposta.data)
    }).catch((error) => {
      console.log(error.message);
    });
  }
  render() {
    return (
      <div>
        <label>
          Email:
          <input
          placeholder=""
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
          />
        </label>
        <br/>
        <label>
          Nome:
          <input
           placeholder= ""
           value={this.state.inputNome}
           onChange={this.onChangeNome}
         />
        </label>
        <br/>
        <button onClick={this.createUser}>Concluir</button>
        
      </div>
    );
  }
}
export default App;