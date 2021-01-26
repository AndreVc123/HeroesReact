import React from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import {getHeroesByName} from '../../selectors/getHeroesByName';

export default function SearchScreen({history}) {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    let heroesFiltered = getHeroesByName(q);
    let heroe = '';

    const handledSubmit = (e) => {
        e.preventDefault();

        history.push(`?q=${heroe}`);
    }

    const handledInput = (e) => {

        heroe = e.target.value;
    }

    return (
        <div>

                <div className="row contenedor-formulario">

                    <form className="search" onSubmit={handledSubmit}>
                        <input type="text" placeholder="Find your hero" className="form-control" onChange={ handledInput} />
                        <button type="submit" className="btn btn-outline-dark m-1 btn-block">
                            Search
                        </button>
                    </form>

                </div>

                <h4 className="text-center mt-4">Result</h4>

                {   
                    (q==='') && 
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                }

                <div className="container row contenedor-principal">
                    
                        {
                            heroesFiltered.map( heroe => (
                                <HeroCard key={heroe.id} {...heroe} >
                                </HeroCard>
                            ))
                        }

                </div>
        </div>
    )
}
