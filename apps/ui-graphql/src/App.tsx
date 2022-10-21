import { useQuery } from '@apollo/client';
import { Box, Heading, PokemonCard, PokemonGrid, Search } from 'design-system';
import { GET_POKEMONS_QUERY } from './data/pokemon';

function App() {
  const { data } = useQuery(GET_POKEMONS_QUERY);
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
        {/* @ts-ignore */}
        {data?.pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonGrid>
    </Box>
  );
}

export default App;
