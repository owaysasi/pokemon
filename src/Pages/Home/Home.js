import React from 'react';
import './Home.css';
import Photo from '../../Pics/Component.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function Home(){
    return(
        <div className="home-container">
            <Header/>
            <div className="mini-ho-c">
                <div className="home-talk">
                    <div className="home-title">
                        <b>Find</b> all your 
                        favorite <b>Pokemon</b>
                    </div>
                    <div className="home-desc">
                        You can know the type of Pokemon,
                        its strengths, disadvantages and
                        abilities
                    </div>
                    <button type="button" className="poke-btn"onClick={() => {
                        window.location.href='/pokedex'
                    }}>See Pokemons</button>
                </div>
                <div className="home-view">
                    <img className="pica-pic" src={Photo} alt="Pickachu"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home ;