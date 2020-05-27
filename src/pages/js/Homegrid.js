import React from 'react' 
import "../css/Homegrid.css";
// import Images from "../../components/js/Images.js";



export default function Homegrid() {
    return (
        <div className="gallery">
    {/* <Images/> */}
    <a href ="/#/Projectpage"><img src={require('../../images/IMG_3005 (2).jpg')} className="materials" alt = "burnt metal"/></a>
           
        </div>
    )
}
