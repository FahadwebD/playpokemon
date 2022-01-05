import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Header from '../Shared/Header/Header';
import FavouritePokemon from './FavouritePokemon';


const FavouritePokemons = () => {

    const { user } = useAuth0()
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        const url =`https://powerful-cliffs-25620.herokuapp.com/orders/${user?.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])
   console.log(orders)
    return (
        <div>
            <Header></Header>
            <div className='mapGrid'>  
            {
                orders.map(poke => <FavouritePokemon poke={poke}></FavouritePokemon>)
            }
        </div>
        </div>
    );
};

export default FavouritePokemons;