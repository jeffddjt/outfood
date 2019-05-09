import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './components/login';
import Admin from "./components/admin";

class App extends React.Component {

  render() {
    return (
        <Router>
            <Route exact path="/" component={ Login } />
            <Route path="/admin" component={ Admin}/>
        </Router>
    )
  }
}


export default App;
