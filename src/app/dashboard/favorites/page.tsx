import { Metadata } from 'next';
import { FavoritePokemons } from '@/pokemons';

export const metadata: Metadata = {
    title: 'Favoritos',
    description: 'Listado de pokemones'
}

export default async function PokemonsPage() {

    return (
        <div className='flex flex-col'>

            <span className='text-5xl my-2'>Pókemons Favoritos<small className='text-blue-500'>Global State</small></span>

            <FavoritePokemons />

        </div>
    )
}
