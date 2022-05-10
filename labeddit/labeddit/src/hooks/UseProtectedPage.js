import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/Coordinates"



const UseProtectedPages = () => {

    const navigate = useNavigate()
    useLayoutEffect (() => {
        const token = localStorage.getItem("token")
        if (!token){
            goToLogin(navigate)
        }
    }, [navigate])
}
export default UseProtectedPages