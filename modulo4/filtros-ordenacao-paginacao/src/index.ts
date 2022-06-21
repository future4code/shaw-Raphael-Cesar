import { app } from "./app";
import {getAllUsers} from '../src/endPoint/getAllUsers'
import {getUserByType} from '../src/endPoint/getUserByTypes'
import {getUserByOrder} from '../src/endPoint/getUserByOrder'
import {getUserByPage} from '../src/endPoint/getUserByPage'


app.get('/user', getAllUsers);
app.get('/userType/:type', getUserByType);
app.get('/user/order', getUserByOrder);
app.get('/user/page', getUserByPage);