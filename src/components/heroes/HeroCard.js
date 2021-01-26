import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroCard({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) {

    return (
        
        <div className=" card mb-4 animate__animated animate__backInLeft">
            <div className="contenedor">
                <img className="card-img-top img" src={`./assets/heroes/${id}.jpg`} alt="Card image cap"></img>
                <div className="texto">
                    <p>{superhero}</p>
                    <p>{alter_ego}</p>
                </div>
            </div>
            <div className="card-body">
                    {
                        (alter_ego !== characters)
                        && <p className="card-text primer-texto text-center">{characters}</p>
                    }
                    <p className="card-text text-center primer-texto">{first_appearance}</p>
                    <Link to={`./hero/${id}`} className="btn btn-outline-dark button">
                        Mas Información...
                    </Link>
            </div>
        </div>
    )
    
}
