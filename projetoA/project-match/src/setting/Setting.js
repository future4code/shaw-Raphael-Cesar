import React, {useState} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {SettingSection} from './styled'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';



export default function Setting(props) {

    const [mens, setMens] = useState(false)

    const putClear = () => {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios
        .put(`${props.urlBase}clear`, header)
        .then(() => {
            setMens(true)
        })
        .catch((err) => {
            console.log(err)
        })

    }
    return (
            <SettingSection>
                {mens ? 
                    <div className="mens-sucesso">
                        <CheckCircleOutlineRoundedIcon fontSize="small" color="primary" />
                        <h4>Seu perfil foi resetado!</h4>
                    </div> 
                    : 
                    <Button onClick={() => putClear()}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                    >
                        Limpar swipes e matches
                    </Button>}
            </SettingSection>
    )
}