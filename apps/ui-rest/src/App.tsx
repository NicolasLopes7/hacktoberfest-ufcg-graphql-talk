import { PokemonCard, PokemonGrid } from 'design-system';
import { Box } from 'design-system';
import { Heading } from 'design-system';
import { Search } from 'design-system';
import { useEffect, useState } from 'react';
import { Pokemon } from 'ui-rest-types';
import { api } from './services/api';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async (search?: string) => {
    const queryString = search ? `?search=${search}` : '';
    const { data: pokemonData } = await api.get<Pokemon[]>(
      `/pokemons${queryString}`
    );
    for (const pokemon of pokemonData) {
      const { data: infoData } = await api.get(`/pokemon/${pokemon.id}/info`);
      pokemon.info = infoData;
    }

    setPokemons(pokemonData);
  };

  const handleEditPokemon = async (pokemon: Pokemon) => {
    await api.put(`/pokemon/${pokemon.id}`, pokemon);
    await fetchPokemons();
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Box container>
      <Box css={{ gap: '$3' }}>
        <div>
          <Heading>UFCG Pokedex</Heading>
          <span>Digite o nome do pokemon para começar!</span>
        </div>

        <Search onSearch={(searchTerm) => fetchPokemons(searchTerm)} />
      </Box>

      <PokemonGrid>
        {pokemons.map((pokemon) => (
          <PokemonCard
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
