import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
import SignUpAdress from './../Pages/SignUpAdress/SingUpAdress';
import Feed from './../Pages/Feed/Feed';
import Restaurant from './../Pages/Restaurant/Restaurant';
import Profile from './../Pages/Profile/Profile';
import Cart from './../Pages/Cart/Cart';
import ProfileEdit from './../Pages/ProfileEdit/ProfileEdit';

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route patch='/SignUp'element={<SignUp/>}/>
                <Route patch='/SignUp/Adress'element={<SignUpAdress/>}/>
                <Route patch='/Feed'element={<Feed/>}/>
                <Route patch='/Feed:RestaurantId'element={<Restaurant/>}/>
                <Route patch='/Profile'element={<Profile/>}/>
                <Route patch='/Profile/:id'element={<ProfileEdit/>}/>
                <Route patch='/Cart'element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router