import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";

import Homegrid from "./pages/js/Homegrid.js";
import Projectpage from "./pages/js/Projectpage.js";
import Nav from "./components/js/Nav.js";
import Footer from "./components/js/Footer.js";
import EmailForm from "./pages/js/EmailForm";

function App() {
  return (
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
  );
}

export default App;
