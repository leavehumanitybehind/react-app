import Login from '../components/login/Login.jsx';
import Main from '../components/main/Main.jsx';
import * as constants from '../constants/constants.js';

export const publicRoutes = [
    {
        path: constants.LOGIN_ROUTE,
        Component: Login,
    }
];

export const privateRoutes = [
    {
        path: constants.MAIN_ROUTE,
        Component: Main,
    }
];