import { PropsWithChildren } from 'react';
import { Box } from './primitives/Box';

export const PokemonGrid = ({ children }: PropsWithChildren) => {
  return (
    <Box
      css={{
        display: 'grid',
        marginTop: '$4',
        marginRight: 'auto',
        width: '100%',
        '@bp1': {
          gridTemplateColumns: '1fr',
        },
        '@bp2': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(325px, 1fr))',
        },
        gap: '$5',
      }}
    >
      {children}
    </Box>
  );
};
