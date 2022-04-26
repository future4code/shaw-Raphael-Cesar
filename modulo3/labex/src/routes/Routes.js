import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/home/HomePage'
import AminHomePage from '../Pages/AdminHomePage'
import ListTripsPage from '../Pages/ListTripsPage'
import CreateTripPage from '../Pages/CreateTripPage'
import LoginPage from '../Pages/LoginPage'
import TripDetailsPage from '../Pages/TripDetailsPage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'
import ErrorPage from '../Pages/ErrorPage'


 export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='adm' element={<AminHomePage/>}/>
                <Route path='ListTrip' element={<ListTripsPage/>}/>
                <Route path='create' element={<CreateTripPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='trip' element={<TripDetailsPage/>}/>
                <Route path='application' element={<ApplicationFormPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}