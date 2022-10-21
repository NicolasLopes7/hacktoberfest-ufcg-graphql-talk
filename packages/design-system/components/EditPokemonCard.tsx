import { slateDark } from '@radix-ui/colors';
import { useState } from 'react';
import { MdCheck } from 'react-icons/md';

import { Box } from './primitives/Box';
import { Button } from './primitives/Button';
import { ReturnIcon } from './primitives/Icons';
import { Image } from './primitives/Image';
import { Input } from './primitives/Input';
import { Select } from './primitives/Select';
import { Text } from './primitives/Text';
import { GenericPokemon } from './types';

type EditPokemonCard<T extends GenericPokemon> = {
  pokemon: T;
  stopEditing: () => void;
  onEdit: (pokemon: T) => Promise<void>;
};
export function EditPokemonCard<T extends GenericPokemon>({
  pokemon,
  stopEditing,
  onEdit,
}: EditPokemonCard<T>) {
  const [virtualPokemon, setVirtualPokemon] = useState(pokemon);
  return (
    <Box
      css={{
        position: 'relative',
        gap: '$2',
        maxHeight: 'fit-content',
        backgroundColor: slateDark.slate4,
        padding: '15px 25px 15px 25px',
      }}
    >
      <ReturnIcon onClick={stopEditing} />
      <Input
        size="small"
        value={virtualPokemon.name}
        onChange={(e) => {
          setVirtualPokemon({
            ...virtualPokemon,
            name: e.currentTarget.value,
          });
        }}
      />
      <Image
        src={pokemon.image_url}
        alt={pokemon.name}
        css={{
          maxHeight: '10rem',
          maxWidth: '15rem',
        }}
      />
      <Box css={{ flexDirection: 'row', gap: '$4' }}>
        <Box css={{ flexDirection: 'row', gap: '$1' }}>
          <Text color="neutral-light">tipo: </Text>
          <Select
            defaultValue={pokemon?.info?.type}
            onChange={(e) => {
              setVirtualPokemon({
                ...virtualPokemon,
                info: {
                  type: e.currentTarget.value,
                },
              });
            }}
          >
            <option value="fire">🔥</option>
            <option value="water">💦</option>
            <option value="electric">⚡</option>
          </Select>
        </Box>
        <Button
          size="small"
          type="icon"
          onClick={async () => {
            await onEdit(virtualPokemon);
            stopEditing();
          }}
        >
          Confirmar <MdCheck />
        </Button>
      </Box>
    </Box>
  );
}
