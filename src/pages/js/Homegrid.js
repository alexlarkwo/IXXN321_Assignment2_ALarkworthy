import React from "react";
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
      </a>

      <a href="/#/Projectpage">
        <img
          src={lungs}
          className="materials"
          alt="image of geometric 3d prints"
        />
      </a>

      <a href="/#/Projectpage">
        <img
          src={light}
          className="jpeg"
          alt="clear plastic with blue light shining through"
        />
      </a>

      <a href="/#/Projectpage">
        <img src={ring} className="materials" alt="silver ring on finger" />
      </a>
    </div>
  );
}
