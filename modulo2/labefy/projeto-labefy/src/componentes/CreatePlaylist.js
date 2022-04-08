import React from "react"
import styled from "styled-components"
import axios from "axios"


const InputTitle = styled.h2`
color: #335c67;
`
const CreateBut = styled.button`
margin-top:10px;
height: 30px;
width: 115px;
font-size: 15px;
border-radius: 10px;
background-color: #fff3b0;
display:inline;

`
const AddPlaylist = styled.div`
display: grid;
justify-items: center;
`




export default class CreatePlaylist extends React.Component{
  state = {
    namePlaylist: ""
  }


  //controlar input
  changeNamePlaylist = (event) => {
      this.setState({namePlaylist: event.target.value})
  }

  //criar playlist
  createPlaylist = () => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
      const body = {
          name: this.state.namePlaylist
       }
        axios.post(url, body, {
        headers: {
            Authorization: "Raphael-cesar-shaw"
        }
        })
        
        .then(() => {
          alert(`Playlist ${this.state.namePlaylist} criada com sucesso!`)
          this.setState({namePlaylist: ""})
      }).catch(error => {
          alert("Erro ao criar playlist. Por favor, escolha outro nome.")
          console.log(error)
      })
  }

  render () {
    return (
      <AddPlaylist>
          <InputTitle>Digite o nome da Playlist</InputTitle>
        <input
        value = {this.state.namePlaylist}
        onChange = {this.changeNamePlaylist}
        />
        <CreateBut onClick = {this.createPlaylist}>Criar Playlist</CreateBut>
      </AddPlaylist>
      
    ) 
  }

}
