import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Homegrid from "./pages/js/Homegrid";
import Projectpage from "./pages/js/Projectpage";
import EmailForm from "./pages/js/EmailForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/homegrid" component={Homegrid}/>
        <Route path="/projectpage" component={Projectpage}/>
        <Route path = "/emailform" component={EmailForm}/>
        </Router>
    </div>
  );
}

export default App;
