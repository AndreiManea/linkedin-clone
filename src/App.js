import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import './App.css';
import AppBody from './Components/AppBody/AppBody';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { AuthProvider } from './firebase/AuthContext';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" component={AppBody} exact></Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/home" component={AppBody} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
