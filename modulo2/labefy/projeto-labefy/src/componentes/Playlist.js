import React from 'react'
import axios from 'axios'
import styled from 'styled-components'




const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

export default class Playlist extends React.Component {

    state = {
        inputTitulo: "",
        inputArtista: "",
        inputUrl: "",
        tracksInPlaylist: this.props.tracksInPlaylist
    }

    handleInputTitulo = (e) => {
        this.setState({ inputTitulo: e.target.value })
    }

    handleInputArtista = (e) => {
        this.setState({ inputArtista: e.target.value })
    }

    handleInputUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }

    addTrackToPlaylist = () => {
        const urlAdd = `${url}/${this.props.idListDetails}/tracks`
        const header = {
            headers: {
                Authorization: "Raphael-pereira-shaw"
            }
        }
        const body = {
            name: this.state.inputTitulo,
            artist: this.state.inputArtista,
            url: this.state.inputUrl
        }
        axios
            .post(urlAdd, body, header)
            .then(() => {
                alert("Música adicionada com sucesso.")
                this.getPlaylistTracks(this.props.idListDetails)
            })
            .catch(() => {
                alert("Ops, não foi possível adicinar a música, tente novamente!")
            })

    }

    getPlaylistTracks = (id) => {

        const urlTrack = `${url}/${id}/tracks`
        const header = {
            headers: {
                Authorization: "Raphael-pereira-shaw"
            }
        }
        axios
            .get(urlTrack, header)
            .then((res) => {
                this.setState({ tracksInPlaylist: res.data.result.tracks })
                this.setState({ inputTitulo: "" })
                this.setState({ inputArtista: "" })
                this.setState({ inputUrl: "" })
            })
            .catch(() => {
                alert("Ops, algo deu errado. Tente novamente!")
            })
    }

    render() {

       
        console.log(this.state.tracksInPlaylist)

        const tracks = this.state.tracksInPlaylist.map((track) => {
            return (
              
                <div key={track.name}>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <audio
                        src={track.url}
                        controls
                    ></audio>
                </div>
                
            )
        })
       
        return (
            <addMusica>
            <div>
                <title>LABEFY</title>
                <h5>PLAYLIST</h5>
                <h1>{this.props.nameListDetails}</h1>
                <p>Adiconar música:</p>
                <input
                    placeholder="título da música"
                    value={this.state.inputTitulo}
                    onChange={this.handleInputTitulo}
                ></input>
                <input
                    placeholder="artista"
                    value={this.state.inputArtista}
                    onChange={this.handleInputArtista}
                ></input>
                <input
                    placeholder="url"
                    value={this.state.inputUrl}
                    onChange={this.handleInputUrl}
                ></input>
                <button onClick={this.addTrackToPlaylist}>Adicionar</button>
                {tracks}
                <button onClick={this.props.getAllPlaylists}>Voltar</button>
            </div>
            </addMusica>
        )
    }
}