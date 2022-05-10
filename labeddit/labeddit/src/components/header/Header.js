import React from "react"
import { useNavigate } from "react-router-dom"  
import LogOut from '../Logout/LogOut'
import {StyleHeader} from './styled'

const Header = () =>{
   const navigate = useNavigate()
   const goToFeed = () => {
    navigate('/')
}

return (
    <StyleHeader>
        <button onClick={goToFeed}><h3>Labeddit</h3></button>
        <LogOut/>
    </StyleHeader>
)

}
export default Header