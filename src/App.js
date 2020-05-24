import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import './App.css';

import Homegrid from "./pages/js/Homegrid";
import Projectpage from "./pages/js/Projectpage";
import EmailForm from "./pages/js/EmailForm";
import Nav from "./components/js/Nav.js";
import Footer from "./components/js/Footer.js";
import Images from "./components/js/Images.js";

function App() {
  return (
  
      <HashRouter basename="/Homegrid">
    <div className="App">
      <Nav />
      <Footer />
      <Images/>
        <Route path="/homegrid" exact component={Homegrid}/>
        <Route path="/projectpage" exact component={Projectpage}/>
        <Route path = "/emailform" exact component={EmailForm}/>
    </div>
    </HashRouter>
  );
}

export default App;
