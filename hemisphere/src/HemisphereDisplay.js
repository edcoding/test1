import React from "react";
import ReactDOM from "react-dom";
import img from './img/img.jpeg'
import img2 from './img/img2.jpeg'


const HemisphereDisplay = ({latitude}) => {

    const hemisphere=latitude > 0 ?'Nothern hemisphere' : 'Southern hemisphere'
    const img3=latitude> 0 ? img : img2


    return (
        <div >
            <img src={img3} alt=""/>
        {hemisphere}
        </div>

    )
}

export default HemisphereDisplay