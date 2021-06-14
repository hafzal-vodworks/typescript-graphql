import { gql } from '@apollo/client';

export const GET_POKEMON_BY_NAME = gql`
    query getPokemonDetailsByName($pokemon: Pokemon!) {
        getPokemonDetailsByName(pokemon: $pokemon reverse: true take: 1) {
            num
            species
            types
            height
            weight
            sprite
        }  
    }
`;
