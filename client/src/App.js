import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register';
import BootstrapCarousel from './components/carousel';
import Navbar1 from './components/header';


function App() {
  return (<div>
    <Router>
     <Navbar1/>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>

    </Router>
    <BootstrapCarousel></BootstrapCarousel>
    
  </div>
  );
}

export default App;
