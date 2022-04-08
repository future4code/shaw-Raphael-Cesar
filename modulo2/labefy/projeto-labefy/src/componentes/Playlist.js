import React from "react"
import styled from "styled-components"
import axios from "axios"
import Details from "./Details"

const DelButton = styled.button`
margin-left: 20px;
height: 30px;
width: 70px;
font-size: 15px;
border-radius: 10px;
background-color: #fff3b0;

`
const P = styled.li`
cursor: pointer;
text-align: justify;
list-style-type:none;
font-size: 20px;
`
const PlaylistDiv = styled.div` 
display: grid;
justify-content: center;
margin: 5px;
`



export default class Playlists extends React.Component{
  state = {
    userPlaylist: [],
    seeDet: false,
    tracksList:[],
    namePlaylist: "",
    playlistId: "", 
    
  }


  componentDidMount() {
      this.puxarPlaylists()
}


  puxarPlaylists =async() => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

    axios.get(url, {
      headers: {
         Authorization: "Raphael-pereira-shaw"
      }
  }).then((res) => {
      this.setState({userPlaylist:res.data.result.list })
  })
  .catch((err) => {
      alert("Ocorreu um problema, tente novamente")
  })
}


  deletePlaylist = (id) => {
    if(window.confirm(`Tem certeza que deseja deletar essa playlist?`)) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId`
      axios.delete(url, {
          headers: {
              Authorization: "Raphael-pereira-shaw"
          }
      })
          .then((res) => {
              alert("Usuário(a) deletado(a) com sucesso!")
              this.puxarPlaylists()
          })
      
       
       
    }}

    
  seeDetails = () => {
      this.setState({seeDet: true})
    }

   
  playlistTracks = (playlistId, name) => {
       this.seeDetails()
       console.log(this.playlistTracks, "musicas")
       const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`
        axios.get(url, {
            headers: {
                Authorization: "Raphael-pereira-shaw"
            }
        })
          
        .then((response) => {
         this.setState({
              namePlaylist: name,
              tracksList: response.data.result.tracks,
              playlistId: playlistId                
            })
            
      }).catch(error => {
          console.log(error)
      })
   }

  
  render () {
        
      
    const renderList = this.state.userPlaylist.map((list) => {
        return <PlaylistDiv key={list.id}>
            
            
            <P onClick={() => this.playlistTracks(list.id, list.name)}>
              {list.name}
              <DelButton onClick={() => this.deletePlaylist(list.id)}>Excluir</DelButton>
              </P>
            
            </PlaylistDiv>
    })

    return (
      <div>
       {renderList}
       {this.state.seeDet ?  
        <Details
        backPage={this.seeDetails}
        tracksList={this.state.tracksList}
        namePlaylist={this.state.namePlaylist}
        playlistId={this.state.playlistId}
        />      
        : <></>}
      </div>
      
    )
  }

}