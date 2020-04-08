import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './components/Footer';
import Show from './components/Show';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Route
          render={({location}) => (
            <div>
              <Nav/>
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
              <Route exact path={'/'} component ={Home} />
                <Route exact path={"/show/*"} component ={Show} />
                <Route exact path={"/details/*"} component ={Details} />
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
