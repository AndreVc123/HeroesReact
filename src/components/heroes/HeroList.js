import React from 'react'
import { heroes } from '../../data/heroes';
import { getHeroPublisher } from '../../selectors/getHeoresByPublisher'
import HeroCard from './HeroCard';

export default function HeroList({publisher}) {
    const heroes = getHeroPublisher(publisher);
    return (
        <div className=" container row contenedor-principal">
            {
                heroes.map( heroe => (
                    <HeroCard key={heroe.id} {...heroe}>
                    </HeroCard>
                ))
            }
        </div>
    )
}
