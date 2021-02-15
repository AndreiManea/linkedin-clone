import React from 'react'
import './AppBody.css'
import Header from './Header/Header'
import Network from './Network/Network'
import Jobs from './Jobs/Jobs'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home/Home'
import { useAuth } from '../../firebase/AuthContext'
function AppBody() {
    const { signOut } = useAuth();
    return (
        <div className="appBody">
            <Router>
                <Header logout={signOut} />
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
