import React, { useContext } from 'react';
import {BrowserRouter as Router,Switch} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export default function AppRouter() {

    const {user} = useContext(AuthContext);

    return (
            <Router>
                <div>
                    <Switch>
                    <PublicRouter exact isAuthenticated={user.logged} path="/login" component={LoginScreen} />
                    <PrivateRouter isAuthenticated={user.logged} path="/" component={DashboardRoutes} />
                    </Switch>
                </div>
            </Router>
    )
}
