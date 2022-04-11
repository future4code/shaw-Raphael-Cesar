import axios from 'axios'
import React from 'react'
import Playlist from './Playlist'
import styled from 'styled-components'






const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

export default class Biblioteca extends React.Component {

    state = {
        inputValue: "",
        playlists: [],
        nameListDetails: "",
        idListDetails: "",
        tracksInPlaylist: [],
        telaRenderizada: "biblioteca"
    }

    handleInputValue = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    createPlaylist = () => {

        const header = {
            headers: {
                Authorization: "Raphael-pereira-shaw"
            }
        }
        const body = {
            name: this.state.inputValue
        }
        axios
            .post(url, body, header)
            .then(() => {
                alert("Playlist criada com sucesso")
                this.setState({ inputValue: "" })
               
            })
            .catch((err) => {
                if (err.response.data.message === "There already is a playlist with a similiar name.") {
                    alert("Essa playlist já foi criada! Escolha outro nome");
                }
            })
    }

    getAllPlaylists = () => {

        this.setState({ telaRenderizada: "biblioteca" })

        const header = {
            headers: {
                Authorization: "Raphael-pereira-shaw"
            }
        }
        axios
            .get(url, header)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch(() => {
                alert("Ops, algo deu errado. Tente novamente!")
            })
    }

    deletePlaylist = (id) => {
        const urlDel = `${url}/${id}`
        const header = {
            headers: {
                Authorization: "Raphael-pereira-shaw"
            }
        }
        axios
            .delete(urlDel, header)
            .then(() => {
                alert('Playlist deletada de sua biblioteca')
                this.getAllPlaylists()
            })
            .catch(() => {
                alert('Ops, algo deu errado. Tente novamente!')
            })
    }

    getPlaylistTracks = (id, name) => {

        this.setState({ nameListDetails: name })
        this.setState({ idListDetails: id })

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
                this.setState({ telaRenderizada: "playlists" })
            })
    }

    render() {

        const playlistsUser = this.state.playlists.map((list) => {
            return (
                <div key={list.id}>
                    <p>{list.name}</p>
                    <button onClick={() => this.getPlaylistTracks(list.id, list.name)}>+</button>
                    <button onClick={() => this.deletePlaylist(list.id)}>X</button>
                    <hr/>
                </div>
            )
        })

        switch (this.state.telaRenderizada) {
            case "biblioteca":
                return (
                    <div>
                        <h3>LABEFY</h3>
                        <input
                            placeholder="Título da Playlist"
                            value={this.state.inputValue}
                            onChange={this.handleInputValue}
                        ></input>
                        <button
                            onClick={this.createPlaylist}
                        >Criar</button>
                        <button
                            onClick={this.getAllPlaylists}
                        >Suas playlists</button>
                        {playlistsUser}
                    </div>
                );
            case "playlists":
                return (
                   <Playlist
                   tracksInPlaylist={this.state.tracksInPlaylist}
                   nameListDetails={this.state.nameListDetails}
                   idListDetails={this.state.idListDetails}
                   getAllPlaylists={this.getAllPlaylists}
                   /> 
                )
            default:
                break;
        }
    }
}