import axios from "axios"
import {URL_BASE} from '../constants/Urls'
import {getThePeoplePosts} from '../services/contentViewRequest'

export const createPost = (forms, clear, setPosts) => {
    const token = localStorage.getItem("token")
    const body = {
        title:forms.title,
        body:forms.body
    }
    axios.post(`${URL_BASE}/posts`, body, {
        headers: {
            authorization:token
        }
    })
    .then((response) => {
        getThePeoplePosts(setPosts)
        clear()
    }).catch((error)  => {
        console.log(error.response.data)
    })
}