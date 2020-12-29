import React from 'react';
import './Search.css';
import {BiChevronDown as Down} from 'react-icons/bi';
import {FiSquare as Square} from 'react-icons/fi';
import {useEffect, useState} from 'react';
import ResultPoke from '../ResultPoke/ResultPoke';
import axios from 'axios';

function Search(){

    const [pokedex, setPokedex] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {
        const pokemons = [];
        const promises = [];

        for(let i=1; i<30; i++){
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
        <div className="search-container">
            <div className="mini-se-c">
                <div className="search-title">800 <b>Pokemons</b> for you to choose your favorite</div>
                <div>
                    <input className="search-input" type="text" placeholder="Enter a Pokemon..." onChange={(e) => {
                        setFilter(e.target.value);
                    }}/>
                </div>
                <div className="search-filter"> 

                    <div class="dropdown">
                        <button class="dropbtn">Type<Down/></button>
                        <div class="dropdown-content">
                            <label class="container" onClick={() => setFilter(1)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Electric
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(2)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Water
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(3)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Fire
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(4)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Grass
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Weight<Down/></button>
                        <div class="dropdown-content">
                            <label class="container" onClick={() => setFilter(5)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Light
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(6)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Medium
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(7)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Heavy
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Experience<Down/></button>
                        <div class="dropdown-content">
                            <label class="container" onClick={() => setFilter(8)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Low
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(9)}>
                                <input type="radio" checked="checked" name="radio"/>
                                Medium
                                <span class="checkmark"></span>
                            </label>
                            <label class="container" onClick={() => setFilter(10)}>
                                <input type="radio" checked="checked" name="radio"/>
                                High
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="result-field">
                    {isNaN(filter) && pokedex.map((pokemon) => {
                        console.log(pokemon.weight);
                        if(pokemon.name.includes(filter)){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 1 && pokedex.map((pokemon) => {
                        console.log(pokemon.weight);
                        if(pokemon.type === "electric"){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 2 && pokedex.map((pokemon) => {
                        if(pokemon.type === "water"){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 3 && pokedex.map((pokemon) => {
                        if(pokemon.type === "fire"){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 4 && pokedex.map((pokemon) => {
                        if(pokemon.type === "grass"){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 5 && pokedex.map((pokemon) => {
                        if(pokemon.weight <= 100){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 6 && pokedex.map((pokemon) => {
                        if(pokemon.weight > 100 && pokemon.weight <= 400){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 7 && pokedex.map((pokemon) => {
                        if(pokemon.weight > 500){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 8 && pokedex.map((pokemon) => {
                        if(pokemon.experience <= 100){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 9 && pokedex.map((pokemon) => {
                        if(pokemon.experience > 100 && pokemon.experience <= 200){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                    {filter === 10 && pokedex.map((pokemon) => {
                        if(pokemon.experience > 200){
                            return (<ResultPoke image={pokemon.img} name={pokemon.name} exp={pokemon.experience}/>);
                        }
                    })
                    }
                </div>

            </div>
        </div>
    );
}

export default Search;