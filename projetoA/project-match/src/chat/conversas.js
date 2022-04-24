import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ChatSection} from './Styled'

export default function Conversas(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const getMatches = () => {
            axios
            .get(`${props.urlBase}matches`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
        };
        getMatches();
    }, [setMatches])

    return (
        <ChatSection>
            {matches.map((usuarios) => {
                return (
                    <div className="chats" key={usuarios.id}>
                        <img src={usuarios.photo}></img>
                        <h4>{usuarios.name}</h4>
                    </div>
                )
            })}
        </ChatSection>
    )
}