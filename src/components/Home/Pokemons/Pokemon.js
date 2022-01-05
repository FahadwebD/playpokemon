import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import './Pokemon.css'
const Pokemon = ({poke}) => {
    console.log(poke)
  const [pokes , setPokes] = useState([])

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then (res=> res.json())
        .then(data=> setPokes(data))
    },[poke])

  console.log(pokes)
    return (
        <div>
             <div>
            <div className="cards">
            <div className="card-content">
                <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={pokes?.sprites?.front_default}alt=''/>
                    <div className="shadow"></div>
                    <div className="card-title">{poke.name}</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">{pokes?.base_experience}</small> </p>
                    </div>
                    {/* <Link to={url}><Button style={{backgroundColor:'#8dd1fe' , color:'dark' , border:'none'}}>Appointment</Button></Link> */}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Pokemon;