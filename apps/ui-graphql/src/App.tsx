import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Box, Heading, PokemonCard, PokemonGrid, Search } from 'design-system';
import {
  GET_POKEMONS_QUERY,
  SEARCH_POKEMONS_QUERY,
  UPDATE_POKEMON_MUTATION,
} from './data/pokemon';
import { Pokemon } from '../generated-types';
import { GraphQLResult } from './types';
function App() {
  const { data, refetch } =
    useQuery<GraphQLResult<'pokemons', Pokemon[]>>(GET_POKEMONS_QUERY);

  const [updatePokemon] = useMutation(UPDATE_POKEMON_MUTATION, {
    refetchQueries: [GET_POKEMONS_QUERY],
  });

  const handleEditPokemon = async (pokemon: Pokemon) => {
    await updatePokemon({
      variables: {
        id: pokemon.id,
        data: {
          name: pokemon.name,
          type: pokemon.info?.type,
        },
      },
    });
  };

  const handleSearchPokemon = async (pokemonName: string) => {
    await refetch({ search: pokemonName });
  };

  return (
    <Box container>
      <Box css={{ gap: '$3' }}>
        <div>
          <Heading>UFCG Pokedex</Heading>
          <span>Digite o nome do pokemon para começar!</span>
        </div>

        <Search onSearch={handleSearchPokemon} />
      </Box>

      <PokemonGrid>
        {data?.pokemons.map((pokemon) => (
          <PokemonCard<Pokemon>
            key={pokemon.id}
            pokemon={pokemon}
            onEdit={handleEditPokemon}
          />
        ))}
      </PokemonGrid>
    </Box>
  );
}

export default App;
