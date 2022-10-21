import { useQuery } from '@apollo/client';
import { Box, Heading, PokemonCard, PokemonGrid, Search } from 'design-system';
import { GET_POKEMONS_QUERY } from './data/pokemon';
import { Pokemon } from '../generated-types';
import { NamedPropertyInsideData } from './types';
function App() {
  const { data } =
    useQuery<NamedPropertyInsideData<'pokemons', Pokemon[]>>(
      GET_POKEMONS_QUERY
    );

  return (
    <Box container>
      <Box css={{ gap: '$3' }}>
        <div>
          <Heading>UFCG Pokedex</Heading>
          <span>Digite o nome do pokemon para começar!</span>
        </div>

        <Search />
      </Box>

      <PokemonGrid>
        {data?.pokemons.map((pokemon) => (
          <PokemonCard<Pokemon> key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonGrid>
    </Box>
  );
}

export default App;
