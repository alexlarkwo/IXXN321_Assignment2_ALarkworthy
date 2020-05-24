import React from 'react'
import "../css/Nav.css";

const Nav = (props) => (
<header className="navbox">
    <nav className="navigation">
    <div></div>
    <div className="nav-logo">
        <a href="/#/Homegrid"><img src={require('../../images/alexlarkworthylogo.png')} className ="logo-image" alt="designed logo"/> </a>
    </div>
    <div className="nav-home-logo">
        <a href="/#/Homegrid"><img src={require('../../images/navigation-home.png')} className ="home-image" alt="image of house"/></a>
    </div>
    </nav>
</header>
)

export default Nav; 

