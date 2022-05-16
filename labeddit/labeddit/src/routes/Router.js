import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErroPage/errorPage'
import Feed from '../pages/Feed/Feed'
import Login from '../pages/login/Login'
import Post from '../pages/Post/Post'
import SignUp from '../pages/singUp/signUp'


const Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router