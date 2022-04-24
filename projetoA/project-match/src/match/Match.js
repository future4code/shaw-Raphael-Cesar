import React from 'react'
import axios from 'axios'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import Fab from '@material-ui/core/Fab';
import {MatchSection} from './styled'
export default function Match(props) {

    const choosePerson = (match) => {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = {
            id: props.id,
            choice: match
        }
        axios
        .post(`${props.urlBase}choose-person`, body, header)
        .then(() => {
            props.atualizaPerfil()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <MatchSection>
            <Fab onClick={() => choosePerson(false)}><ClearRoundedIcon fontSize="large" color="secondary"/></Fab>
            <Fab onClick={() => choosePerson(true)}><FavoriteBorderRoundedIcon fontSize="large" color="primary"/></Fab>
        </MatchSection>
    )
}