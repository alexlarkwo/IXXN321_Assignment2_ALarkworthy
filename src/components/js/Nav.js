import React from 'react'
import { Link } from "react-router-dom"; 
import logo from '../images/alexandralarkworthylogo.png'
import home from '../images/navigation-home.png'
import "../css/Nav.css";




export default function Nav() {
    return (
        <div className="navigation">
        <Link to="/homegrid"> 
        <Image src={logo} class ="logo-image" alt="designed logo"/>  
        </Link> 

        <Link to="/homegrid">
            <Image src={home} class="house-image" alt="image of a house"/>
        </Link>
      
        
        </div>
    )
}
