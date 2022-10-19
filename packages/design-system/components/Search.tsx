import { Button } from './primitives/Button';
import { MdCatchingPokemon } from 'react-icons/md';
import { Box } from './primitives/Box';
import { Input } from './primitives/Input';
export const Search = ({}) => {
  return (
    <Box css={{ flexDirection: 'row', gap: '$1' }}>
      <Input type="text"/>
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '$2',
        }}
        size="small"
      >
        Buscar
        <MdCatchingPokemon />
      </Button>
    </Box>
  );
};
