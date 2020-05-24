
import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel>
       <img src={require('../../images/larkworthy_alex_pres6.jpg')} className="close-render" alt="render of viens and skin"/>
      </Carousel>
    );
  }
}

// export default function Projectpage() {
//     return (
//         <div>
//             project
//         </div>
//     )
// }

