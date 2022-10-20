import { PokemonCard, PokemonGrid } from 'design-system';
import { Box } from 'design-system';
import { Heading } from 'design-system';
import { Search } from 'design-system';
import { pokemons } from './mockData';

function App() {
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
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonGrid>
    </Box>
  );
}

export default App;
