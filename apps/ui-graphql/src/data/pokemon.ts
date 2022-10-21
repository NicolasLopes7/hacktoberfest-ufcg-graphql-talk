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
