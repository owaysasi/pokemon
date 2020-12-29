import React from 'react';
import './Legendaries.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SliderPoke from '../../Components/SliderPoke/SliderPoke';

function Legendaries(params) {
    return(
        <div className="legen-container">
            <Header/>
            <SliderPoke/>
            <SliderPoke/>
            <Footer style={{color:"white"}}/>
        </div>
    );
}

export default Legendaries;