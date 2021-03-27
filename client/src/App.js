import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/register';
import Header from './components/header';
import BootstrapCarousel from './components/carousel';
import OurClient from './components/ourClient';
import Team from './components/team';
import OurServices from './components/ourServices';
import Address from './components/address';

function App() {
  return (<div>
    <Router>
      <Header/>
      <Route exact strict path="/register" component={Register}></Route>
      <Route exact strict path="/login" component={Login}></Route>
      <Route exact strict path="/contact" component={Address}></Route>
    </Router>
    <BootstrapCarousel></BootstrapCarousel>
    <div className="container-fluid">
    <h3 className="row justify-content-center subheader p-2">Our client</h3>
    <div className="row justify-content-center">
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" title="abc" caption="With supporting text below as a natural lead-in to additional content."></OurClient>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" title="abc" caption="With supporting text below as a natural lead-in to additional content."></OurClient>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-3">
        <OurClient imagesrc="http://wallpaperheart.com/wp-content/uploads/2018/08/4k-ultra-hd-wallpaper-6.jpg" title="abc" caption="With supporting text below as a natural lead-in to additional content."></OurClient>
      </div>
    </div>
    </div>
    <Team></Team>
    <OurServices></OurServices>
    <Address></Address>
  </div>
  );
}

export default App;
