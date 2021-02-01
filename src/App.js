import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AppBody from './Components/AppBody/AppBody';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  
  const [auth, setAuth] = useState(false);

  return (
    <div className="app" style={{background: auth ? '#f3f2ef' : '#fff'}}>
        <Router>
          <Switch>
            <Route path="/" component={auth ? AppBody : Login } exact/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={AppBody} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
