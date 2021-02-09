import React from 'react'
import './AppBody.css'
import Header from './Header/Header'

import Network from './Network/Network'
import Jobs from './Jobs/Jobs'
import { Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import Home from './Home/Home'
import { auth } from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
function AppBody() {
    const history = useHistory();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        auth.signOut();
        dispatch(logout());
        history.push('/login');
    }
    return (
        <div className="appBody">
            <Router>
                <Header logout={logoutHandler} />
                <div className="appBody__body">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/network" component={Network} />
                        <Route path="/jobs" component={Jobs} />
                    </Switch>
                </div>
            </Router>

        </div>
    )
}

export default AppBody
