import { gql } from '@apollo/client';

export const GET_POKEMONS_QUERY = gql`
  query GetPokemons {
    pokemons {
      id
      image_url
      name
      info {
        id
        type
      }
    }
  }
`;

export const UPDATE_POKEMON_MUTATION = gql`
  mutation UpdatePokemon($id: ID!, $data: UpdatePokemonInput!) {
    updatePokemon(id: $id, data: $data) {
      id
    }
  }
`;
