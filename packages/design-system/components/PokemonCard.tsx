import { PokemonTypeBadge } from './PokemonTypeBadge';
import { Box } from './primitives/Box';
import { Heading } from './primitives/Heading';
import { Image } from './primitives/Image';
import { slateDark } from '@radix-ui/colors';
import { Text } from './primitives/Text';
import { GenericPokemon } from './types';
import { EditIcon } from './primitives/Icons';
import { useState } from 'react';
import { EditPokemonCard } from './EditPokemonCard';

type PokemonProps<T extends GenericPokemon> = {
  pokemon: T;
  onEdit: (pokemon: T) => Promise<void>;
};
export function PokemonCard<T extends GenericPokemon>({
  pokemon,
  onEdit,
}: PokemonProps<T>) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing)
    return (
      <EditPokemonCard
        pokemon={pokemon}
        stopEditing={() => setIsEditing(false)}
        onEdit={onEdit}
      />
    );
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
      <EditIcon onClick={() => setIsEditing(true)} />
      <Heading size="small">{pokemon.name}</Heading>
      <Image
        src={pokemon.image_url}
        alt={pokemon.name}
        css={{
          maxHeight: '10rem',
          maxWidth: '15rem',
        }}
      />
      <Box css={{ flexDirection: 'row', gap: '$2' }}>
        <Box css={{ flexDirection: 'row', gap: '$1' }}>
          <Text color="neutral-light">tipo: </Text>
          <PokemonTypeBadge type={pokemon?.info?.type} />
        </Box>
      </Box>
    </Box>
  );
}
