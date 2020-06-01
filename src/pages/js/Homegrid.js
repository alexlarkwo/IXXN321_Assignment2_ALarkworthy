import React from "react";
<<<<<<< HEAD
import burntmetal from "../../images/burntmetal.jpg";
import lungs from "../../images/lungs.jpg";
import light from "../../images/light.jpg";
import ring from "../../images/ring.jpg";

import "../css/Homegrid.css";
// import Images from "../../components/js/Images.js";

export default function Homegrid() {
  return (
    <div className="gallery">
      {/* <Images/> */}
      <a href="/#/Projectpage">
        <img src={burntmetal} className="materials" alt="burnt metal" />
=======

import burntmetal from "../../images/burntmetal.png";
import lungs from "../../images/lungs.png";
import light from "../../images/light.png";
import ring from "../../images/ring.png";

import "../css/Homegrid.css";

export default function Homegrid() {
  return (
    <div className="gallery">
      <a href="/#/Projectpage">
        <img
          src={burntmetal}
          className="materials gallery-image"
          alt="burnt metal"
        />
>>>>>>> e43611b76abb77742e5fed368124924bbaa8b1e3
      </a>

      <a href="/#/Projectpage">
        <img
          src={lungs}
<<<<<<< HEAD
          className="materials"
=======
          className="materials gallery-image"
>>>>>>> e43611b76abb77742e5fed368124924bbaa8b1e3
          alt="image of geometric 3d prints"
        />
      </a>

      <a href="/#/Projectpage">
        <img
          src={light}
<<<<<<< HEAD
          className="jpeg"
=======
          className="gallery-image"
>>>>>>> e43611b76abb77742e5fed368124924bbaa8b1e3
          alt="clear plastic with blue light shining through"
        />
      </a>

      <a href="/#/Projectpage">
<<<<<<< HEAD
        <img src={ring} className="materials" alt="silver ring on finger" />
=======
        <img src={ring} className="materials gallery-image" alt="silver ring on finger" />
>>>>>>> e43611b76abb77742e5fed368124924bbaa8b1e3
      </a>
    </div>
  );
}
