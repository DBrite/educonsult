import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Pages/Home';
import AboutUs from './component/Pages/AboutUs'
import Footer from './component/Footer';
import Services from './component/Pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us'  component={AboutUs} />
          <Route path='/services'  component={Services} />
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
