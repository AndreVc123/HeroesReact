import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export default function HeroScreen({history}) {

    const {heroeId} = useParams();
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    if(!hero) {
        return <Redirect to="/marvel" />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;


    const handledReturn = () =>{
        if(history.length <= 2) {
            history.push('/');
        }else {
            history.goBack();
        }
    }

    return (
        <div className="row animate__animated animate__backInLeft">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} className="img-thumbnail rounded" alt={superhero}></img>
            </div>
            <div className="col-8 contenedor-heroe">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-dark" onClick={handledReturn}>
                    Back
                </button>
            </div>
        </div>
    )
}

