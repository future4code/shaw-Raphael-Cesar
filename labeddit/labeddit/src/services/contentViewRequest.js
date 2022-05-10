import axios from 'axios'
import { URL_BASE } from '../constants/Urls'

const getThePeoplePosts = (setPosts) =>{
    const token =localStorage.getItem("token")
    axios.get(`${URL_BASE}/posts`, {
        headers: {
            Authorizaation:token
        }
    })
    .then((response)  => {
        setPosts(response.data)
    }).catch((error) => {
        console.log('erro, error.response')
    })
}
export default getThePeoplePosts