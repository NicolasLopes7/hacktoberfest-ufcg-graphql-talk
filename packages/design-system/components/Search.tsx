import { Button } from './primitives/Button';
import { MdCatchingPokemon } from 'react-icons/md';
import { Box } from './primitives/Box';
import { Input } from './primitives/Input';
import { useState } from 'react';

type SearchProps = {
  onSearch: (search: string) => Promise<void>;
};
export const Search = ({ onSearch }: SearchProps) => {
  const [pokemonName, setPokemonName] = useState('');
  return (
    <Box css={{ flexDirection: 'row', gap: '$1' }}>
      <Input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.currentTarget.value)}
      />
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '$2',
        }}
        size="small"
        onClick={() => onSearch(pokemonName)}
      >
        Buscar
        <MdCatchingPokemon />
      </Button>
    </Box>
  );
};
