import './SliderCard.css';
import Gpoke from '../../Pics/goldenPokeball.png';
import {useEffect, useState} from 'react';

function SliderCard(props) {

    const {image, name, id, exp, passChildID, passChildName, passChildExp} = props;
    
    

    return(
        <div className="slidercard-container" onClick={() => {
            passChildID(id);
            passChildName(name);
            passChildExp(exp);
            console.log(id,name,exp);
            }}>
            <div className="slider-card">
                <img className="img-card" src={image}/>
                <div className="img-desc">
                    <h3 className="name-img-desc">{name}</h3>
                    <img className="gold-pokeball" src={Gpoke} alt="golden pokeball"/>
                </div>
            </div>
        </div>
    );
}

export default SliderCard;