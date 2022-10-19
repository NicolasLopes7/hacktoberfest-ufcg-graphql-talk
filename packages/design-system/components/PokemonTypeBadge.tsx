import { PokemonType } from 'ui-rest-types';
import { Box } from './primitives/Box';
import { Text } from './primitives/Text';

const typeColorMap = {
  [PokemonType.ELECTRIC]: {
    boxColor: '#b9be71',
    label: '⚡',
  },
  [PokemonType.FIRE]: {
    boxColor: '#F5A25D',
    label: '🔥',
  },
  [PokemonType.WATER]: {
    boxColor: '#9DB7F5',
    label: '💦',
  },
};

type PokemonTypeBadgeProps = { type: PokemonType };
export const PokemonTypeBadge = ({ type }: PokemonTypeBadgeProps) => {
  const { boxColor, label } = typeColorMap[type];

  return (
    <Box
      style={{
        backgroundColor: boxColor,
        padding: '3px 15px',
      }}
    >
      <Text>{label}</Text>
    </Box>
  );
};
