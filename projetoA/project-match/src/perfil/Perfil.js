import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {PerfilSection} from './styled'



export default function Perfil(props) {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        const getProfileToChoose = () => {
            axios
            .get(`${props.urlBase}person`)
            .then((res) => {
                setUsuario(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
        };
        getProfileToChoose();
    }, [props.newPerfil])

    return (
        <PerfilSection url={usuario.photo}>
            {usuario.photo ?
                <div className="perfil-completo">
                    <div className="foto-perfil">
                       <img id="foto-usuario" src={usuario.photo}></img> 
                    </div>
                    <div className="detalhes">
                       <h3>{`${usuario.name}, ${usuario.age}`}</h3>
                        <p>{usuario.bio}</p>  
                    </div>
                    {props.idProfile(usuario.id)}
                </div>
            : 
                <h3>Atualizando...</h3>
            }
            
        </PerfilSection>
    )
}