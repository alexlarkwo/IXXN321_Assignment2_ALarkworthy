import React from "react";
<<<<<<< HEAD
import { HashRouter, Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> e43611b76abb77742e5fed368124924bbaa8b1e3

import "./App.css";

import Homegrid from "./pages/js/Homegrid.js";
import Projectpage from "./pages/js/Projectpage.js";
import Nav from "./components/js/Nav.js";
import Footer from "./components/js/Footer.js";
import EmailForm from "./pages/js/EmailForm";

function App() {
  return (
<<<<<<< HEAD
    <HashRouter basename="/Homegrid">
      <div className="App">
        <Nav />

        {/* <EmailForm /> */}

        <Route path="/homegrid" exact component={Homegrid} />
        <Route path="/projectpage" exact component={Projectpage} />
        <Route path="/emailform" exact component={EmailForm} />
        <Footer />
      </div>
    </HashRouter>
=======
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Homegrid} />
        <Route path="/projectpage" exact component={Projectpage} />
        {/* <Route path = "/emailform" exact component={EmailForm}/>  */}
        <Footer />
      </div>
    </Router>
>>>>>>> e43611b76abb77742e5fed368124924bbaa8b1e3
  );
}

export default App;
