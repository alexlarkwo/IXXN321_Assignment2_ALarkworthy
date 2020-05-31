import React from "react";

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
      </a>

      <a href="/#/Projectpage">
        <img
          src={lungs}
          className="materials gallery-image"
          alt="image of geometric 3d prints"
        />
      </a>

      <a href="/#/Projectpage">
        <img
          src={light}
          className="gallery-image"
          alt="clear plastic with blue light shining through"
        />
      </a>

      <a href="/#/Projectpage">
        <img src={ring} className="materials gallery-image" alt="silver ring on finger" />
      </a>
    </div>
  );
}
