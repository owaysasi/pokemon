import React from 'react';
import {useState,useEffect} from 'react';
import SliderCard from '../SliderCard/SliderCard';
import {FiChevronLeft as Left} from 'react-icons/fi';
import {FiChevronRight as Right} from 'react-icons/fi';
import axios from 'axios';

import './SliderPoke.css';

function SliderPoke() {

    const [pokedex, setPokedex] = useState([]);
    const [name, setName] = useState("balbusur");
    const [id, setId] = useState("1");
    const [exper, setExper] = useState("50");


    {/**
        function clickHandler(num){
            setShow(num);
        }

        useEffect(() => {
            console.log(id);
            console.log(name);
        },[id,name]);

    */}
    

    useEffect(() => {
        const pokemons = [];
        const promises = [];

        for(let i=1; i<7; i++){
            const promise = axios
            .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((res) => {
                const poke = res.data;
                const abilities = poke.abilities[0].ability.name;
                const name = poke.name;
                const experience = poke.base_experience
                const weight = poke.weight;
                const order = poke.order;
                const id = poke.id;
                const img = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
                const type = poke.types[0].type.name; 
                pokemons.push({
                    name:name,
                    experience:experience,
                    weight:weight,
                    img:img,
                    type:type,
                    order:order,
                    abilities:abilities,
                    id:id,
                });
            });
            promises.push(promise);
        }
        Promise.all([...promises]).then((values) => {
            setPokedex(pokemons);
        });
    },[]);


    return(
        <div className="slider-container">
            <div className="mini-sl-cont">
                <h1 className="slider-title">Legendaries</h1>
                <hr/>
                <div className="slider-presenter">
                    <div className="presenter-pic">
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="pokemon creature"/>
                    </div>
                    <div className="presenter-desc">
                        <h1 className="desc-title">{name}</h1>
                        <p className="desc-parg">Lorem ipsum dolor sit amet, consectetuer 
                            adipiscing elit. Aenean commodo ligula eget 
                            dolor. Aenean massa. Cum sociis natoque 
                            penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec quam felis, 
                            ultricies nec, pellentesque eu, pretium quis, 
                            sem. Nulla consequat massa quis enim. </p>
                        <div className="power-bar">
                            <div className="row-power-bar">
                                <div className="rating-pack">
                                    <label>Health</label><br/>
                                    <label>100</label>
                                    <div class="bar-container">
                                        <div class="bar">
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-pack">
                                    <label>Experience</label><br/>
                                    <label>{exper}</label>
                                    <div class="bar-container">
                                        <div class="bar-exp" style={{"width":`${exper}/%`}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="power-bar">
                                <div className="row-power-bar">
                                    <div className="rating-pack">
                                        <label>Attack</label><br/>
                                        <label>92</label>
                                        <div class="bar-container">
                                            <div class="bar">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-pack">
                                        <label>Defense</label><br/>
                                        <label>97</label>
                                        <div class="bar-container">
                                            <div class="bar">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="power-bar">
                                <div className="row-power-bar">
                                    <div className="rating-pack">
                                        <label>Special Attack</label><br/>
                                        <label>93</label>
                                        <div class="bar-container">
                                            <div class="bar">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating-pack">
                                        <label>Special Defense</label><br/>
                                        <label>99</label>
                                        <div class="bar-container">
                                            <div class="bar">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-series">
                    <div className="arrow"><Left style={{width:"50px", height:"50px", marginTop:"50px"}}/></div>
                    {pokedex.map((pokemon,index) => (
                        <SliderCard image={pokemon.img} name={pokemon.name} key={index} id={pokemon.id} exp={pokemon.experience} passChildID={setId} 
                        passChildName={setName} passChildExp={setExper}/>
                    ))}
                    <div className="arrow"><Right style={{width:"50px", height:"50px", marginTop:"50px"}}/></div>
                </div>
            </div>
        </div>
    );
}

export default SliderPoke;