import React from 'react'

export default function Images(props) {
    return (
        <div className="image h${h} v${v}">
        <img src={require('../../images/$randomNumber(5).jpg')}/>
        </div>
    )
}

function randomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({ length:50 }, () => [randomNumber(4), randomNumber(4)]);

const image = digits.map(Images).bind('');
gallery.innerHTML = image;
 