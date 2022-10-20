import { Pokemon } from 'ui-rest-types';
import { PokemonTypeBadge } from './PokemonTypeBadge';
import { Box } from './primitives/Box';
import { Heading } from './primitives/Heading';
import { Image } from './primitives/Image';
import { slateDark } from '@radix-ui/colors';
import { Text } from './primitives/Text';

type PokemonProps = { pokemon: Pokemon };
export const PokemonCard = ({ pokemon }: PokemonProps) => {
  return (
    <Box
      css={{
        gap: '$2',
        maxHeight: 'fit-content',
        backgroundColor: slateDark.slate4,
        padding: '15px 25px 15px 25px',
      }}
    >
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
        <Text color="neutral-light">
          qtd. evoluções: {pokemon.evolutions?.length}
        </Text>
      </Box>
    </Box>
  );
};
