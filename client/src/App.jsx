import React, {
  Component
} from 'react';
//import Home from "./components/home";
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import MainLayoutRouter from './components/layout/MainLayoutRoute';
import EmptyLayout from './components/layout/Empty-Layout';
import Login from './components/login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" layout={EmptyLayout} component={Login} />
          <MainLayoutRouter />
        </Switch>
      </Router>
    );
  }
}

export default App;