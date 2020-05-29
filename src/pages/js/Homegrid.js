import React from 'react' 
// import burntmetal from '../../images/burntmetal.jpeg';
// import lungs from '../../images/lungs.jpeg';
// import light from '../../images/light.jpeg';
// import ring from '../../images/ring.jpeg';

import "../css/Homegrid.css";
// import Images from "../../components/js/Images.js";



export default function Homegrid() {
    return (
        <div className="gallery">
    {/* <Images/> */}
    {/* <a href ="/#/Projectpage">
        <img src='../../images/burntmetal.jpeg' className="materials" alt="burnt metal"/>
    </a> */}

    <a href ="/#/Projectpage">
        <img src='../../images/lungs.jpeg' className="materials" alt="image of geometric 3d prints"/>
    </a>

    {/* <a href ="/#/Projectpage">
        <img src={light} className="jpeg" alt="clear plastic with blue light shining through"/>
    </a>

    <a href ="/#/Projectpage">
        <img src={ring} className="materials" alt="silver ring on finger"/>
    </a> */}

           
        </div>
    )
}
