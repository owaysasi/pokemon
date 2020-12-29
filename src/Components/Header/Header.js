import React from 'react';
import './Header.css';
import Logo from '../../Pics/Pokemon.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header-container">
            <div className="mini-h-c">
                <div className="header-logo">
                    <img src={Logo} alt="Pokemon"/>
                </div>
                <ul className="header-navbar">
                    <Link className="navbar-item" activeClassName="is-active" to="/">
                    Home
                    </Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/pokedex">
                        Pokedex
                    </Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/legendaries">
                        Legendaries
                    </Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/contactus">
                        Documentation
                    </Link>
                </ul> 
            </div>
        </div>
    );
}

export default Header;