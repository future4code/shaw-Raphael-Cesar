import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/home/HomePage'
import AdminHomePage from '../Pages/AdminHomePage'
import ListTripsPage from '../Pages/ListTripsPage'
import CreateTripPage from '../Pages/CreateTripPage'
import LoginPage from '../Pages/LoginPage'
import TripDetailsPage from '../Pages/TripDetailsPage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'


 const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exaxt path="/"element={<HomePage/>}/>
                <Route exact path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route exact path="trips/list" element={<ListTripsPage/>}/>
                <Route exact path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/admin/trips/:id" element={<TripDetailsPage/>}/>
                <Route exact pat="/trips/application" element={<ApplicationFormPage/>}/>
                <div>ERRO 04 - Pagina não encontrada</div>
            </Routes>
        </BrowserRouter>
    )
}

export default Router