import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Header from '../../Shared/Header/Header';
import Pokemons from '../Pokemons/Pokemons';
import FavouritePokemons from '../../FavouritePokemons/FavouritePokemons';

const Home = () => {
    return (
        <div>
            <Header></Header>
            
            <Pokemons></Pokemons>
        </div>
    );
};

export default Home;