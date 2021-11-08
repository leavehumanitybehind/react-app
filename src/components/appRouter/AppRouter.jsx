import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as routes from '../../routes/routes';
import Login from '../login/Login';
import Main from '../main/Main';
//import * as constants from '../../constants/constants';

const AppRouter = () => {
    let user = false;
    return (
        user ?
            <Routes>
                <Route key='login' path='login' element={<Login />} />
            </Routes>

            :

            <Routes>
                <Route key='main' path='main' element={<Main />} />
            </Routes>
    )
};

export default AppRouter;