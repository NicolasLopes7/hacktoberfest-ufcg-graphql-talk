import { gql } from '@apollo/client';

const POKEMON_FRAGMENT = gql`
  fragment PokemonFragment on Pokemon {
    id
    image_url
    name
    info {
      id
      type
    }
  }
`;

export const GET_POKEMONS_QUERY = gql`
  query GetPokemons($search: String) {
    pokemons(search: $search) {
      ...PokemonFragment
    }
  }
  ${POKEMON_FRAGMENT}
`;

export const UPDATE_POKEMON_MUTATION = gql`
  mutation UpdatePokemon($id: ID!, $data: UpdatePokemonInput!) {
    updatePokemon(id: $id, data: $data) {
      id
    }
  }
`;
