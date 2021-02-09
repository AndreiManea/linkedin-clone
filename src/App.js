import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import AppBody from './Components/AppBody/AppBody';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { AuthProvider } from './firebase/AuthContext';

function App() {

  return (

    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" component={Login} exact></Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={AppBody} />
          </Switch>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
