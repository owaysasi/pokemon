import React from 'react';
import './Pokedex.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Search from '../../Components/Search/Search';


function Pokedex() {
    return(
        <div className="poke-container">
            <Header/>
            <Search/>
            <Footer/>
        </div>
    );
}

export default Pokedex;