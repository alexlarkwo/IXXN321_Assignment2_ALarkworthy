import React from 'react'
import { Link } from "react-router-dom"; 
import "../css/Nav.css";
import alexlarkworthylogo from './alexandralarkworthylogo.png';



export default function Nav() {
    return (
        <div className="navigation">
        <Link to="/homegrid" className="nav-link"> Home </Link> 
        {/* link to logo */}
        
        </div>
    )
}
