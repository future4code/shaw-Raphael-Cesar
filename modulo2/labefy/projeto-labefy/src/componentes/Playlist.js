import React from "react"
import styled from "styled-components"
import axios from "axios"
import Details from "./Details"




const urlBase= ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")

const axiosAuth = {
    headers: {
        Authorization: "Raphael-cesar-shaw"
        }
}

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


  puxarPlaylists = () => {
      axios.get(urlBase, axiosAuth)
     .then((response) => {
         
        this.setState({userPlaylist:response.data.result.list})
     })
}


  deletePlaylist = (id) => {
    if(window.confirm(`Tem certeza que deseja deletar essa playlist?`)) {
       axios.delete(`${urlBase}/${id}`, axiosAuth)
       .then(() => {
           alert("Playlist excluida!")
           this.puxarPlaylists()
       })
    }}

    
  seeDetails = () => {
      this.setState({seeDet: true})
    }

   
  playlistTracks = (playlistId, name) => {
       this.seeDetails()
       console.log(this.playlistTracks, "musicas")
      axios.get (`${urlBase}/${playlistId}/tracks`,axiosAuth)
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