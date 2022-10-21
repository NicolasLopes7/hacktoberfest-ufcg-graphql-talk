import { Box, Heading, PokemonGrid, Search } from 'design-system';
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
        {/* {[pokemons].map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))} */}
      </PokemonGrid>
    </Box>
  );
}

export default App;
