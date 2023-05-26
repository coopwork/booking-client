import React from 'react';
import {Route, Routes} from "react-router-dom";
import ReservationList from "../pages/reservation/list/ReservationList.jsx";
import Login from "../pages/auth/Login.jsx";
import Registration from "../pages/auth/Registration.jsx";
import {Container} from "@mui/material";
import ReservationDetail from "../pages/reservation/details/ReservationDetail.jsx";
import Requests from "../pages/reservation/requests/Requests.jsx";
import History from "../pages/reservation/history/History.jsx";
import NotFound from "../pages/error/notFound.jsx";

const AppRouter = () => {
    return (
        // <Container maxWidth="xl">
            <Routes>
                <Route path='*' element={<NotFound />} />

                <Route element={<Login />} path='/login' />
                <Route element={<Registration />} path='/registration' />

                <Route element={<ReservationList />} path='/' />
                <Route element={<ReservationDetail />} path='/room/:id' />

                <Route element={<History />} path='/history' />
                <Route element={<Requests />} path='/requests' />
            </Routes>
        // </Container>
    );
};

export default AppRouter;