import React from 'react';

const FavouritePokemon = ({poke}) => {
    console.log(poke)
    const{name , image} = poke
    return (
        <div>
             <div className="cards">
            <div className="card-content">
                <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={image} alt=''/>
                    <div className="shadow"></div>
                    <div className="card-title">{name} </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">te</small> </p>
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    );
};

export default FavouritePokemon;