import React from 'react';
import './ResultPoke.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function ResultPoke(props) {

   const {image, name, exp} = props;
    

    return(
        <div className="resultpoke-container">
            <div className="desc-res">
                <h4 className="title-desc-res">{name}</h4>
                <div className="marks-cont-res">
                    <a className="marks-desc-res">{exp}</a>
                    <a className="marks-desc-res">49</a>
                </div>
                <div className="words-marks-res">
                    <h6>Attack</h6>
                    <h6>Defense</h6>
                </div>
                <div className="cont-label-marks-res">
                    <a className="label-marks-res">Grass</a>
                </div>
            </div>
            <div className="cont-pic-res">
                <img className="pic-res" src={image} />
            </div>
        </div>
    );
}

export default ResultPoke;