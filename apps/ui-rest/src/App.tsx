import { PokemonCard, PokemonGrid } from 'design-system';
import { Box } from 'design-system';
import { Heading } from 'design-system';
import { Search } from 'design-system';
import { useEffect, useState } from 'react';
import { Pokemon } from 'ui-rest-types';
import { api } from './services/api';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async () => {
    const { data: pokemonData } = await api.get<Pokemon[]>('/pokemons');
    for (const pokemon of pokemonData) {
      const { data: infoData } = await api.get(`/pokemon/${pokemon.id}/info`);
      pokemon.info = infoData;
    }
    return pokemonData;
  };

  useEffect(() => {
    fetchPokemons().then(setPokemons);
  }, []);

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
