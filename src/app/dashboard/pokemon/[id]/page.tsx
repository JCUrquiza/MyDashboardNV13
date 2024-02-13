import { Metadata } from 'next';
import { Pokemon } from '@/pokemons';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { id, name } = await getPokemon(params.id);

    return {
        title: `#${id} - ${name}`,
        description: `Página del pokemón: ${name}`
    }

}

const getPokemon = async(id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache: 'force-cache'
    }).then(res => res.json());

    return pokemon;
    
}

export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemon(params.id);

    return (
        <div>
            <div>Pokemon { params.id }</div>
            <div>
                { pokemon.name }
            </div>
        </div>
    )
}
