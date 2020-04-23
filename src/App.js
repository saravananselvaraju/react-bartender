import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Show from './components/Show';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Router basename="/">
              <Switch>
                <Route exact path={'/'} component ={Home} />
                <Route path={"/show/:category"} component ={Show} />
                <Route path={"/view/:category/:id"} component ={Details} />
              </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
